import MySQLdb
import sys
 
for p in sys.path:
    print(p)

#from newspaper.models import Article
from peewee import *


db = MySQLdb.connect(host="localhost", user="root", password="Since1891", db="wp_bdh")
print(db)

# def addArticle(Article a):
# 	# insert into db

# def updateArticle(Article a, parameter list):
# 	#update the db

# def deleteArticle(Article ID ?):
# 	#delete from db - very rarely used

# def addAuthor

# def addComment

# def updateComment

# def updateAuthor