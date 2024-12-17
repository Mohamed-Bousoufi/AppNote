from django.urls import path
from . import views

"""URL configuration for Notes app."""
urlpatterns = [path("notes", views.notes_list,name="notes")]