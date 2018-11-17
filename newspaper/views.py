from django.shortcuts import render
import xml.etree.ElementTree as etree
tree = etree.parse('sample-article-collection.xml')
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
    return render(request, 'author.html', {})

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

def print_subscriptions(request):
    """
    View function to return print subscriptions
    """
    return render(request, 'print_subscriptions.html', {})

def comments_policy(request):
    """
    View function to return comments policy
    """
    return render(request, 'comments_policy.html', {})

def web_policy(request):
    """
    View function to return web policy
    """
    return render(request, 'web_policy.html', {})


def find_paper(request):
    """
    View function to return find paper
    """
    return render(request, 'find_paper.html', {})
