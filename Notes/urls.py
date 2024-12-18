from django.urls import path
from . import views

"""URL configuration for Notes app."""
urlpatterns = [
    path("notes", views.notes_list,name="notes"),
    path("notes/<title>", views.solo_note,name="notes_detail"),
    ]