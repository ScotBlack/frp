# models/recipe_ingredient.py
from common.db import db
from sqlalchemy.orm import relationship
# from models.recipe import Recipe
# from models.ingredient import Ingredient


class RecipeIngredient(db.Model):
    __tablename__ = 'recipe_ingredients'
    
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'), primary_key = True)
    
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredients.id'), primary_key = True)
    
    quantity = db.Column(db.Integer)

    # recipe = db.relationship('Recipe', back_populates='recipe_ingredients')
    # ingredient = db.relationship('Ingredient')
    
    # Relationships to Recipe and Ingredient
    # recipe = db.relationship('Recipe', back_populates='recipe_ingredients')
    ingredient = db.relationship('Ingredient', back_populates='recipe_ingredients')
    
