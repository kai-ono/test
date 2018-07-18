module.exports = function (gulp) {
  gulp.task('img', function () {
    const del = require('del')

    del('dest/img/*')

    return gulp.src('./src/img/*')
      .pipe(gulp.dest('./dest/img'))
  })

  gulp.task('csv', function () {
    const del = require('del')

    del('dest/csv/*')

    return gulp.src('./src/csv/*')
      .pipe(gulp.dest('./dest/csv'))
  })
}
