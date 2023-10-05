from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import (GenericAPIView, ListAPIView,
                                     RetrieveAPIView)

from .models import *
from .serializers import *


class PlanetViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Planet.objects.all()
    serializer_class = PlanetSerializer


class SystemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = System.objects.all()
    serializer_class = SystemSerializer
