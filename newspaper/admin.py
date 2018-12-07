from django.contrib import admin
from .models import Article, Author #import all models here

# Register your models here.

#admin.site.register(Article)
#admin.site.register(Author)
# #register more models
#
# class AuthorAdmin(admin.ModelAdmin):
# 	list_display = ('first_name', 'last_name', 'rank', 'year')


# @admin.register(Article)
# class ArticleAdmin(admin.ModelAdmin):
# 	list_display = ('title', 'disp_authors', 'pubdate', 'article_id', 'status')


# Register the admin class with the associated model
#admin.site.register(Author, AuthorAdmin)
