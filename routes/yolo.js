var express = require('express');
var path = require('path')
var fs = require('fs')
var router = express.Router();
var Darknet = require('smarthomefans-darknet').Darknet;

const darknet = new Darknet({
  weights: path.join(__dirname, '../conf/yolov3-tiny.weights'),
  config: path.join(__dirname, '../conf/yolov3-tiny.cfg'),
  namefile: path.join(__dirname, '../conf/coco.names')
});



router.post('/', function(req, res, next) {
  if(req.body && req.body.image) {
    var buffer = Buffer.from(req.body.image, 'base64')
    var imagePath = path.join(__dirname, "../", "public", 'static', `${new Date().getTime()}.jpg`)
    fs.writeFileSync(imagePath, buffer)

    var stat = fs.statSync(imagePath)
    if (stat.size < 20 * 1024) {
      res.status(500).json('image to small')
    }
    var res_data = darknet.detect(imagePath)

    if (!req.body.no_delete) {
      fs.unlink(imagePath)
    }

    res.json(res_data)
    return
  }

  res.status(404).json('no image data')
  
});

module.exports = router;
