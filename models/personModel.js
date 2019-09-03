// import mongoose
var mongoose = require('mongoose');


const PersonSchema = mongoose.model('Person', new mongoose.Schema({


  nom: {
    // trim: true accep
    type: String, required: true, trim: true
  },

  cin : {
    // trim: true accep
    type: Number, required: true, trim: true, length: 8
  }

})

)

module.exports = PersonSchema;
