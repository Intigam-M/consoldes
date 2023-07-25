from .models import Course
from .serializers import CourseSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def course_list(request):
    courses = Course.objects.filter(is_published=True)
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def course_detail(request, course_slug):
    course = Course.objects.filter(slug=course_slug, is_published=True).first()
    if course:
        serializer = CourseSerializer(course)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(data={'message': 'Course not found!'}, status=status.HTTP_404_NOT_FOUND)