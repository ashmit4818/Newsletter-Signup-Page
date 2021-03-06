//This code is written by Ashmit4818
const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static("public")); //used to host static files 
app.use(bodyparser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});



app.post("/", function(req, res) {
  //storing the sign up info into variables by using body parser module.
  const firstname = req.body.firstName;
  const lastname = req.body.lastName
  const eMAIL = req.body.eMail;

  const data = {
    members: [{ 
      email_address: eMAIL,
      status: "subscribed",
      merge_fields: { 
        FNAME: firstname,
        LNAME: lastname
      }
    }]
  };
  const jsonData = JSON.stringify(data);
  //API endpoint
  const url = "https://us8.api.mailchimp.com/3.0/lists/514dfr8762ce4"; //In place of << 514dfr8762ce4 >> goes your Mailchimp list ID 
  const options = {
    method: "post",
    auth: "ashmit4818: Your_Mailchimp_API_key " 
  }

  const request = https.request(url, options, function(response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html"); //this is the response we send to our user so we used to "res" here
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();


});
app.get("/failure", function(req, res) {
  res.sendFile(__dirname + "/failure.html");
});
app.post("/failure", function(req, res){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("server is running");
});
