# Generated by Django 4.2.6 on 2023-10-04 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_planet_systems'),
    ]

    operations = [
        migrations.AddField(
            model_name='planet',
            name='name',
            field=models.CharField(default='', max_length=200),
        ),
    ]
