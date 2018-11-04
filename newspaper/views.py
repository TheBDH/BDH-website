from django.shortcuts import render
import xml.etree.ElementTree as etree
tree = etree.parse('sample-article-collection.xml')

# Create your views here.

from .models import Article, Author

def index(request):
    """
    View function for home page of site.
    """
    return render(
        request,
        'index.html',
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

def authors(request, name):
    """
    View function for author
    """
    return render(request, 'articles.html', context={'title':title,'year':year})

def error_404(request, exception):
    """
    View function to return page not found error
    """
    print("This is getting an error")
    return render(request, '404.html', {})

def error_500(exception):
    """
    View function to return server error
    """
    return render(exception, '500.html', {})