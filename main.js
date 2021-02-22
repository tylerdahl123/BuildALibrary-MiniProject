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