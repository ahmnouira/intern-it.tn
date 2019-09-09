// this is the admin of the website
// import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* bcrypt config */
const bcrypt = require('bcrypt');
const saltRounds = 10;

var moment = require('moment');
const jwt = require('jsonwebtoken');

const baseOptions = {
  discriminatorKey: 'type', // desicrmitorKey would be anything
  collection: 'users' // the name of our collection
}

var usersSchmea =  new Schema ({

            email: {
              type: String, required: true, trim: true
            },
            password: {
              // trim: true accep
              type: String, required: true, trim: true
            },

            created_at: {
                type:String, default: moment().format('MMMM Do YYYY, h:mm:ss a')
            }

}, baseOptions );

// save the hashed password in the database
usersSchmea.pre('save', function(next){
  this.password=bcrypt.hashSync(this.password, saltRounds);
  next();

});

usersSchmea.methods.checkPassword=function(password) {
  return bcrypt.compareSync(password, this.password)
 }

usersSchmea.methods.getToken = function(app_secrect_key, exp=60*1,) {
 var token  = jwt.sign({user_id: this._id }, app_secrect_key , {expiresIn: exp})
      return token;
  }

usersSchmea.methods.checkToken = function(token) {
  var decoded = jwt.verify(token, 'secret')
    console.log(decoded);
    return decoded
}

var Users = mongoose.model('Users', usersSchmea)


module.exports =  Users;
