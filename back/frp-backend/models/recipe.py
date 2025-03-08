# models/recipe.py
from common.db import db
from sqlalchemy.orm import relationship
# from .recipe_ingredient import RecipeIngredient

class Recipe(db.Model):
    __tablename__ = 'recipes'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    description = db.Column(db.String)

    recipe_ingredients = db.relationship('RecipeIngredient', backref='recipe')