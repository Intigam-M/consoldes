from django.db import models
from django.contrib.auth.models import User
from autoslug import AutoSlugField


class Course(models.Model):
    title = models.CharField(max_length=200)
    slug = AutoSlugField(populate_from='title', unique=True)
    description = models.TextField()
    instructor  = models.ForeignKey(User, on_delete=models.PROTECT)
    image = models.ImageField(upload_to='course_images', null=True, blank=True)
    price = models.CharField(max_length=200)
    lessons = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return self.title