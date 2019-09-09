var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1:3333/stagesIT';
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

var DB = mongoose.connection;


DB.on('open', function(){
   console.log(' *** mongoose connected to stagesIT @port: 3333 ***')
});

DB.on('error', console.error.bind(console, 'MongoDB connection error:'));
