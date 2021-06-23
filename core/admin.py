from django.contrib import admin
from .models import Categoria,Vehiculo,Contacto

# Register your models here.

admin.site.register(Categoria)
admin.site.register(Vehiculo)
admin.site.register(Contacto)