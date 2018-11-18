"""bdh URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from newspaper import views

urlpatterns = [
    path('admin/', admin.site.urls),
]

from django.conf.urls import include, handler404, handler500
from django.urls import path

urlpatterns += [
	path('', views.index, name='index'),
    path('articles/<int:year>/<int:month>/<int:day>/<slug:slug>', views.articles, name='articles'),
    path('authors/<author>', views.author),
    path('section/<section>', views.section),
    path('print-subscriptions', views.print_subscriptions)
]

from django.conf import settings
from django.conf.urls.static import static
from .api import api_router

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

from django.urls import re_path

from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls
from wagtail.core import urls as wagtail_urls

from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

urlpatterns += [
    re_path(r'^api/graphql', csrf_exempt(GraphQLView.as_view())),
    re_path(r'^api/graphiql', csrf_exempt(GraphQLView.as_view(graphiql=True, pretty=True))),
    re_path(r'^api/v2/', api_router.urls),
    re_path(r'^cms/', include(wagtailadmin_urls)),
    re_path(r'^articles/', include(wagtaildocs_urls)),
    re_path(r'^', include(wagtail_urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = views.error_404
handler500 = views.error_500
