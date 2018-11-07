"""
Django settings for bdh project.

Generated by 'django-admin startproject' using Django 2.1.dev20180415210700.

For more information on this file, see
https://docs.djangoproject.com/en/dev/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/dev/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/dev/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'ylvk@6u3zp)r50=4(yasbk2vyed05s)uazql%7%ito-*7y!t63'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

WAGTAIL_SITE_NAME = 'The Brown Daily Herald'
WAGTAIL_APPEND_SLASH = False

WAGTAILSEARCH_BACKENDS = {
    'default': {
        'BACKEND': 'wagtail.search.backends.elasticsearch2',
        'INDEX': 'myapp'
    }
}
WAGTAILSEARCH_RESULTS_TEMPLATE = 'newspaper/search_results.html'
WAGTAILSEARCH_RESULTS_TEMPLATE_AJAX = 'newspaper/includes/search_listing.html'
WAGTAILSEARCH_HITS_MAX_AGE = 300
WAGTAIL_PASSWORD_MANAGEMENT_ENABLED = True
WAGTAIL_PASSWORD_RESET_ENABLED = True
WAGTAILUSERS_PASSWORD_ENABLED = True


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.contenttypes',
    'django.contrib.staticfiles',
    'newspaper.apps.NewspaperConfig',
    'webpack_loader',

    'wagtail.contrib.forms',
	'wagtail.contrib.redirects',
    'wagtail.contrib.routable_page',
	'wagtail.embeds',
	'wagtail.sites',
	'wagtail.users',
	'wagtail.snippets',
	'wagtail.documents',
	'wagtail.images',
	'wagtail.search',
	'wagtail.admin',
	'wagtail.core',


	'taggit',
	'modelcluster',

]

MIDDLEWARE = [
	'django.contrib.sessions.middleware.SessionMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
	'django.middleware.security.SecurityMiddleware',

	'wagtail.core.middleware.SiteMiddleware',
	'wagtail.contrib.redirects.middleware.RedirectMiddleware',
]

ROOT_URLCONF = 'bdh.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'bdh.wsgi.application'
WAGTAIL_SITE_NAME = 'The Brown Daily Herald'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR,'media-repo')

WEBPACK_LOADER = {
	'DEFAULT': {
		'BUNDLE_DIR_NAME': 'bundles/',
		'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.dev.json'),
	}
}

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# database setup is an issue

# Database
# https://docs.djangoproject.com/en/dev/ref/settings/#databases

DATABASES = {"default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": "db",
        "USER": "root",
        "PASSWORD": "",
        "HOST": "localhost",
        "PORT": "",
    }
    
}

WAGTAILSEARCH_BACKENDS = {
    'default': {
        'BACKEND': 'wagtail.search.backends.elasticsearch2',
        'INDEX': 'myapp'
    }
}
WAGTAILSEARCH_RESULTS_TEMPLATE = 'bdh/search_results.html'
WAGTAILSEARCH_RESULTS_TEMPLATE_AJAX = 'bdh/includes/search_listing.html'

WAGTAILSEARCH_HITS_MAX_AGE = 14
WAGTAILADMIN_RECENT_EDITS_LIMIT = 5
WAGTAILUSERS_PASSWORD_ENABLED = True

# CACHES = {
#     'default': {
#         'BACKEND': 'django_redis.cache.RedisCache',
#         'LOCATION': '127.0.0.1:6379',
#         'OPTIONS': {
#             'CLIENT_CLASS': 'django_redis.client.DefaultClient',
#         }
#     }
# }


LANGUAGES = WAGTAILADMIN_PERMITTED_LANGUAGES = [('en', 'English')]


# Password validation
# https://docs.djangoproject.com/en/dev/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/dev/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'America/New_York'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/dev/howto/static-files/

STATIC_URL = '/static/'
