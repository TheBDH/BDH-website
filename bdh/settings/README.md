# The `settings` Folder

This folder contains all the settings, defined by Django, for this website to function. `__init__.py` should NOT be deleted, as that will mess with how Django reads this as a module. However, the other files can be changed.

- `base.py` contains all the settings that are common to the dev environment and production.
- `local.py` contains all the settings that are specific to your local environment (on whatever machine you are using). This is where you may need to change your database settings and such.
- `production.py` contains all the settings needed for hosting on AWS. Primarily, this is just database settings and hostnames for the server we're using.

_Questions? Suggestions? Complaints? Email us at webdevs@browndailyherald.com!_

Brought to you by Rahul Jayaraman '19, Alan Yoho '19, Michael Bardakji '20, Megan Gessner '20, Sean Rayment '20, Fangrui Tong '20, Jaja Thepumnoeysuk '21
