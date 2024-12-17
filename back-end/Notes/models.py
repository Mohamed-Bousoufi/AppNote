from django.db import models
from datetime import datetime

"""Model for a note."""
class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title
    
    # def save(self):
    #     if self.updated_at is None:
    #         self.updated_at = datetime.now()
    #     else:
    #         self.updated_at = datetime.now()
    #     super(Note, self).save()
