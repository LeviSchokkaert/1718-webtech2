let dog = {
    breed: 'collie',
    name: 'lassie',
    color: 'brownish',
    age: 76,
    gender: 'm',
    colorEyes: function(){
        return 'brown';
    }

}
let Dog = function(breed, name , color, age, gender){
    this.breed = breed;
    this.name = name;
    this.color = color;
    this.age = age;
    this.colorEyes= function(){
        return 'pink'
    };
    this.birthYear= function(){

        const now = new Date();
        const year = now.getFullYear - this.age;


        let currentYear= 2018;
        let birthYear = currentYear - this.age;
        return birthYear
    }
}

let myFavouriteDog= new Dog ('Collie', 'Lassie', 'brown and black', 6, 'm');

myFavouriteDog.bestToyEver = 'een mooie rode bal'

let saySomething = myFavouriteDog.speak('er klopt iemand op de deur')



Dog.prototype.speak = function(){
    let slogan = 'De' + this.breed + ' hond zegt:  ' + line;
}

document.write(myFavouriteDog.birthYear());
