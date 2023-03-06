// Variables
var divElem = document.querySelector(".textDiv");
var ageElem = document.querySelector(".age") 
var nameElem = document.querySelector(".name");
var heightElem = document.querySelector(".height");

let randomNum = 100;


// Classes
class Person 
{
    #name;
    #age;
    #height;

    constructor(r_name, r_age, r_height)
    {
        this.#name = r_name;
        this.#age = r_age;
        this.#height = r_height;
    };

    get_height()
    {
        return this.#height;
    }

    get_name()
    {
        return this.#name;
    }

    get_age()
    {
        return this.#age;
    }
};

let liam = new Person("Liam", 18, "5\"11'");
console.log(liam.get_height());

divElem.innerHTML = "Hello World";

nameElem.innerHTML = "Name: " + liam.get_name();
ageElem.innerHTML = "Age: " + liam.get_age();
heightElem.innerHTML = "Height: " + liam.get_height();

