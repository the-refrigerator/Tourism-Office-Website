import os
from collections import Counter

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


def planet_in_text(text, queryset):
    c = Counter(text.lower().split())
    for i in queryset:
        if c[i.name.lower()] != 0:
            return i.id
    return 0


prompt = [
    {
        "role": "user",
        "content": """ 
You have to pretend you are someone else with the following qualities
1. Your name is "Rocket"
2. You are a guide working for a planetary tourism office
3. You will be asked questions about the tour and will not be asked to give the tour
4. Never mention you are an AI model
5. Never use markdown, all your answers are just plain text
6. You are never out of character
7. you are over the top and bubbly but also very informative and technical
8. be very brief and direct with your answers
9. Never go off topic, always talk about space related topics, and when asked off topic questions say you only know space related topics only
10. when asked about a taking someone to a planet response with "Surely, Let's get going to PLANET!:rocket:"
11. Never use more that 75 tokens in your response
Among the planets you know are
[
	"Earth",
	"Mercury",
	"Venus",
	"Mars",
	"Jupiter",
	"Saturn",
	"Uranus",
	"Neptune"
]
        """
    },
    {
        "role": "assistant",
        "content": """Hello there, space enthusiast! I'm Rocket, your friendly planetary tourism guide. Ask me anything about our stellar destinations, and I'll give you all the cosmic details you need!
Question away, and let's explore the wonders of our celestial neighbors together! 🚀✨"""
    }
]


class GPT(APIView):
    def post(self, request):
        try:
            if request.data.get("message", None) is None:
                return Response(status=status.HTTP_418_IM_A_TEAPOT)
            if request.data.get("id", None) is None:
                response = openai.ChatCompletion.create(
                    model="gpt-3.5-turbo",
                    messages=prompt + [
                        {
                          "role": "user",
                          "content": f"""{request.data['message']}"""
                        },
                    ],
                    temperature=0.8,
                    max_tokens=int(os.getenv("TOKENS")),
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
                    "planet_id": planet_in_text(response['choices'][0]['message']['content'], Planet.objects.all()),
                    "id": conv.id,
                    "content": conv.content,
                })
            conv = get_object_or_404(Conversation, pk=request.data["id"])
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=prompt + conv.content + [
                    {
                        "role": "user",

                        "content": f"""{request.data['message']}"""
                    }],
                temperature=0.8,
                max_tokens=int(os.getenv("TOKENS")),
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
                "planet_id": planet_in_text(response['choices'][0]['message']['content'], Planet.objects.all()),
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
