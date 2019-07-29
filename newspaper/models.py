from django.db import models
from django.apps import AppConfig

#START OF NEW MODELS
#NOTE: This is not 100% finalizeds

class Author(models.Model):
    #id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    pathtopicture = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    since = models.DateField()
    about = models.TextField()
    valid = models.BooleanField()
    maybewrong = models.BooleanField(default = False)


    #class Meta:
    #    managed = False
    #    db_table = 'Author'

class Image(models.Model):
    #id = models.IntegerField(primary_key=True)
    file_path = models.CharField(max_length=300)




class Category(models.Model):
    parent = models.ForeignKey('self', models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    visible = models.BooleanField(default = True)



class Tag(models.Model):
    name = models.CharField(unique=True, max_length=50)

    #class Meta:
    #    managed = False
    #    db_table = 'Topic'


class Article(models.Model):
    #id = models.IntegerField(primary_key=True)
    body = models.TextField(default = "")
    title = models.CharField(max_length=100)
    #posted_date = models.DateField(auto_now=True)
    #modified_date = models.DateField(auto_now_add=True)
    posted_date = models.DateField()
    modified_date = models.DateField()
    authors = models.ManyToManyField(Author)
    image_url = models.ManyToManyField(Image)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    topic = models.ManyToManyField(Tag)
    maybewrong = models.BooleanField(default = False)

from django.shortcuts import get_object_or_404
from wagtail.contrib.forms.models import AbstractEmailForm, AbstractFormField
from wagtail.core.models import Page, Orderable
from wagtail.core.fields import RichTextField
from wagtail.api import APIField
from wagtail.api.v2.serializers import PageSerializer
from wagtail.admin.edit_handlers import FieldPanel, FieldRowPanel, InlinePanel, MultiFieldPanel
from wagtail.contrib.routable_page.models import RoutablePageMixin, route
from django.forms import ModelForm
from pprint import pprint #debugging

from wagtail.search import index

from wagtail.contrib.forms.models import AbstractEmailForm, AbstractFormField
from modelcluster.fields import ParentalKey

from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.images.models import Image


import datetime

class AuthorsPage(RoutablePageMixin, Page):

    name = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    description = RichTextField(blank=True)
    pathtopicture = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    since = models.DateField(default = datetime.datetime.now())
    valid = models.BooleanField(default = True)
    maybewrong = models.BooleanField(default = False)

    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    author_rank = (
        ('', ''),
        ('con','Contributing Writer'),
        ('sw', 'Staff Writer'),
        ('ssw', 'Senior Staff Writer'),
        ('sre', 'Senior Reporter'),
        ('ned', 'News Editor'),
        ('sred', 'Science & Research Editor'),
        ('ace', 'Arts & Culture Editor'),
        ('spe', 'Sports Editor'),
        ('epb', 'Editorial Page Board'),
        ('eb', 'Editorial Board'),
        ('sc' , 'Staff Columnist'),
        ('oc', 'Op-Ed Contributor'),
    )

    author_year = (
        ('fr', 'First-Year'),
        ('so', 'Sophomore'),
        ('ju', 'Junior'),
        ('se', 'Senior'),
        ('gs', 'Graduate Student'),
    )

    position = models.CharField(max_length=3, choices=author_rank, blank=True, default='con')
    year = models.CharField(max_length=5, choices=author_year, blank=True, default='fr',)

    content_panels = Page.content_panels + [
        FieldPanel('name', classname='class'),
        FieldPanel('lastName', classname='class'),
        FieldPanel('description', classname='class'),
        FieldPanel('position', classname='class'),
        FieldPanel('year', classname='class'),
        ImageChooserPanel('image', classname='image')
    ]

    api_fields = [
        APIField('name'),
        APIField('lastName'),
        APIField('description'),
        APIField('position'),
        APIField('year'),
        APIField('image'),
        APIField('articles'),
    ]

from modelcluster.fields import ParentalKey
from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.models import TaggedItemBase

class ArticleTag(TaggedItemBase):
    content_object = ParentalKey(
        'ArticlePage',
        related_name='tagged_items',
        on_delete=models.CASCADE
    )

class ArticlePage(RoutablePageMixin, Page):

    sum_deck = models.CharField(max_length=1000)
    content = RichTextField(blank=True)

    yes_no = {
            ('y', 'Yes'),
            ('n', 'No'),
        }

    draft = models.CharField(max_length=2, choices=yes_no, blank=True, default='n')

    section_list = (
                ('unews', 'University News'),
                ('metro', 'Metro'),
                ('sr', 'Science & Research'),
                ('ac', 'Arts & Culture'),
                ('sports', 'Sports'),
                ('sportscol', 'Sports Columns'),
                ('opinion', 'Opinion'),
                ('col', 'Columns'),
                ('edit', 'Editorials'),
                ('letter', 'Letters to the Editor'),
                ('notes', "Editors' Note"),
                ('mult', 'Multimedia'),
                ('vid', 'Video'),
                ('gal', 'Photo Gallery'),
                ('igraph', 'Interactive Graphic'),
                ('graph', 'Graphics'),
                ('ill', 'Illustrations'),
                ('op', 'Op-eds'),
                ('data', 'Data Science'),
                ('com', 'Comics'),
                # add more to this list
            )

    featured_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    tags = ClusterTaggableManager(through=ArticleTag)
    section = models.CharField(max_length=8, choices=section_list, blank=True, default='h')

    nums = {
        ('1', 'Primary'),
        ('2', 'Secondary'),
        ('3', 'Tertiary'),
    }

    featured_on_main = models.CharField(max_length=2, choices=yes_no, blank=True, default='n')
    position_on_main = models.CharField(max_length=1, choices=nums, blank=True)

    api_fields = [
        APIField('sum_deck'),
        APIField('content'),
        APIField('draft'),
        APIField('section'),
        APIField('featured_on_main'),
        APIField('position_on_main'),
        APIField('tags'),
        APIField('authors'),
        APIField('featured_image'),
        APIField('gallery_images')
    ]

    content_panels = Page.content_panels + [
        FieldPanel('section', classname='class'),
        FieldPanel('sum_deck', classname='class'),
        FieldPanel('draft', classname='class'),
        FieldPanel('featured_on_main', classname='class'),
        FieldPanel('position_on_main', classname='class'),
        FieldPanel('tags'),
        InlinePanel('authors', heading='authors', help_text='Add contributing authors'),
        FieldPanel('content', classname='class'),
        ImageChooserPanel('featured_image', classname='image'),
        InlinePanel('gallery_images', label="Photo Gallery Images"),
    ]

    search_fields = Page.search_fields + [
        index.SearchField('content'),
        index.SearchField('section'),
        index.SearchField('sum_deck'),
        index.SearchField('tags'),
        index.SearchField('authors'),
    ]

class ArticlePageGalleryImage(Orderable):
    page = ParentalKey(ArticlePage, related_name='gallery_images')
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.CASCADE, related_name='+'
    )
    caption = models.CharField(blank=True, max_length=250)

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('caption'),
    ]

    api_fields = [
        APIField('image', serializer=PageSerializer)
    ]


class ArticleAuthorRelationship(models.Model):
    """

    Intermediate table supporting ManyToMany between Articles and Authors
    (Wagtail does not by default support this)

    i.e. an article with 3 authors will create 3 rows in this table
    """

    article = ParentalKey(
        ArticlePage,
        related_name='authors'
    )

    author = models.ForeignKey(
        'AuthorsPage',
        related_name='articles',
        on_delete=models.PROTECT
    )

    panels = [
        FieldPanel('author')
    ]

    api_fields = [
        APIField('author', serializer=PageSerializer)
    ]


class FormField(AbstractFormField):
    page = ParentalKey('FormPage', on_delete=models.CASCADE, related_name='form_fields')

class FormPage(AbstractEmailForm):

    #isTipPage = models.BooleanField()

    content = models.CharField(max_length=500)

    content_panels = AbstractEmailForm.content_panels + [
        InlinePanel('form_fields', label="Form fields"),
        MultiFieldPanel([
            FieldRowPanel([
                FieldPanel('from_address', classname="col6"),
                FieldPanel('to_address', classname="col6"),
            ]),
            FieldPanel('subject'),
            FieldPanel('content'),
        ], "Email"),
    ]
