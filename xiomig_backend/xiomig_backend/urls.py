"""
URL configuration for xiomig_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# xiomig_clone/urls.py (fragmento)
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core import views as core_views
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
router.register(r"service-categories", core_views.ServiceCategoryViewSet, basename="servicecategory")
router.register(r"departments", core_views.DepartmentViewSet, basename="department")
# site-settings is a custom viewset (list returns singleton)
# we'll map /api/site-settings/ to SiteSettingsViewSet.list via include below

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api/site-settings/", core_views.SiteSettingsViewSet.as_view({"get": "list"}), name="site-settings"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


