from rest_framework import serializers

from .models import *


class PlanetSerializer(serializers.ModelSerializer):
    hotspots = serializers.SerializerMethodField()

    class Meta:
        model = Planet
        fields = '__all__'
        depth = 1

    def get_hotspots(self, obj):
        return HotspotSerializer(Hotspot.objects.filter(planet=obj), many=True).data


class HotspotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotspot
        exclude = ['id', 'planet']


class SystemSerializer(serializers.ModelSerializer):
    planets = serializers.SerializerMethodField()

    class Meta:
        model = System
        fields = '__all__'

    def get_planets(self, obj):
        return PlanetSerializer(Planet.objects.filter(systems=obj), many=True).data
