var express = require('express');
var router = express.Router();
var multer  = require('multer')

var upload = multer();

const PDFMerge = require('pdf-merge');

/* GET home page. */
router.post('/upload', upload.array('pdf-files'),  function(req, res, next) {
  console.log(req.files)

});

module.exports = router;
