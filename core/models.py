from django.db import models

# Create your models here.

class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True, verbose_name='Id de Categoria')
    nombreCategoria=models.CharField(max_length=50,verbose_name='Nombre de la categoria')

    def __str__(self):
        return self.nombreCategoria

class Vehiculo(models.Model):
    patente = models.CharField(max_length=6, primary_key=True, verbose_name='Patente')
    marca= models.CharField(max_length=20,verbose_name='marca Vehiculo')
    modelo= models.CharField(max_length=20,null=True, blank=True,verbose_name='Modelo')
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        return self.patente

class Contacto(models.Model):
    correo=models.CharField(max_length=50, verbose_name='correo de Contacto')
    nombre=models.CharField(max_length=75,verbose_name='nombre completo')
    telefono=models.CharField(max_length=15,verbose_name='numero de contacto')
    asunto=models.CharField(max_length=50,verbose_name='asunto del mensaje')
    mensaje=models.TextField(max_length=200,verbose_name='mensaje')

    def __str__(self):
        return self.correo
