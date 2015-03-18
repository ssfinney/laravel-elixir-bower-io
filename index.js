var gulp        	= require('gulp');
var notify      	= require('gulp-notify');
var bower  			= require('gulp-bower')
var elixir          = require('laravel-elixir');

function notify_message(title, subtitle, message, icon){
    gulp.src('').pipe(notify({
        title: title,
        subtitle: subtitle,
        icon: __dirname + icon,
        message: message
    }));
}

elixir.extend('Bower', function(options){

    var defaultOptions = {};

    options = options || defaultOptions;

    gulp.task('Bower', function(){

    	var onError = function(err){
            notify.onError({
                title       : "Elixir Bower",
                subtitule   : "Elixir Bower Failed!",
                message     : "Error : <%= error.message %>",
                icon        : __dirname + '/../laravel-elixir/icons/fail.png'
            })(err);

            this.emit('end');
        }

            return bower(options)
                .pipe(gulp.dest('lib/'));
        });

    return this.queueTask("Bower");
});