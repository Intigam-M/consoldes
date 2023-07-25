from .serializers import CategorySerializer, PostSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Category, Post


@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def post_list(request):
    posts = Post.objects.filter(is_published=True)
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def post_detail(request, post_slug):
    post = Post.objects.filter(slug=post_slug, is_published=True).first()
    if post:
        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(data={'message': 'Post not found!'}, status=status.HTTP_404_NOT_FOUND)

