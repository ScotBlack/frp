import logging
from common.db import db
from flask_restful import Resource
from flask import request
from models.recipe import Recipe
from models.ingredient import Ingredient
from models.recipe_ingredient import RecipeIngredient

class RecipeResource(Resource):

    def get(self, id=None):
        if id:
            recipe = Recipe.query.get(id)
            if recipe:
                return {
                    'id': recipe.id,
                    'name': recipe.name,
                    'description': recipe.description,
                    'ingredients':[
                        {
                            'id' : ri.ingredient.id,
                            'name' : ri.ingredient.name,
                            'quantity' : ri.quantity,
                            'uom' : ri.ingredient.uom.shortname,
                        }
                        for ri in recipe.recipe_ingredients
                    ]
                }
            
            return {'Recipe not found'}, 404
        
        recipes = Recipe.query.all()
        return [
            {
                'id': recipe.id,
                'name': recipe.name,
                'description': recipe.description,
                'ingredients':[
                    {
                        'id' : ri.ingredient.id,
                        'name' : ri.ingredient.name,
                        'quantity' : ri.quantity,
                        'uom' : ri.ingredient.uom.shortname,
                    }
                    for ri in recipe.recipe_ingredients
                ]
            }
            for recipe in recipes
        ]

    def getRecipeDefinition(recipe):
        return 
    
    
    def post(self):
        data = request.get_json()
        new_recipe = Recipe(name=data['name'], description=data['description'])
        db.session.add(new_recipe)
        db.session.commit()
        return {'message': 'Recipe created', 'id': new_recipe.id}, 201
    

    def put(self, id):
        data = request.get_json()
        recipe = Recipe.query.get(id)
        if recipe:
            recipe.name = data['name']
            recipe.description = data['description']
            db.session.commit()
            return {'message': 'Recipe updated'}
        return {'message': 'Recipe not found'}, 404
