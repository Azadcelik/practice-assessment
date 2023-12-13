from flask import Flask,render_template,redirect

from .config import Configuration
from .forms import SimpleForm
from .models import db,SimplePerson
from flask_migrate import Migrate
from .routes.AWS_files import get_unique_filename,upload_file_to_s3

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app,db)

@app.route('/')
def index():
    return '<h1>Practice Assessment</h1>'

@app.route('/simple-form', methods=['GET'])
def first_route():
    form = SimpleForm()
    return render_template('simple_form.html',form=form)


@app.route('/simple-form', methods=['POST'])
def second_route():
    form = SimpleForm()

    if form.validate_on_submit():
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)

        if 'url' not in upload:
            return upload

        new_form = SimplePerson(
                                image=upload['url'],
                                bio=form.data['bio'])
        db.session.add(new_form)
        db.session.commit()
        return redirect('/')
    if form.errors:
        print(form.errors)
        return 'Bad Data'



@app.route('/simple-form-data',methods=['GET'])
def get_formData():
    people = SimplePerson.query.filter(SimplePerson.name.like('M%')).all()
    print('',people)
    return render_template('simple_form_data.html',people = people)