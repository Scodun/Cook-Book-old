const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react("resources/js/app.js", "public/js")
  .less("resources/sass/less/app.less", "public/css/site-less.css",
    {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#04ADBF"
        }
      }
    })
  .sass("resources/sass/app.scss", "public/css/site-scss.css")
  .styles([
    "public/css/site-scss.css",
    "public/css/site-less.css"
  ], "public/css/app.css");

mix.browserSync("localhost:8000");
// Add your own php artisan serve's url and port
// For me url is localhost or 127.0.0.1 and port is 8000
