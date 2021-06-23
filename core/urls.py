from django.urls import path
from .views import home,galeria,contacto,mensajes

urlpatterns = [
    path('', home, name='home',),
    path('contacto/', contacto,name='contacto',),
    path('galeria/', galeria,name='galeria',),
    path('mensajes/', mensajes,name='mensajes' )
]