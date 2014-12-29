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

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'package.json',
        'twentyfifteen-child/media/js/**/*.js'
      ]
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'twentyfifteen-child/media/scss/**/*.scss',
        tasks: ['sass', 'concat']
      },

      js: {
        files: ['twentyfifteen-child/media/js/**/*.js'],
        tasks: ['jshint']
      }
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
