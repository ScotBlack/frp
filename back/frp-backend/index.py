from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS  # Import Flask-CORS
from sqlalchemy import text
from common.db import db
from resources.user_resource import UserResource
from resources.recipe_resource import RecipeResource

app = Flask(__name__)
CORS(app)

# PostgreSQL configuration
app.config['SQLALCHEMY_DATABASE_URI'] = ('postgresql://postgres:scot123@localhost:5432/postgres')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy()
api = Api(app)  

# Initialize the database
with app.app_context():
    db.init_app(app)
    

# # Define API routes
api.add_resource(UserResource, '/users', '/users/<int:id>')
api.add_resource(RecipeResource, '/recipes', '/recipes/<int:id>')
# api.add_resource(ChoreResource, '/chores', '/chores/<int:chore_id>') 


with app.app_context():
    db.create_all()  # Zorg dat de tabellen worden aangemaakt


if __name__ == '__main__':
    app.run(debug=True)
