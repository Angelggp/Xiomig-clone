from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import SiteSettings, Department, ServiceCategory
from .serializers import SiteSettingsSerializer, DepartmentSerializer, ServiceCategorySerializer

class SiteSettingsViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        obj, _ = SiteSettings.objects.get_or_create(pk=1)
        serializer = SiteSettingsSerializer(obj, context={"request": request})
        # retornamos como objeto único (frontend lo esperará así)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        obj, _ = SiteSettings.objects.get_or_create(pk=1)
        serializer = SiteSettingsSerializer(obj, context={"request": request})
        return Response(serializer.data)

class DepartmentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Department.objects.all().order_by("order")
    serializer_class = DepartmentSerializer
    permission_classes = [permissions.AllowAny]


class ServiceCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ServiceCategory.objects.all().order_by("order")
    serializer_class = ServiceCategorySerializer
    permission_classes = [permissions.AllowAny]