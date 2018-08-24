from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.TextField(help_text="Enter Article Title")
    article_slug = models.TextField(help_text="Enter Article Slug Here", default="")
    authors = models.ManyToManyField('Author', help_text="Select Author Names") # dropdown for authors - could get unwieldy? evaluate later ... searchable?
    tags = models.ManyToManyField('Tags', help_text="Tags for this Article")
    sections = models.ManyToManyField("Sections", help_text="Article Sections")
    pubdate = models.DateField(auto_now=True) #use for last-modified time stamps

    metadata_article = models.DateField(auto_now = True)

    #comments and images as a ForeignKeyField ?
    text = models.TextField(help_text="Article Text Goes Here", default="la la la") #django is unhappy if we don't define max length
    article_id = models.AutoField(primary_key=True) # automatically generate a unique Article ID, increments

    PUB_STATUS = (
		('d', 'Draft'),
		('p', 'Published'),
    )

    status = models.CharField(max_length=1, choices=PUB_STATUS, blank=True, default='d', help_text='Publication Status')

	# Metadata
    class Meta: 
        ordering = ["-pubdate"]

	# Methods
    def get_absolute_url(self):
        #Returns the url to access a particular instance of MyModelName.
        return reverse('article-detail', args=[str(self.id)])

    def __str__(self):
        return self.title

    def disp_authors(self):
        return ', '.join([ author.first_name + " " + author.last_name for author in self.authors.all()[:3] ])
    disp_authors.short_description = 'Authors'

class Tags(models.Model):
    tag_value = models.CharField(max_length=1000)
    number_of_contents_with_tag = models.IntegerField()

class Sections(models.Model):
    name = models.CharField(help_text="Section Name", max_length=100)

class Author(models.Model):
    """
    Model representing an author.
    """
    first_name = models.CharField(max_length=1000)
    last_name = models.CharField(max_length=1000)
    #articles = models.ManyToManyField(Article)
    
    AUTHOR_RANK = (
    	('con', 'Contributing Writer'),
    	('ssw', 'Senior Staff Writer'),
    	('stw', 'Staff Writer'),
    )

    articles = models.ManyToManyField('Article', help_text="Select Articles Names") # dropdown for authors - could get unwieldy? evaluate later ... searchable?
    rank = models.CharField(max_length=3, choices=AUTHOR_RANK, blank=True, default='con', help_text='Author Rank')

    AUTHOR_YEAR = (
    	('fr', 'Freshman'),
    	('so', 'Sophomore'),
    	('ju', 'Junior'),
    	('se', 'Senior'),
        ('gs', 'Graduate Student'),
    )

    year = models.CharField(max_length=2, choices=AUTHOR_YEAR, blank=True, default='', help_text='Author Year')

    class Meta:
        ordering = ["last_name","first_name"]
    
    def get_absolute_url(self):
        """
        Returns the url to access a particular author instance.
        """
        return reverse('author-detail', args=[str(self.id)])
    

    def __str__(self):
        """
        String for representing the Model object.
        """
        return '{0} {1}, {2}'.format(self.first_name,self.last_name,self.year)

###add in utility methods to get stuff from the database - for testing, instantiate the local db

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.contrib.routable_page.models import RoutablePageMixin, route
from pprint import pprint #debugging

class ArticlePage(RoutablePageMixin, Page):
    intro = RichTextField(blank=True)
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]

    @route(r'^(\d{4})/(\d{2})/(\d{2})/(.+)/$')
    def dated_article_with_slug(self, request, year, month, day, slug):
        pprint(vars(self))
        post_page = self.get_posts().filter(slug=slug).first()
        if not post_page:
            raise Http404
        return Page.serve(post_page, request, *args, **kwargs)

    def post_by_date_slug(self, request, year, month, day, slug, *args, **kwargs):
        post_page = self.get_posts().filter(slug=slug).first()
        if not post_page:
            raise Http404
        return Page.serve(post_page, request, *args, **kwargs)

    # @route(r'^(\d{4})/(\d{2})/(\d{2})/(.+)/$')
    # def post_by_date_slug(self, request, year, month, day, slug, *args, **kwargs):
    #     post_page = self.get_posts().filter(slug=slug).first()
    #     if not post_page:
    #         raise Http404
    #     return Page.serve(post_page, request, *args, **kwargs)



