# resources/chore_resource.py
from flask_restful import Resource
from flask import request
from models.chore import Chore
from common.db import db

class ChoreResource(Resource):
    def get(self, chore_id=None):
        if chore_id:
            chore = Chore.query.get(chore_id)
            if chore:
                return {'id': chore.id, 'title': chore.title, 'description': chore.description, 'user_id': chore.user_id}
            return {'message': 'Chore not found'}, 404
        chores = Chore.query.all()
        return [{'id': chore.id, 'title': chore.title, 'description': chore.description, 'user_id': chore.user_id} for chore in chores]

    def post(self):
        data = request.get_json()
        new_chore = Chore(title=data['title'], description=data.get('description'), user_id=data['user_id'])
        db.session.add(new_chore)
        db.session.commit()
        return {'message': 'Chore created', 'id': new_chore.id}, 201

    def put(self, chore_id):
        data = request.get_json()
        chore = Chore.query.get(chore_id)
        if chore:
            chore.title = data['title']
            chore.description = data.get('description')
            chore.user_id = data['user_id']
            db.session.commit()
            return {'message': 'Chore updated'}
        return {'message': 'Chore not found'}, 404

    def delete(self, chore_id):
        chore = Chore.query.get(chore_id)
        if chore:
            db.session.delete(chore)
            db.session.commit()
            return {'message': 'Chore deleted'}
        return {'message': 'Chore not found'}, 404
