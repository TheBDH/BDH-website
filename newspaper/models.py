from django.db import models

# Create your models here.

class Article(models.Model):
	title = models.CharField(help_text="Enter Article Title", max_length=10000)
	authors = models.ManyToManyField('Author', help_text="Select Author Names") # dropdown for authors - could get unwieldy? evaluate later ... searchable?
    #sections = models.ManyToManyField(Sections, help_text="Article Sections") #same as above
	pubdate = models.DateField(auto_now=True) #use for last-modified time stamps
    #topics = models.ManyToManyField(Topics, help_text="Article Topics")
    #comments and images as a ForeignKeyField ?
	text = models.CharField(help_text="Article Text Goes Here", max_length=1000000000) #django is unhappy if we don't define max length
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
		 """
		 Returns the url to access a particular instance of MyModelName.
		 """
		 return reverse('article-detail', args=[str(self.id)])

	def __str__(self):
		"""
		String for representing the MyModelName object (in Admin site etc.)
		"""
		return self.title

	def disp_authors(self):
		return ', '.join([ author.first_name + " " + author.last_name for author in self.authors.all()[:3] ])
	disp_authors.short_description = 'Authors'

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
