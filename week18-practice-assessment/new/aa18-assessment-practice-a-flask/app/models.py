from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class SimplePerson(db.Model):
    __tablename__ = 'simple_people'
    id = db.Column(db.Integer(), primary_key=True)
    image = db.Column(db.String(250),nullable = False)
    age = db.Column(db.Integer())
    bio = db.Column(db.String(2000))