var express = require('express');
var bodyParser = require('body-parser');
var server = express();
var port = 8080;

var fakeDb = {
    users: []
}


server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());

server.post('/login', function(req, res){
   var clientCreds = req.body;
   //Loop through the users in fakeDb and if the user email is found
   // check if the user password === req.body.password 
   for (var i = 0; i < fakeDb.users.length; i++) {
       var currentUser = fakeDb.users[i];
       if(currentUser.email === clientCreds.email){
           if(currentUser.password === clientCreds.password){
               return res.send(currentUser);
           } else {
               return res.send({error: 'Invalid Password'});
           }
       }
   }
  return res.send({error: 'User not found'});   
});

server.post('/register', function(req, res){
    //check to see if the email is already in use
    var userCreds = req.body;
    
    for (var i = 0; i < fakeDb.users.length; i++) {
        var currentUser = fakeDb.users[i];
        if(currentUser.email === userCreds.email){
            return res.send({error: 'Email already in use: ' + userCreds.email})
        }
    }
    fakeDb.users.push(userCreds);
    res.send({message: 'Welcome abord ' + userCreds.email});
})

server.listen(port, function(){
  console.log('THE SERVER IS UP AND RUNNING ON PORT: ', port);
})