
// this is the admin of the website

// import mongoose
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const baseOptions = {
  discriminatorKey: 'type', // desicrmitorKey would be anything
  collection: 'users' // the name of our collection
}

const AdminSchema = mongoose.model('Admin', new mongoose.Schema(

  {

  email: {
    type: String, required: true, trim: true
  },
  password: {
    // trim: true accep
    type: String, required: true, trim: true
  }
}
, baseOptions

 )
  // save the hashed password in the database
  .pre('save', function(next){
    this.password=bcrypt.hashSync(this.password, 10);
    next();

})

)


module.exports = AdminSchema ;
