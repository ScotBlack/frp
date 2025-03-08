# models/ingredient.py
from common.db import db
from models.uom import UOM

class Ingredient(db.Model):
    __tablename__ = 'ingredients'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    uom_id = db.Column(db.Integer, db.ForeignKey('uom.id'))

    uom = db.relationship('UOM')

    recipe_ingredients = db.relationship('RecipeIngredient', back_populates='ingredient')
    # recipe_ingredients = db.relationship('RecipeIngredient', back_populates='ingredient')