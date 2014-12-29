'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: [
          {'twentyfifteen-child/style.css': 'twentyfifteen-child/media/scss/style.scss'}
        ]
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'twentyfifteen-child/media/scss/**/*.scss',
        tasks: ['sass', 'concat']
      },
    },

    concat: {
      css: {
        src: ['twentyfifteen-child/media/css/head.css', 'twentyfifteen-child/style.css'],
        dest: 'twentyfifteen-child/style.css',
      },
    },
  });


  grunt.registerTask('default', [
    'sass',
    'concat',
    'watch'
  ]);
};
