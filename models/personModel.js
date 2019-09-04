// import mongoose
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const PersonSchema = mongoose.model('Person', new mongoose.Schema({

  nom: {
    // trim: true, accepts name like: 'salah nasri'
    type: String, required: true, trim: true
  },

  cin : {
    type: Number, required: true, trim: true, length: 8
  }

})
.pre('save', function(next){
  this.password=bcrypt.hashSync(this.password, 10);
  next();
}))

module.exports = PersonSchema;
