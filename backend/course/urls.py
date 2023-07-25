from django.urls import path
from . import views

app_name = 'course'

urlpatterns = [
    path('courses/', views.course_list, name='course_list'),
    path('course/<slug:course_slug>/', views.course_detail, name='course_detail'),
]
