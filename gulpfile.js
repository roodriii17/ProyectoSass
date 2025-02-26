// Importar Gulp y plugins
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const sassdoc = require("sassdoc");

// Tarea para compilar Sass a CSS
function styles() {
    return gulp.src("src/scss/**/*.scss") // Ruta de archivos SCSS
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest("dist/css")) // Guardar CSS en 'dist/css'
        .pipe(browserSync.stream()); // Recargar navegador
}

// Servidor en vivo
function serve() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("src/scss/**/*.scss", styles); // Observar cambios en SCSS
    gulp.watch("*.html").on("change", browserSync.reload);
}

// Tarea para generar la documentación de Sass
function generateSassDoc() {
    return gulp.src("src/scss/**/*.scss") // Ruta de los archivos SCSS
        .pipe(sassdoc({ dest: "sassdoc" })); // Guardar documentación en 'sassdoc/'
}

// Exportar tareas
exports.styles = styles;
exports.serve = serve;
exports.sassdoc = generateSassDoc;
exports.default = gulp.series(styles, serve);
