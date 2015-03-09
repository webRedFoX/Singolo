module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    //SCRIPTS.JS
    concat: {
    	js: {
	        src: [
	        'js/jquery.js',
	        'js/PageScroll2id.min.js',
	          'js/bootstrap/transition.js',
	          'js/bootstrap/alert.js',
	          'js/bootstrap/button.js',
	          'js/bootstrap/carousel.js',
	          'js/bootstrap/collapse.js',
	          'js/bootstrap/dropdown.js',
	          'js/bootstrap/modal.js',
	          'js/bootstrap/tooltip.js',
	          'js/bootstrap/popover.js',
	          'js/bootstrap/scrollspy.js',
	          'js/bootstrap/tab.js',
	          'js/bootstrap/affix.js',
	          'js/main.js',
	        ],
	        dest: 'dest/scripts.js',
        },
    },

    uglify: {
    	js: {
	         files: {
	           '../js/scripts.min.js': ['dest/scripts.js']
	         },
     	},
     },


	// LESS & CSS
    less: {
    	css : {
	        files: {
	          "dest/styles.css": "less/styles.less"
	        },
    	},
    },

    autoprefixer: {
    	css: {
    		options: {
    		  browsers: [
				"Android 2.3",
				"Android >= 4",
				"Chrome >= 20",
				"Firefox >= 24",
				"Explorer >= 8",
				"iOS >= 6",
				"Opera >= 12",
				"Safari >= 6"
				],
    		},
    	  src: 'dest/styles.css',
    	  dest: 'dest/styles_autoprefix.css',
    	},
    },

    cssmin: {
      target: {
        files: {
          '../css/styles.min.css': ['dest/styles_autoprefix.css']
        },
      },
    },




    // OPTIMIZATION
    watch: {
      scripts: {
        files: 'js/*.js',
        tasks: 'newer:concat'
      },

      js: {
        files: 'dest/scripts.js',
        tasks: 'newer:uglify'
      },

      less: {
	        files: 'less/*.less',
	        tasks: ['newer:less'],
      },

      autoprefixer: {
	        files: 'dest/styles.css',
	        tasks: ['newer:autoprefixer'],
      },

      cssmin: {
	        files: 'dest/styles.css',
	        tasks: 'newer:cssmin'
      }
    }

  });


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	

	grunt.registerTask('default', ['concat', 'uglify','less', 'autoprefixer', 'cssmin', 'watch']);
	
	

};