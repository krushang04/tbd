# importing libraries
from flask import Flask, request
from flask_mail import Mail, Message
from flask_cors import CORS

import os
os.environ['FLASK_ENV'] = 'production'

app = Flask(__name__)
CORS(app)
mail = Mail(app) # instantiate the mail class

# configuration of mail
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'info.tbdengineering@gmail.com'
app.config['MAIL_PASSWORD'] = 'tbwvxrjcvfphtwjl'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

# message object mapped to a particular URL ‘/’
@app.route("/sent-query", methods=['POST'])
def index():
    try:
        data = request.json
        full_name = data['firstName'] + " " + data['lastName']
        subject = "Query from " + full_name
        msg = Message(
                        subject,
                        sender ='tbd.engineering2023@gmail.com',
                        recipients = ['admin@tbdengineering.in']
                    )
        firstName = data['firstName']
        lastName = data['lastName']
        email = data['email']
        mobile = data['countryCode'] + " " + data['mobileNumber']
        company = data['companyName']
        query = data['query']
        msg.html = f'<p style="font-size: 20px; font-family: Arial;"><b><p>First Name: {firstName} <br> Last Name: {lastName} <br> Email: {email}<br>Contact No: {mobile}<br>Company Name: {company}<br>Query:  {query}</p></b></p>'
        mail.send(msg)
        return {"message": data, "status_code": 200}
    except Exception as e:
        print(e)
        return {"message": "Error", "status_code": 400}

if __name__ == '__main__':
    app.run(debug=False)
