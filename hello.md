<!-- based upon tutorial by Gwen from Farrady Academy -->
<!-- H1 -->
# Django Setup Wiki

Instructions for setting up Django projects.

**Table of Contents**

1. [General Setup for all Django Projects](#general-setup-for-all-django-projects)
1. [Django REST Framework](#django-rest-framework)
1. [Django GraphQL](#django-graphql)
1. [Django MongoDB](#django-mongodb)
1. [Full-Stack Django](#full-stack-django) (with templates)

<!-- H2 -->
## General Setup for all Django Projects
<!-- H3 -->
### Recommended Technologies

- Django 3.x
- [Poetry](https://python-poetry.org/docs/cli/#install)
- Postgres: You can use MySQL or SQL Lite, but Postgres is recommended by the Django official docs. The only exception is if yo uwant to use MongoDB or another NoSQL database with your project. You can find [details for that below](#django-mongodb).

### Initial Setup

1. Must have Python 3, [Django](https://docs.djangoproject.com/en/3.1/topics/install), and Postgres version 12.x installed
1. Make sure Postgres is running on your machine
1. `django-admin startproject [projectname]`
1. Create a virtual environment: `python -m venv venv`

<!--  -->
