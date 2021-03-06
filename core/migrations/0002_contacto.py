# Generated by Django 3.2.4 on 2021-06-22 23:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contacto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('correo', models.CharField(max_length=50, verbose_name='correo de Contacto')),
                ('nombre', models.CharField(max_length=75, verbose_name='nombre completo')),
                ('telefono', models.CharField(max_length=15, verbose_name='numero de contacto')),
                ('asunto', models.CharField(max_length=50, verbose_name='asunto del mensaje')),
                ('mensaje', models.TextField(max_length=200, verbose_name='mensaje')),
            ],
        ),
    ]
