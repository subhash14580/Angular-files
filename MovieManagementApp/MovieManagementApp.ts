import {Movie} from "./Movie";
import MovieInterface from "./MovieInterface";
import {MovieDistributor} from "./MovieDistributor";

export class MovieManagementApp implements MovieInterface{

        public movieList:Movie[] = [];
        public movieDistributors:MovieDistributor[] = [];

        public addMovie(movie:Movie):void{
            this.movieList.push(movie);
        }
        public removeMovie(movieId:number) : void{
            var index = 0;
            for(var i = 0; i < this.movieList.length; i++){
                //using ternery operator
                index = this.movieList[i].movieId == movieId ? i : -1;
                // if(this.movieList[i].movieId == movieId) {
                //     index = i;
                //     break;
                // }
            }
            delete this.movieList[index];
        }
        public changeProducerForTheMovie(movie:Movie,nameOfProducer:string){
            movie.producer = nameOfProducer;
        }
        public display(movie: Movie):string{
                return "movie name: " + movie.name+ 
                        "hero name "+ movie.heroName + 
                        "heroine name : "+ movie.heroine  + 
                        "director :" + movie.director + 
                        "producer : "+ movie.producer; 
        }
        public addMovieDistributor(movieDis:MovieDistributor):void {
            this.movieDistributors.push(movieDis);
        }

        public getTheDistributorNamesForMovie(movie: Movie):any[]{
                var names = [];
                for(let movDis of this.movieDistributors) {
                        var movList = movDis.movieList;
                        for(let mov of this.movieList){
                            if(mov.movieId == movie.movieId){
                                names.push(movDis.distributorName);
                            }
                        }
                }
                return names;
        }

        public bookMovie(movie:Movie):boolean {
            for(var i = 0; i < this.movieList.length; i++){
                //using ternery operator
                 return this.movieList[i].movieId == movie.movieId ? true : false;
            }
            return false;
        }

}