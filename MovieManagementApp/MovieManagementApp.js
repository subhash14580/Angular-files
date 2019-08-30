"use strict";
exports.__esModule = true;
var MovieManagementApp = /** @class */ (function () {
    function MovieManagementApp() {
        this.movieList = [];
        this.movieDistributors = [];
    }
    MovieManagementApp.prototype.addMovie = function (movie) {
        this.movieList.push(movie);
    };
    MovieManagementApp.prototype.removeMovie = function (movieId) {
        var index = 0;
        for (var i = 0; i < this.movieList.length; i++) {
            //using ternery operator
            index = this.movieList[i].movieId == movieId ? i : -1;
            // if(this.movieList[i].movieId == movieId) {
            //     index = i;
            //     break;
            // }
        }
        delete this.movieList[index];
    };
    MovieManagementApp.prototype.changeProducerForTheMovie = function (movie, nameOfProducer) {
        movie.producer = nameOfProducer;
    };
    MovieManagementApp.prototype.display = function (movie) {
        return "movie name: " + movie.name +
            "hero name " + movie.heroName +
            "heroine name : " + movie.heroine +
            "director :" + movie.director +
            "producer : " + movie.producer;
    };
    MovieManagementApp.prototype.addMovieDistributor = function (movieDis) {
        this.movieDistributors.push(movieDis);
    };
    MovieManagementApp.prototype.getTheDistributorNamesForMovie = function (movie) {
        var names = [];
        for (var _i = 0, _a = this.movieDistributors; _i < _a.length; _i++) {
            var movDis = _a[_i];
            var movList = movDis.movieList;
            for (var _b = 0, _c = this.movieList; _b < _c.length; _b++) {
                var mov = _c[_b];
                if (mov.movieId == movie.movieId) {
                    names.push(movDis.distributorName);
                }
            }
        }
        return names;
    };
    return MovieManagementApp;
}());
exports.MovieManagementApp = MovieManagementApp;
