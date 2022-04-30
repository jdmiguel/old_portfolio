module.exports = function(grunt){

    // grunt.loadNpmTasks('grunt-livereload');
    // grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg:  grunt.file.readJSON('package.json'),
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: {
                    'bin/index.html':'src/jade/index.jade',
                    'bin/about/index.html':'src/jade/about/index.jade',
                    'bin/projects/index.html':'src/jade/projects/index.jade',
                    'bin/skills/index.html':'src/jade/skills/index.jade',
                    'bin/timeline/index.html':'src/jade/timeline/index.jade',
                    'bin/working/index.html':'src/jade/working/index.jade',
                    'bin/contact/index.html':'src/jade/contact/index.jade'
                }
            }
        },
        less: {
            development: {
                options: {
                  compress : true
                },
                files: {
                    'bin/css/styles.css' : 'src/less/styles.less'
                }
            }
        },
        typescript: {
            base: {
                src: ['src/ts/**/*.ts'],
                dest: 'bin/js/main.min.js',
                options: {
                    sourceMap: false
                }
            }
        },
        /*uglify: {
            dist: {
                files: {
                    'bin/js/main.min.js' : ['bin/js/main.min.js']
                }
            }
        },*/
        watch: {
            buildHtml: {
                files: ['src/**/*.jade'],
                tasks: ['jade']
            },
            buildCss: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            },
            //buildJs:{
                //files: ['src/ts/**/*.ts'],
                //tasks: ['typescript']
            //},
            /*uglifyJs:{
                files: ['bin/js/main.min.js'],
                tasks: ['uglify']
            }*/
        }
    });

    //grunt.registerTask('default', ['jade','less','typescript','uglify']);
    grunt.registerTask('default', ['jade','less']);
    //grunt.registerTask('default', ['jade','less']);
    grunt.registerTask('server', ['watch']);
   // grunt.registerTask('server', ['watch']);
};