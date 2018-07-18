module.exports = function (gulp) {
  gulp.task('all', [ 'html', 'img', 'csv', 'css', 'js' ])
  gulp.task('default', [ 'server', 'watch' ])
}
