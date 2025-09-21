from rest_framework import serializers
from .models import SiteSettings, Department, ServiceCategory, ServiceItem

class SiteSettingsSerializer(serializers.ModelSerializer):
    background_image = serializers.ImageField(use_url=True, required=False)
    class Meta:
        model = SiteSettings
        fields = "__all__"

class DepartmentSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True, required=False)
    class Meta:
        model = Department
        fields = "__all__"

class ServiceItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceItem
        fields = ("id", "title", "description", "order", "active")


class ServiceCategorySerializer(serializers.ModelSerializer):
    # devolver solo items activos y ordenados
    items = serializers.SerializerMethodField()

    class Meta:
        model = ServiceCategory
        fields = ("id", "title", "slug", "description", "order", "items")

    def get_items(self, obj):
        qs = obj.items.filter(active=True).order_by("order")
        return ServiceItemSerializer(qs, many=True, context=self.context).data
