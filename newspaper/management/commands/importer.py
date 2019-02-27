from django.core.management.base import BaseCommand, CommandError
from newspaper.models import *
from django.contrib.contenttypes.models import ContentType


import pymysql
import pprint  # debugging
import traceback  # debugging


class Command(BaseCommand):
	help = 'A one-time command designed to import the old database to the new database'

	def add_arguments(self, parser):
		parser.add_argument('verification', nargs=1,
							type=str)  # string to verify - STalMRQ56AFxEn8fMTb3, only to run ONCE

	def handle(self, *args, **options):
		#if (options['verification'] == 'STalMRQ56AFxEn8fMTb3'):
		if True:
			importer = Importer()
			importer.instantiate_django_categories()
			importer.construct_author_models()
			self.stdout.write(self.style.SUCCESS('Successfully imported database to new models!'))
		else:
			self.stdout.write('Sorry, you cannot execute that command. Perhaps you meant to do something else?')


class Importer():

	def __init__(self, filepath="/Users/michaelbardakji/Desktop/myBDH/xmlfiles/"):
		self.connection = pymysql.connect(host='localhost',
							 user='root',
							 password='Since1891',
							 db='wp_bdh', port = 3005)
		self.new_connection = pymysql.connect(host='localhost',
										  user='root',
										  password='Since1891',
										  db='updated_wp_bdh', port = 3005)

		# news
		university_news = ['university_news']
		metro = ['metro']
		science_sesearch = ['science_sesearch']

		# opinions
		opinions = ['opinions']
		columns = ['columns']
		opeds = ['opeds']
		letters_to_editor = ['letters_to_editor']
		editor_note = ['editor_note']

		# multimedia
		multimedia = ['multimedia']
		video = ['video']
		photo = ['photo']
		interactive_graphic = [
			'interactive_graphic']  # Multimedia includes Video, Photo Gallery, Interactive Graphic, (Graphics, and Illustrations should not be visible)

		arts_culture = ['arts_culture']
		sports = ['sports']
		editorials = ['editorials']
		uncategorized = ['uncategorized']  # not visible
		features = ['features']  # not visible
		web_features = ['web_features']  # not visible

		# self.categories = {"university_news": university_news, "metro": metro, "science_sesearch" :science_sesearch, "opinions":opinions, "columns": columns, "opeds":opeds, "letters_to_editor":letters_to_editor, "editor_note": editor_note, "multimedia":multimedia, "video": video, "photo":photo, "interactive_graphic":interactive_graphic, "arts_culture":arts_culture, "sports":sports, "editorials":editorials, "uncategorized": uncategorized, "features":features,"web_features":web_features}
		self.categories = ["university_news", "metro", "science_sesearch",
						   "opinions", "columns", "opeds",
						   "letters_to_editor", "editor_note", "multimedia",
						   "video", "photo", "interactive_graphic",
						   "arts_culture", "sports", "editorials",
						   "uncategorized", "features", "web_features"]
		self.category_to_parent = {"university_news": "news", "metro": "news", "science_sesearch" :"news", "opinions":"opinions", "columns": "opinions", "opeds":"opinions", "letters_to_editor":"opinions",
								   "editor_note": "opinions", "multimedia":"multimedia", "video": "multimedia", "photo":"multimedia", "interactive_graphic":"multimedia", "arts_culture":None, "sports":None,
								   "editorials":None, "uncategorized": None, "features":None,"web_features":None,"graphics":None,"illustrations":None}
		self.id_to_category = {}
		self.invisible_categories = ["uncategorized","features","web_features", "graphics", "illustrations"]

	def instantiate_django_categories(self):

		self.new_connection.cursor().execute("delete  from updated_wp_bdh.newspaper_category where id >= 11;")
		self.new_connection.cursor().execute("delete  from updated_wp_bdh.newspaper_category where id < 300000;")
		self.new_connection.cursor().execute("alter TABLE updated_wp_bdh.newspaper_category auto_increment = 1;")
		instantiated = []
		name_to_model = {}
		for child, parent in self.category_to_parent.items():
			if parent is not None and parent not in instantiated:
				category = Category(parent= None, name=parent, visible= (parent not in self.invisible_categories))
				category.save()
				name_to_model[parent] = category
				instantiated.append(parent)
			elif child is not None and child not in instantiated and parent is None:
				category = Category(parent=None, name=child, visible= (child not in self.invisible_categories))
				category.save()
				name_to_model[child] = category
				instantiated.append(child)
		for child, parent in self.category_to_parent.items():
			if parent is not None:
				category = Category(parent=name_to_model[parent], name=child, visible= (child not in self.invisible_categories))
				category.save()

	def load_categories(self):

		for category_name in self.categories:

			with open(self.filepath + category_name + ".xml", "r") as fi:
				for line in fi:
					if "<wp:post_id>" in line:
						post_id = line.split("<wp:post_id>")[1].split("</wp:post_id>")[0]
						self.id_to_category[post_id] = category_name

		# print(len(university_news))

	'''def getCategory(self, post_id):
		for key in self.categories:
			if post_id in self.categories[key]:
				return key
		print("ERROR POST ", post_id, " HAS NOT CATEGORY")'''

	def construct_author_models(self):
		try:
			self.new_connection.cursor().execute("delete  from updated_wp_bdh.newspaper_authorspage where page_ptr_id < 300000;")
			self.new_connection.cursor().execute("alter TABLE updated_wp_bdh.newspaper_authorspage auto_increment = 1;")
			with self.connection.cursor() as cursor:

				sql = "With user_meta_info as (With author_extened as (With actualauthors as (select distinct u.* from wp_bdh.wp_users as u, wp_bdh.wp_posts as p where u.ID = p.post_author),info as (select  * from wp_bdh.wp_usermeta where (meta_key = 'userphoto_image_file' or meta_key = 'first_name' or meta_key = 'last_name' or meta_key = 'description'))select info.user_id, case when meta_key = 'first_name' then meta_value end as fname,case when meta_key = 'last_name' then meta_value end as lname,case when meta_key = 'description' then meta_value end as about,case when meta_key = 'userphoto_image_file' then meta_value end as photo from info, actualauthors where info.user_id = actualauthors.ID order by user_id, meta_key) select user_id, max(fname) as first_name, max(lname) as last_name, max(about) as about, max(photo) as photo from author_extened group by user_id order by user_id ) select m.*, u.display_name, u.user_email, u.user_registered as since from user_meta_info as m, wp_bdh.wp_users as u where m.user_id = u.ID;"
				# above query gets info and meta info from users
				# user_id, first_name, last_name, about, photo, display_name, user_email, since
				cursor.execute(sql)
				myresult = cursor.fetchall()
				for res in myresult:

					maybewrong = False
					first = res[1]
					last = res[2]
					if first == "" or last == "":
						namearr = res[5].split(" ")
						first = namearr[0]
						if len(namearr) == 3:
							last = namearr[1] + " " + namearr[2]
						elif len(namearr) >= 4:
							last = namearr[1] + namearr[2] + " " + namearr[3]
						elif len(namearr) == 2:
							last = namearr[1]
						if len(namearr) >= 3 or len(namearr) == 1:
							maybewrong = True
					print(first, " ", last)
					author = AuthorsPage(path = first + last + str(res[0]), page_ptr_id=res[0], name=first, lastName=last, description=res[3],
										   pathtopicture=res[4], email=res[6], maybewrong = maybewrong, since=res[7],  valid = True, title = first + ' ' + last, slug = '', depth = 0, content_type = ContentType.objects.get(app_label='newspaper', model="authorspage"))
					pprint.pprint(author.__dict__)
					author.save()

		finally:
			self.connection.close()

	def construct_post_models(self):
		try:
			with self.connection.cursor() as cursor:

				sql = "SELECT p1.ID, p1.post_title, p1.post_excerpt, p1.post_content, p1.post_date_gmt, p1.post_modified_gmt, p1.post_author, p2.guid FROM wp_bdh.wp_posts as p1,  wp_bdh.wp_posts as p2 where p2.post_type = 'attachment' and p2.post_parent = p1.ID;"
				cursor.execute(sql)
				myresult = cursor.fetchall()
				# ID, post_title, excerpt, post_content,  post_date_gmt, post_modified_gmt, post_author, guid
				for res in myresult:
					print(res)
		finally:
			self.connection.close()