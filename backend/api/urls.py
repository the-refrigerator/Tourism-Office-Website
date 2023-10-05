from rest_framework.routers import DefaultRouter

from .views import *

urlpatterns = []

router = DefaultRouter()
router.register(r'planets', PlanetViewSet, basename='planets')
router.register(r'systems', SystemViewSet, basename='systems')

urlpatterns += router.urls
