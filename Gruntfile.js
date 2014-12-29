'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-downloadfile');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sass-convert');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    downloadfile: {
      options:{
        dest: './twentyfifteen-child/media/downloads'
      },
      files: [
        global['url'] + 'wp-content/themes/twentyfifteen/style.css'
      ]
    },

    'sass-convert': {
      files: {
        from: 'css',
        to: 'scss',
        cwd: 'twentyfifteen-child/media/downloads',
        src: '*.css',
        filePrefix: '_',
        dest: 'twentyfifteen-child/media/sass/vendor'
      }
    },

    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: [
          {'twentyfifteen-child/style.css': 'twentyfifteen-child/media/sass/style.scss'}
        ]
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'twentyfifteen-child/media/sass/**/*.scss',
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
    'downloadfile',
    'sass-convert',
    'sass',
    'concat',
    'watch'
  ]);

  grunt.registerTask('set_global', 'Set a global variable.', function() {
    global['url'] = 'http://fabbrucci.me/';
  });
};
