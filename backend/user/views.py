from .serializers import RegisterSerializer, UserInfoSerializer
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def user_register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
@api_view(['POST'])
def user_login(request):
    user_info = request.data.get('user_info')
    password = request.data.get('password')
    if '@' in user_info:
        user = User.objects.filter(email=user_info).first()
    else:
        user = User.objects.filter(username=user_info).first()
    if user and user.check_password(password):
        serializer = UserInfoSerializer(instance=user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(data={'message': 'User info or password is incorrect!'}, status=status.HTTP_400_BAD_REQUEST)