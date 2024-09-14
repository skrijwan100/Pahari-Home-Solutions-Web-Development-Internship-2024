from flask import Flask,render_template,request,flash,redirect
from flask_sqlalchemy import*
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///paharihomesoulution1.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'vwqolx$%jeu'
db=SQLAlchemy(app)
#create database
class Details(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(50), nullable=False)
    usermail=db.Column(db.String(100), nullable=False)
    userphone=db.Column(db.String(100), nullable=False)
    usermassage=db.Column(db.String(500),nullable=False)
    def __repr__(self) -> str:
        return f"{self.sno}- {self.username} - {self.usermail} - {self.userphone}- {self.usermassage}"
with app.app_context():
    db.create_all()

 

@app.route('/',methods=['POST','GET'])
def index():
    if  request.method=='POST':
        username=request.form['name']
        usermail=request.form['email']
        userphone=request.form['phone']
        usermassage=request.form['message']
        userinput=Details(username=username,usermail=usermail,userphone=userphone,usermassage=usermassage)
        db.session.add(userinput)
        db.session.commit()
        flash("successfuly sumbmit your massage")
    alluserinput=Details.query.all()
    print(alluserinput)
    return render_template("index.html")
@app.route('/adminlogin',methods=['POST','GET'])
def adminlogin():
    if request.method=="POST":
        amail=request.form['mail']
        apassword=request.form['pass']
        # alluserinput=Details.query.all()
        if(amail=="pahari@gmail.com" and apassword=="1234"):
            return redirect("/usertable")
        else:
            return "admin is wrong"
     
    return render_template('adminlogin.html')
@app.route('/usertable')
def usertable():
    alluserinput=Details.query.all()
    return render_template("/usermassage.html",alluserinput=alluserinput)
@app.route('/delete/<int:sno>')
def delete(sno):
    duser = Details.query.filter_by(sno=sno).first()
    db.session.delete(duser)
    db.session.commit()
    return redirect("/usertable")
if(__name__=="__main__"):
   app.run(debug=True,port=2000)