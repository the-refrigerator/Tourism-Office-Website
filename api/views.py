import os

import openai
from django.shortcuts import get_object_or_404, render
from dotenv import load_dotenv
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.generics import (GenericAPIView, ListAPIView,
                                     RetrieveAPIView)
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .serializers import *

load_dotenv()
openai.api_key = os.getenv("GPTKEY")


class GPT(APIView):
    def post(self, request):
        try:
            if request.data.get("message", None) is None:
                return Response(status=status.HTTP_418_IM_A_TEAPOT)
            if request.data.get("id", None) is None:
                response = openai.ChatCompletion.create(
                    model="gpt-3.5-turbo",
                    messages=[
                        {
                          "role": "user",
                          "content": f"""{request.data['message']}"""
                        },
                    ],
                    temperature=1,
                    max_tokens=256,
                    top_p=1,
                    frequency_penalty=0,
                    presence_penalty=0
                )
                conv = Conversation(content=[
                                    {
                                        "role": "user",
                                        "content": request.data['message']
                                    },
                                    {
                                        "role": "assistant",
                                        "content": response['choices'][0]['message']['content']
                                    },
                                    ])
                conv.save()
                return Response({
                    "id": conv.id,
                    "content": conv.content,
                })
            conv = get_object_or_404(Conversation, pk=request.data["id"])
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=conv.content + [
                    {
                        "role": "user",

                        "content": f"""{request.data['message']}"""
                    }],
                temperature=1,
                max_tokens=256,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0
            )
            conv.content += [
                {
                    "role": "user",
                    "content": f"""{request.data['message']}"""
                },
                {
                    "role": "assistant",
                    "content": response['choices'][0]['message']['content']
                }
            ]

            conv.save()
            return Response({
                "id": conv.id,
                "content": conv.content,
            })
        except openai.error.ServiceUnavailableError as e:
            return Response({
                "message": "Sorry this service is unavailable at this time, try again later."
            }, status=status.HTTP_503_SERVICE_UNAVAILABLE)


class PlanetViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Planet.objects.all()
    serializer_class = PlanetSerializer


class SystemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = System.objects.all()
    serializer_class = SystemSerializer
