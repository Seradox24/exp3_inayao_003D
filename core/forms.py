from django import forms
from django.forms import ModelForm
from django.forms import widgets
from django.forms.models import ModelChoiceField
from django.forms.widgets import Widget
from .models import Contacto

class Contactoform(forms.ModelForm):

    class Meta:
        model= Contacto
        fields= ['correo','nombre','telefono','asunto','mensaje']
        labels = {
            'correo':'correo',
            'nombre':'nombre',
            'telefono':'telefono',
            'asunto':'asunto',
            'mensaje': 'mensaje',  
        }

        widgets={
            'correo':forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder':'ingrese su correo',
                    'id':'correo'
                }
            ),
            'nombre':forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder':'ingrese su nombre completo',
                    'id':'nombre'
                }
            ),
            'telefono':forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder':'ingrese su numero de telefono',
                    'id':'telefono'
                }
            ),
            'asunto':forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder':'ingrese el asunto de contacto',
                    'id':'asunto'
                }
            ),
            'mensaje':forms.TextInput(
                attrs={
                    'class':'form-control',
                    'placeholder':'ingrese el contenido del mensaje',
                    'id':'mensaje'
                }
            ),
        }


