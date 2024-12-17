from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from Notes.models import Note
from Notes.serializers import NoteSerializer
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])


def notes_list(request):
    # """this for the list of notes in read mode"""
    if request.method == 'GET':
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
    # """this for the list of notes in write mode"""
    elif request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("ser : ",request.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def solo_note(request, title):
    try:
        note = Note.objects.get(title=title)
    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # """this for the solo note in read mode"""
    if request.method == 'GET':
        serializer = NoteSerializer(note)
        return Response(serializer.data)
    # """this for the solo note in write mode"""
    elif request.method == 'POST':
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # """this for the solo note in delete mode"""
    elif request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)