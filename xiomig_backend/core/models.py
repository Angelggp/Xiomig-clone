from django.db import models

# Create your models here.
from django.utils.text import slugify

class SiteSettings(models.Model):
    """
    Singleton model: datos globales del sitio (texto, paleta, fondo, contacto).
    Guardamos siempre con pk=1 para forzar única instancia (simple para pruebas).
    """
    site_name = models.CharField(max_length=200, default="Xiomig Clone")
    hero_title = models.CharField(max_length=255, blank=True)
    hero_subtitle = models.TextField(blank=True)
    primary_color = models.CharField(max_length=15, default="#d22b2875", help_text="Hex, ej. #d22b2875")
    secondary_color = models.CharField(max_length=15, default="#113638", help_text="Hex, ej. #113638")
    background_image = models.ImageField(upload_to="backgrounds/", null=True, blank=True)
    contact_email = models.EmailField(blank=True)
    contact_phone = models.CharField(max_length=50, blank=True)
    facebook = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        self.pk = 1  # forzar singleton (sencillo para pruebas técnicas)
        super().save(*args, **kwargs)

    def __str__(self):
        return "Site Settings (singleton)"

    class Meta:
        verbose_name = "Site Settings"


class Department(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="departments/", null=True, blank=True)
    order = models.PositiveIntegerField(default=0)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    

class ServiceCategory(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)  # opcional, para subtítulo de categoría
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = "Service Category"
        verbose_name_plural = "Service Categories"
        ordering = ["order", "title"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)[:50]
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class ServiceItem(models.Model):
    """
    Cada 'bullet' dentro de una categoría (ej: "Diseño de Identidad Visual (logotipo).")
    """
    category = models.ForeignKey(ServiceCategory, related_name="items", on_delete=models.CASCADE)
    title = models.CharField(max_length=250)  # texto del bullet
    description = models.TextField(blank=True)  # no obligatorio
    order = models.PositiveIntegerField(default=0)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Service Item"
        verbose_name_plural = "Service Items"
        ordering = ["order"]

    def __str__(self):
        return f"{self.title} ({self.category.title})"
