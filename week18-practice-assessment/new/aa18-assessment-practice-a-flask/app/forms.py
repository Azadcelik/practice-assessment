from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,SubmitField,TextAreaField
from flask_wtf.file import FileField,FileAllowed,FileRequired
from wtforms.validators import DataRequired 
from .routes.AWS_files import ALLOWED_EXTENSIONS

class SimpleForm(FlaskForm):
    image = FileField('Image',validators=[FileRequired(),FileAllowed(list(ALLOWED_EXTENSIONS))])
    bio = TextAreaField('Biography')
    submit = SubmitField('Submit')


