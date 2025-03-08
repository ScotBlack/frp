# resources/user_resource.py
from flask_restful import Resource
from flask import request
from models.user import User
from common.db import db

class UserResource(Resource):
    def get(self, id=None):
        if id:
            user = User.query.get(id)
            if user:
                return {'id': user.id, 'username': user.username, 'email': user.email}
            
            return {'message': 'User not found'}, 404
        users = User.query.all()
        return [{'id': user.id, 'username': user.username, 'email': user.email} for user in users]

    def post(self):
        data = request.get_json()
        new_user = User(username=data['username'], email=data['email'])
        db.session.add(new_user)
        db.session.commit()
        return {'message': 'User created', 'id': new_user.id}, 201

    def put(self, id):
        data = request.get_json()
        user = User.query.get(id)
        if user:
            user.username = data['username']
            user.email = data['email']
            db.session.commit()
            return {'message': 'User updated'}
        return {'message': 'User not found'}, 404

    def delete(self, id):
        user = User.query.get(id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return {'message': 'User deleted'}
        return {'message': 'User not found'}, 404
