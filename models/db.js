var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1:3333/stagesIT';
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var DB = mongoose.connection;


DB.on('open', function(){
   console.log(' *** mongoose connected to stagesIT ***')
});

DB.on('error', console.error.bind(console, 'MongoDB connection error:'));
