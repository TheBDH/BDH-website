# BDH-website
Welcome to the repo containing all the code for the [new Brown Daily Herald website](www.browndailyherald.com). We welcome open-source contributions to the website **_by members of the Brown community_** and reuse of our code under the MIT License, so feel free to fork away.

## Running the Site
First, make sure you have Django and virtualenv installed. This can be done via `pip install django` and `pip install virtualenv` from the directory to which you have cloned this project. Then, at the command line, run `python manage.py runserver` from the main project directory - this will start the Django web server at `http://127.0.0.1:8000/`. It should update automatically when any changes are made. If any back-end changes to the models/database are made, make sure to run **_both_** `python manage.py makemigrations` AND `python manage.py migrate`. 

We are evaluating Dockerizing the app, but the Django back-end will not change. Further instructions will be posted if we begin to use a Docker framework.

## Coding Standards
Here at the BDH, we follow certain established industrywide coding style guidelines:

- JavaScript Best Practices: [AirBnB suggested guidelines](https://github.com/airbnb/javascript)
- Python Best Practices: [Official Python Style Guide](https://www.python.org/dev/peps/pep-0008/)
- HTML/CSS Style Guide: [Official Google HTML/CSS Guide](https://google.github.io/styleguide/htmlcssguide.html)

We operate under the "1 commit per Pull Request" model. To see why, check out the first answer at [this link](https://softwareengineering.stackexchange.com/questions/263164/why-squash-git-commits-for-pull-requests). If you have multiple commits, please squash and rebase according to the workflow shown [here](https://blog.carbonfive.com/2017/08/28/always-squash-and-rebase-your-git-commits/). For any other coding style questions, reach out to rahul_jayaraman@brown.edu. 

_Questions? Suggestions? Complaints? Email us at bdhwebteam@browndailyherald.com!_

Brought to you by Rahul Jayaraman '19, Megan Gessner '20, Fangrui Tong '20, Kanha Prasad '21, Vedraman Narayan '21