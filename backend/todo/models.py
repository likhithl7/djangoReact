from django.db import models

# Create your models here.
class Todo(models.Model):
    url = models.CharField(max_length=200)
    description = models.TextField(max_length=200,default='some string')
    
    def __str__(self):
        return self.description