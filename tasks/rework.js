var rework = require('rework');
var inherit = require('rework-inherit');
var vars = require('rework-vars');
var fs = require('fs');

function read (file, enc) {

  var css = '';

  file.forEach(function (f) {
    css += fs.readFileSync(f, enc || 'utf8');
  });

  return css;

}

module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('rework', 'Build Topcoat component using rework module', function() {

    var css = rework(read(grunt.file.expand('src/*.css')))
        .use(rework.extend())
        .use(vars())
        .toString();

    grunt.file.write('css/topcoat-button.css', css);

  });

}