let gulp = require("gulp");
let sassLoader=require("gulp-sass");
let postcss=require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let cssnano = require("cssnano");
let sourceMaps=require("gulp-sourcemaps");
let discardComments=require("postcss-discard-comments")
let aliases = require("gulp-style-aliases")
let env = process.env.NODE_ENV;

//every configuration is set to development mode by default
//set default configs
let paths={
    srcAll:"./src",
    src:"./src/*.scss",
    dest:"./lib"
}

//define postcss workflow
let postcssPlugins=[
    autoprefixer(),
    discardComments()
];

//set production configs
if(env=="production"){
    //add uglify step
    postcssPlugins.push(
        cssnano()
    )
    //change output dest path
    paths.dest="./lib.minified"
}


function style(){
    return (
        gulp.src(paths.src)
            .pipe(aliases(
                {
                    '@assets':'../Interface/src/assets'
                }
            ))
            .pipe(sourceMaps.init())
            .pipe(sassLoader())
            .on("error",sassLoader.logError)
            //post css finishing
            .pipe(postcss(postcssPlugins))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest(paths.dest))
    );
}


function watch(){
    gulp.watch(paths.srcAll,style);
}

exports.style=style;

exports.watch=watch;
