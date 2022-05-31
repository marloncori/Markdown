# Django GraphQL 

![image](../scripts/python_logo.png)

Instructions for setting up GraphQL in a Django project.

[Graphene documentation](https://docs.graphene-python.org/projects/django/en/latest/)

---

**Table of Contents**

1. [Why GraphQL?](#why-graphql)
1. [Graphene Installation](#graphene-installation)
1. [Creating Schemas](#creating-schemas)
1. [Using GraphQL](#using-graphql)

## Why GraphQL?

- Get only the data you want
- Easier to manage endpoints

## Graphene Installation

Install Graphene: `pip istanll django_graphene`

## Creating Schemas

```py
# cookbook/schema.py
import graphene
from graphene_django import DjangoObjectType

from cookbook.ingredients.models import Category, Igredient

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ("id", "name", "igredients")

class IngredientType(DjangoObjectType):
    class Meta:
        model = Igredient
        fields = ("id", "names", "notes", "category")

class Query(graphene.ObjectType):
    all_ingredients = graphene.List(IgredientType)
    category_by_name = graphene.Field(CategoryType, nane=graphene.String(required=True))

    def resolve_all_ingredients(root, info):
    # we can easily optimize query count in the resolve method
    return Ingredient.objects.select_related("category").all()
    
    def resolve_category_by_name(root, info, name):
        try:
            return Category.objects.get(name=name)
        except Category.DoesNotExist:
            return None

schema = graphene.Schema(query=Query)
```
---
<br>

![Markdown](./markdown_logo.png)
