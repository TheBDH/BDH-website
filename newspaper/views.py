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
    return render(request, 'author.html', {})

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

def staff_list(request):
    """
    View function to return staff list
    """
    current_year = datetime.today().year
    fall_range = (datetime(current_year, 9, 3), datetime(current_year, 12, 22))
    semester = "Fall" if datetime.today() >= fall_range[0] and datetime.today() <= fall_range[1] else "Spring"
    pprint(semester)
    return render(request, 'staff_list.html', {
        'current_semester': semester,
        'year': current_year,
    })

def join(request):
    """
    View function to return join about page
    """
    return render(request, 'join.html', {})