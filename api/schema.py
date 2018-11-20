from __future__ import unicode_literals
import graphene
from graphene_django import DjangoObjectType
from newspaper.models import ArticlePage

from django.db import models

class ArticleNode(DjangoObjectType):
    class Meta:
        model = ArticlePage
        only_fields = ['id', 'title', 'date', 'content', 'section', 'summary', 'tags', 'authors']


class Query(graphene.ObjectType):
    articles = graphene.List(ArticleNode)

    @graphene.resolve_only_args
    def resolve_articles(self):
        return ArticlePage.objects.live()

schema = graphene.Schema(query=Query)