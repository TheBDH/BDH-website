import pymysql
#from newspaper import models
connection = pymysql.connect(host='localhost',
                             user='michaelbar98',
                             password='',
                             db='wp_bdh')

university_news = []

with open("/Users/michaelbardakji/Desktop/myBDH/xmlfiles/university news.xml","r") as fi:
    for line in fi:
        if "<wp:post_id>" in line:
            university_news.append(line.split("<wp:post_id>")[1].split("</wp:post_id>")[0])

print(len(university_news))


try:
    with connection.cursor() as cursor:

        sql = "With user_meta_info as (With author_extened as (With actualauthors as (select distinct u.* from wp_bdh.wp_users as u, wp_bdh.wp_posts as p where u.ID = p.post_author),info as (select  * from wp_bdh.wp_usermeta where (meta_key = 'userphoto_image_file' or meta_key = 'first_name' or meta_key = 'last_name' or meta_key = 'description'))select info.user_id, case when meta_key = 'first_name' then meta_value end as fname,case when meta_key = 'last_name' then meta_value end as lname,case when meta_key = 'description' then meta_value end as about,case when meta_key = 'userphoto_image_file' then meta_value end as photo from info, actualauthors where info.user_id = actualauthors.ID order by user_id, meta_key) select user_id, max(fname) as first_name, max(lname) as last_name, max(about) as about, max(photo) as photo from author_extened group by user_id order by user_id ) select m.*, u.display_name, u.user_email, u.user_registered as since from user_meta_info as m, wp_bdh.wp_users as u where m.user_id = u.ID;"
        #above query gets info and meta info from users
        #uid, fname, lname, about, photo, displayname, email, since
        cursor.execute(sql)
        myresult = cursor.fetchall()

        '''id = models.IntegerField(primary_key=True)
        first_name = models.CharField(max_length=30)
        last_name = models.CharField(max_length=30)
        pathtopicture = models.CharField(max_length=100, blank=True, null=True)
        email = models.CharField(max_length=100, blank=True, null=True)
        since = models.DateField()
        about = models.TextField()
        maybewrong = models.IntegerField()'''
        for res in myresult:
            boole = False
            if res[1] == "" or res[2] == "":
                namearr = res[5].split(" ")
            print(res)
            #author = models.Author(id = res[0], first_name = res[1],last_name = res[2],about = res[3],pathtopicture = res[4],email = res[6],since = res[7],maybewrong = boole)
            #author.save()



        # Read a single record
        #sql = "SELECT ID, post_content, post_title, post_date_dmt, post_modified_gmt, post_author FROM wp_bdh.wp_posts limit 5"
        sql = "SELECT ID, post_title, post_date_gmt, post_modified_gmt, post_author FROM wp_bdh.wp_posts limit 5"
        cursor.execute(sql)
        myresult = cursor.fetchall()
        for res in myresult:

          print(res)
finally:
    connection.close()