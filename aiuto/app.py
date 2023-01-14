from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")

#def index():
#    return "Hello, World!"
@app.route("/index")
def S2T():
    return render_template("S2T.html")

if __name__=="__main__":
     app.run(debug=True)