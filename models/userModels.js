// import mongoose
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UseSchema = mongoose.model('User', new mongoose.Schema({

  nom: {
    // trim: true accep
    type: String, required: true, trim: true
  },

  prenom : {
    // trim: true accep
    type: String, required: true, trim: true
  },

  email: {
    // trim: true accep
    type: String, required: true, trim: true
  },

  password: {
    // trim: true accep
    type: String, required: true, trim: true
  }

})
.pre('save', function(next){
  this.password=bcrypt.hashSync(this.password, 10);
  next();
}))

module.exports = UseSchema;
