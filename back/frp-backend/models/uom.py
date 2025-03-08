from common.db import db

class UOM(db.Model):
    __tablename__ = 'uom'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    shortname = db.Column(db.String)
   
