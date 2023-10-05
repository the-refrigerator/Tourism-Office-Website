from django.db import models


class System(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Planet(models.Model):
    class PlanetTypes(models.TextChoices):
        MOON = "Moon"
        PLANET = "Planet"
        STAR = "Star"

    name = models.CharField(max_length=200, default="")
    planet_type = models.TextField(choices=PlanetTypes.choices)
    systems = models.ManyToManyField(System, null=True, blank=True)
    size = models.CharField(max_length=300)
    speed = models.CharField(max_length=300)
    distance_to_closest_star = models.CharField(max_length=300)
    average_surface_temperature = models.CharField(max_length=300)
    color_map = models.FileField(upload_to="static", blank=False)
    bump_map = models.FileField(upload_to="static", blank=True)
    specular_map = models.FileField(upload_to="static", blank=True)

    def __str__(self):
        return self.name


class Hotspot(models.Model):
    name = models.CharField(max_length=200)
    planet = models.ForeignKey(to=Planet, on_delete=models.PROTECT)
    longitude = models.CharField(max_length=300)
    latitude = models.CharField(max_length=300)
    hotspot_type = models.CharField(max_length=300)
    description = models.TextField()
    popularity = models.TextField()

    def __str__(self):
        return self.name
