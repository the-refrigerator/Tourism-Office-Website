from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import *

urlpatterns = [
    path('ask/', GPT.as_view(), name='GPT')
]

router = DefaultRouter()
router.register(r'planets', PlanetViewSet, basename='planets')
router.register(r'systems', SystemViewSet, basename='systems')

urlpatterns += router.urls
