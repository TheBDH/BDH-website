from django.shortcuts import render
import xml.etree.ElementTree as etree
tree = etree.parse('sample-article-collection.xml')
from datetime import datetime
from pprint import pprint #debugging

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
    return render(request, 'articles.html', {})

def section(request, section):
    return render(request, 'section.html', {})

def author(request, author):
    """
    View function for author
    """
    return render(request, 'newspaper/authors_page.html', {})

def error_401(request):
    """
    View function to return page unauthorized error
    """
    return render(request, '401.html', {})

def error_404(request, exception):
    """
    View function to return page not found error
    """
    return render(request, '404.html', {})

def error_500(exception):
    """
    View function to return server error
    """
    return render(exception, '500.html', {})

def static_page_template(request):
    """
    View function to return server error
    """
    return render(request, 'static_template.html', {})




def staff_list(request, year, semester):
    """
    View function to return current staff list
    """
    return render(request, 'static_template.html', {})
