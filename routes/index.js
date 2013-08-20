var path = require('path');
var $ = require('jquery');
var fs = require('fs');
var gm = require('gm');

var qMin = 10,
    qMax = 90,
    qInterval = 5,
    qArray = [],
    path = "./public/images/source/",
    name = "coke",
    ext = "jpg",
    html = '',
    height = null,
    width = null,
    filesize = null;

// find base image dimensions
gm(path+name+"."+ext).size(function (err, value) {
  if (err) console.log('sad panda');
  height = value.height;
  width = value.width;
});

// find base image filesize
gm(path+name+"."+ext).filesize(function (err, value){
  if (err) console.log('sad panda');
  filesize = value;
});

// setup quality array
for(var i = qMin; i <= qMax; i++) {
  if(i % qInterval === 0) {
    qArray.push(i);
  }
}

var imageVariations = [];

// iterate over quality array
$.each(qArray, function(index, quality) {
  var thisvariation = {};
  var sourceImage = path+name+"."+ext;
  var imageVariation = './public/images/export/'+name+'-'+quality+'.jpg';

  // write quality variations to FS
  gm(sourceImage).quality(quality).write(imageVariation, function (err) {
    if (err) console.log('sad panda');
    // determine filesize and create layers
    thisvariation.path = imageVariation.replace('./public/', '/');
    gm(imageVariation).filesize(function (err, value){
      var variationFilesize = value;
      html += '<li class="layer'+ (index == qArray.length-1 ? ' active': '')+'" data-quality="'+quality+'" data-filesize="'+variationFilesize+'"><img src="'+ imageVariation.replace('./public/', '/') + '" /></li>'
      thisvariation.filesize = variationFilesize;
      imageVariations.push(thisvariation);
      console.log(imageVariations)

    });
  });
});


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'Constrictor',
    images: html,
    qStart: qArray[qArray.length - 1],
    qMin: qMin,
    qMax: qMax,
    qInterval: qInterval,
    width: width,
    height: height,
    filesize: filesize,
    path: path,
    name: name,
    fileExt: ext,
    imageVariations: imageVariations
  });
};
