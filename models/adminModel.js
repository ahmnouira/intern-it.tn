// import mongoose
var mongoose = require('mongoose');

const AdminSchema = mongoose.model('Admin', new mongoose.Schema({

  email: {
    type: String, required: true, trim: true
  },
  password: {
    // trim: true accep
    type: String, required: true, trim: true
  }

}))
module.exports = AdminSchema ;
