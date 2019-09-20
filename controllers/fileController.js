var fs = require('fs');
var path = require('path');
const FileModel = require('../models/fileModel');

module.exports = {

get : function(req, res) {

  if(req.params.filename) {
    FileModel.findOne({filename: req.params.filename}, function(err, image){
      console.log(image);
      if (err) {throw err;}
      else {
        res.sendFile(path.join(__dirname, '../uploads/ok/' + image.full_name ))
      }
    })
  }


},

post : function(req, res) {

    /*  var file =  path.join(__dirname , '../uploads/' + req.file.originalname);
      //console.log(file);
      fs.readFile(req.file.path, function(err, data) {
        if(err) {throw err; }
         // data: is a buffer
          fs.writeFile(file, data, function(err) {
          if (err) {
             console.error(err);
             var response = {
               message: "sorry, file couldn't be uploaded",
               file: String(req.file.originalname)
             };
             res.json(response);
          } else {

      const newFile = new FileModel({
        filename: String(req.file.originalname),
        path: req.file.path
      });
      res.jon({status:"OK"})
      /*
      newFile.save(function(err, nfile){
      if (err){
      res.json({status: "error", msg: "vous avez un erreur"  + err })
      } else {
      fs.writeFile(file,nfile,  function (err) {
       if (err) throw err;
        console.log('Saved!');
        res.json({status: "ok"});
       });
    }
    }); 
}
});
});
}, */


var saveFile = function()  {
  var possible = 'abcdefghijklmnpqrstuvwxyz0123456789';
  var FileUrl = "";
  for (var i = 0; i < 6 ; i++) {
  FileUrl += possible.charAt(Math.floor(Math.random()* possible.length));

  }

  FileModel.find({filename: FileUrl}, function(err, files){
    if(err) {throw err;}
    if(files.length > 0 ){
      saveFile();
    } else {
      var tempPath = req.file.path;
      console.log("tempPath: ", tempPath);
      var mime_type = req.file.mimetype;
      console.log(mime_type);
      var ext = '.' + mime_type.split('/')[1];
      var targetPath = path.resolve('./uploads/ok/' +  FileUrl + ext );
      console.log(targetPath);
      fs.rename(tempPath, targetPath, function(err) {
        if (err) {throw err;} 
        var newFile = new FileModel({
          filename: FileUrl,
          full_name: FileUrl + ext
        })
        newFile.save(function(err, image){
         res.json({status: 'OK'})
        });
      });
    }
  })

 }
saveFile();

},

delete: function(req, res){
  if (req.params.filename) {
  FileModel.findOne({filename: req.params.filename}, function(err, image) {
    if (err) {throw err;} 
  FileModel.deleteOne({_id: image._id},function(err){
    if(!err){
      fs.unlink(path.resolve('./uploads/ok/' + image.full_name), function(err){
        if(err) {throw err;}
      })

      res.json({status:"ok", msg: "File Deleated ! "})
    } else {
      res.json({status:"error", msg:"error"})
    }
    
  });
})

} else {
  FileModel.deleteMany({}, function(err) {
    if(err) {
      res.json({status: "error", msg: err})
    } else {
      
        res.json({status: "OK",  msg:"All Images has been Deleated Successfully" })

        }
      
    
  });
}
},
}


