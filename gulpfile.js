// Gulpを初期化する
const { src, dest, watch, series } = require('gulp');

// Gulpプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));

// Sassのコンパイル処理
const sass_compile = function () {
  return src('css/sass/style.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('public/stylesheets'))
}

// タスクを実行する
exports.default = series(sass_compile);

exports.watch = function () {
  watch('css/sass/style.scss', sass_compile);
}