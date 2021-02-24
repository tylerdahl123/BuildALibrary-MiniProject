class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = Boolean;
        this._ratings = [];
    }
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    toggleCheckOutStatus (){
     this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(){
        let ratingsAverage = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)
        return ratingsAverage / this.ratings.length;
    }
    addRating(value){
        this.ratings.push(value);
    }
    set isCheckedOut (newIsCheckedOut){
        this._isCheckedOut = newIsCheckedOut;

    }

} 
class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    getAuthor(){
        return this._author;
    }
    getPages(){
        return this._pages;
    }
}
class Movie extends Media {
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    getDirector(){
        return this._director;
    }
    getrunTime(){
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    getArtist(){
        return this._artist;
    }
    getSongs(){
        return this._songs;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Everything', 544);
historyOfEverything.toggleCheckOutStatus(true);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
// console.log(historyOfEverything.getAverageRating());
// console.log(historyOfEverything.isCheckedOut);

const speed = new Movie('Jan De Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
speed.addRating(1)
speed.addRating(1);
speed.addRating(5);
// console.log(speed.getAverageRating())
// console.log(speed.isCheckedOut);

const Alvin = new CD('Alvin and the Chipmunks', 'Alvin', ['Bad Romance', 'Mess Around', 'A Friend Like You']);
Alvin.toggleCheckOutStatus(false);
Alvin.addRating(5);
Alvin.addRating(1);
Alvin.addRating(5);
console.log(Alvin.getAverageRating());
console.log(Alvin);


