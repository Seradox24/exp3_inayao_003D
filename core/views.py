from django.shortcuts import render

# Create your views here.

def home (request):
    nombre='Matias Inayao'


    return render(request, 'index.html', context={'nom_usuario': nombre},
    )

def galeria(request):

    return render(request,'galeria.html',)