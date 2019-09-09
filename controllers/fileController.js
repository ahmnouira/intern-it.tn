var fs = require('fs');
var path = require('path');
const FileModel = require('../models/fileModel');



module.exports = {

get : function(req, res) {

res.sendFile (path.join(__dirname, '../uploads/' + req.params.filename))

},

post : function(req, res) {

      console.log(req.file);
      var file =  __dirname +  'uploads/' + req.file.originalname;

      fs.readFile(req.file.path, function(err, data) {
        fs.writeFile(file, data, function(err) {
          if (err) {
             console.error(err);
             var response = {
               message: "sorry, file couldn't be uploaded",
               filename: String(req.file.originalname)
             };
             res.json(response);
          } else {

      const newFile = new FileModel({
        title: req.body.title,
        file: String(req.file.originalname),
      });
      newFile.save(function(err, file){
      if (err){
      res.json({status: "error", msg: "vous avez un erreur"  + err })
      } else {
      fs.writeFile(file.filename, 'file', function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.json({status: "ok"});
        });
    }
    });
}
});
});
}

}
