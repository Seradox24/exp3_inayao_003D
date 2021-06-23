from django.shortcuts import render
from .models import Contacto
# Create your views here.

def home (request):
    nombre='Matias Inayao'


    return render(request, 'index.html', context={'nom_usuario': nombre},
    )

def contacto(request):
    return render(request, 'contacto.html')

def galeria(request):

    return render(request,'galeria.html',)

def mensajes(request):
    mensajes=Contacto.objects.all()
    
    return render(request,'mensajes.html',context={'datos':mensajes,})



