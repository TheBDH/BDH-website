from django.db import models

# Create your models here.

'''class Article(models.Model):
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
    #description = models.CharField(max_length=1000)
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

    #year = models.CharField(max_length=2, choices=AUTHOR_YEAR, blank=True, default='', help_text='Author Year')

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
'''
###add in utility methods to get stuff from the database - for testing, instantiate the local db


#START OF NEW MODELS
#NOTE: This is not 100% finalized


class Author(models.Model):
    id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    pathtopicture = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    since = models.DateField()
    about = models.TextField()
    valid = models.BooleanField()
    maybewrong = models.BooleanField()


    #class Meta:
    #    managed = False
    #    db_table = 'Author'

class Image(models.Model):
    id = models.IntegerField(primary_key=True)
    file_path = models.CharField(max_length=300)




class Section(models.Model):
    parent = models.ForeignKey('self', models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)



class Tag(models.Model):
    name = models.CharField(unique=True, max_length=50)

    #class Meta:
    #    managed = False
    #    db_table = 'Topic'


class Article(models.Model):
    id = models.IntegerField(primary_key=True)
    body = models.TextField()
    title = models.CharField(max_length=100)
    #posted_date = models.DateField(auto_now=True)
    #modified_date = models.DateField(auto_now_add=True)
    posted_date = models.DateField()
    modified_date = models.DateField()
    authors = models.ManyToManyField(Author)
    image_url = models.ManyToManyField(Image)
    section = models.ForeignKey(Section, on_delete=models.DO_NOTHING)
    topic = models.ManyToManyField(Tag)






'''class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'
'''


'''class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)'''


'''class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)
'''


'''
class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'

'''



#END OF NEW MODELS
from django.shortcuts import get_object_or_404

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.core import blocks
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.contrib.routable_page.models import RoutablePageMixin, route
from pprint import pprint #debugging
from wagtail.search import index

class ArticlePage(RoutablePageMixin, Page):

    content = RichTextField(blank=True)
    section_list = (
                ('h', 'Home'),
            	('n', 'News'),
            	('ac', 'Arts & Culture'),
            	('sr', 'Science & Research'),
            	('sp', 'Sports'),
                ('op', 'Opinion'),
                ('pt', 'Post'),
                ('blg', 'Blog'),
            )
    section = models.CharField(max_length=8, choices=section_list, blank=True, default='h')
    summary = RichTextField(blank=True)

    yes_no = {
            ('y', 'Yes'),
            ('n', 'No'),
        }

    featured_on_section = models.CharField(max_length=2, choices=yes_no, blank=True, default='y')
    featured_on_main = models.CharField(max_length=2, choices=yes_no, blank=True, default='y')

    # make sure it displays both the authors' names and their position 
    #authors = models.ManyToManyField(AuthorsPage, help_text="Select author names")

    # need to figure out how to make the tags become links, should we use a list instead
    # of plain charfield?
    tags = models.CharField(max_length = 255, blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('content', classname="class"),
        FieldPanel('section', classname='class'),
        FieldPanel('summary', classname='class'),
        FieldPanel('featured_on_section', classname='class'),
        FieldPanel('featured_on_main', classname='class'),
        FieldPanel('tags', classname='full'),
        #FieldPanel('authors', classname='class'),
    ]

    search_fields = Page.search_fields + [
        index.SearchField('content'),
        index.SearchField('section'),
        index.SearchField('summary'),
        index.SearchField('tags'),
        #index.SearchField('authors'),
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

class AuthorsPage(RoutablePageMixin, Page):

    name = models.CharField(max_length = 255)
    lastName = models.CharField(max_length = 255)
    description = RichTextField(blank=True)

    author_rank = (
    	('con', 'Contributing Writer'),
    	('ssw', 'Senior Staff Writer'),
    	('stw', 'Staff Writer'),
    )

    author_year = (
    	('fr', 'Freshman'),
    	('so', 'Sophomore'),
    	('ju', 'Junior'),
    	('se', 'Senior'),
        ('gs', 'Graduate Student'),
    )

    #articles = models.ManyToManyField(ArticlePage, help_text="Select article names")
    position = models.CharField(max_length=3, choices=author_rank, blank=True, default='con')
    year = models.CharField(max_length=5, choices=author_year, blank=True, default='fr',)

    content_panels = Page.content_panels + [
        FieldPanel('name', classname='class'),
        FieldPanel('lastName', classname='class'),
        FieldPanel('description', classname='class'),
        FieldPanel('position', classname='class'),
        FieldPanel('year', classname='class'),
        #FieldPanel('articles', classname='class'),
    ]
