var userModel = require('../controllers/mongo.controller'),
    service = {};

    service.registerUser = registerUser;



function registerUser(request){
    console.log(request.body)
    var myData = new userModel(request.body);
    var email = request.body.email;
    var res = myData.find({'email' : email});
    if(res){
        return ({ "message": "Email : " + email + " is already present in our database." });
    }
    else{
        myData.save(function (err) {
            if(err) {
                return err;
            }
            else{
                return ({ "message": "Email : " + email + " successfully stored in our database." });;
            }
        });
    }
    
}

module.exports = service;
