# Scrum-Board
It is a digital scrum board which is built using Django and Angular. This project is basically to understand how to integrate two frameworks and build a website



# Commands for Windows :

1. python3 -m venv djangular 
2. cd djangular
3. .\scripts\activate
4. pip3 install django
5. django-admin startproject djangular

# Commands for Linux:

1. python3 -m venv djangular 
2. cd djangular
3. .\bin\activate
4. pip3 install django
5. django-admin.py startproject djangular


# Integrate Angular with django:
1. build angular application: ng build --prod --output-path ../../djangular/scrumboard/static/ --watch --output-hashing none or normal prod build

2. copy the index.html to templates folder in 'startapp'

3. add below lines in setting.py
  
    PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
    STATIC_ROOT = os.path.join(PROJECT_ROOT, 'staticfiles') #never keep STATIC_ROOT and STATICFILES_DIRS same path as while runserver is                    executed it copies the static data from STATICFILES_DIRS to STATIC_ROOT path

    STATIC_URL = '/static/'

    #Extra places for collectstatic to find static files.
    STATICFILES_DIRS = (os.path.join(PROJECT_ROOT, 'static'),)

4. run command python manage.py collectstatic

5. changes in index.html file:
   1. add this at the top {% load static %}
   2. change the href and src to this format "{% static 'runtime.js' %}"
   
6. add path(r'^',TemplateView.as_view(template_name="index.html")) in urls.py of 'startapp' and add url(r'^',include('scrumboard.urls')) in url.py of the application


