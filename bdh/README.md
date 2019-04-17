# The `bdh` Folder
This folder contains a portion of the back-end logic used to run the website. Specifically, it has the URL routes (for the back-end), WSGI stuff (for production), and allows us to use the API that Wagtail exposes. It also contains the folder used to maintain the different settings.

## URL File
In the `urls.py` file, each URL is associated with a view. The views are defined in [a separate file](newspaper/views.py) and represent every possible type of page. The URLs are defined in a `urlpatterns` array. The last few ones are for API/Wagtail-related routes, while the initial ones are for the user-facing pages. Finally, the `admin` URL route is more or less useless - try to avoid using this.

## WSGI File
This is production-related. Please try not to mess with this unless you're changing something in production.

## API File
This file defines the API endpoints for Wagtai and exposes them to other parts of the application. If there is a different type of endpoint you require, please feel free to add it to this file, but wih justification.

## Other Folders
The `static` folder should not be user-edited, and is generated automatically by the Django command `python manage.py collectstatic`. The `media-root` folder is where all the images go - in development, please try not to push images you upload for testing to GitHub! Information about the `settings` folder is inside it.

_Questions? Suggestions? Complaints? Email us at webdevs@browndailyherald.com!_

Brought to you by Rahul Jayaraman '19, Alan Yoho '19, Michael Bardakji '20, Megan Gessner '20, Sean Rayment '20, Fangrui Tong '20, Jaja Thepumnoeysuk '21
