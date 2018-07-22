from django.shortcuts import render
import xml.etree.ElementTree as etree
tree = etree.parse('sample-article-collection.xml')

# Create your views here.

from .models import Article, Author

def index(request):
    """
    View function for home page of site.
    """
    # Generate counts of some of the main objects
    num_articles=Article.objects.all().count()
    num_authors=Author.objects.all().count()
    num_published_articles=Article.objects.filter(status='p').count()
    
    # Render the HTML template index.html with the data in the context variable
    return render(
        request,
        'articles.html',
        context={'num_articles':num_articles,'num_authors':num_authors,'num_published_articles':num_published_articles}
    )

def articles(request, year, month, day, slug):
    """
    View function for article
    """
    title = 'my article title'
    return render(
        request,
        'articles.html',
        context={'title':title,'year':year}
    )

