from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('posts/', views.post_list, name='post_list'),
    path('post/<slug:post_slug>/', views.post_detail, name='post_detail'),
    path('categories/', views.category_list, name='category_list'),

]
