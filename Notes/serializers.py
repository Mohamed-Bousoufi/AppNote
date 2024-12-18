from Notes.models import Note
from rest_framework import serializers

class NoteSerializer(serializers.ModelSerializer):
    
    """rules for serializing and deserializing Note objects."""
    extra_field = serializers.ReadOnlyField()
    
    class Meta:
        model = Note
        fields = "__all__"