# models/user.py
from common.db import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    # chores = db.relationship('Chore', backref='user', lazy=True)

    # @validates('email')
    # def validate_email(self, key, email):
    #     """Validate that the email is in a correct format."""
    #     email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    #     if not re.match(email_regex, email):
    #         raise ValueError("Invalid email format")
    #     return email