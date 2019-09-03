// import mongoose
var mongoose = require('mongoose');


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

)


module.exports = UseSchema;
