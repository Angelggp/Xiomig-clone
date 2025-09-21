from django.contrib import admin

# Register your models here.
# core/admin.py
from .models import SiteSettings, Department, ServiceCategory, ServiceItem

@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ("site_name", "primary_color", "secondary_color", "updated_at")

    def has_add_permission(self, request):
        # Sólo permitir añadir si no existe (forzar singleton)
        return not SiteSettings.objects.exists()

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ("title", "order")
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("order",)

class ServiceItemInline(admin.TabularInline):
    model = ServiceItem
    extra = 1
    fields = ("title", "order", "active")
    show_change_link = True

@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ("title", "order")
    prepopulated_fields = {"slug": ("title",)}
    inlines = [ServiceItemInline]

