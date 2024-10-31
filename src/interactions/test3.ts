"use strict";

import { string } from "astro:schema";

//~-----------------------------
//~- Console 
//~-----------------------------


console.log("Message");

console.warn("Caution");

console.error("Error");

//  Variables ( let, const, var)


//~-----------------------------
//~- Primitive Data Types
//~-----------------------------


// Boolean
let playerIsAlive: boolean = true;

// Number, BigInt 
let playerHealth: number = 100.100;
let playerScore: BigInt = 9999999n;
let highScore: BigInt = BigInt(9999999);

// Strings 
let playerName: string = "John";
let secondPlayerName: string = "Joe";
let welcomeSentence: string = "Welcome to the game, ${newPlayer}";

// Symbole
let playerID: symbol = Symbol("Player0");

// Null & Undefined
let playerLevel: null = null;
let playerWeapon: undefined = undefined;


//~-----------------------------
//~-Non Primitive Data Types
//~-----------------------------


// Objects (JSON)
let Player: { name: string, score: number } = {
    name: "John",
    score: 58628
};

class Monster {
    // Propriété 
    name: string;
    power: number;

    // Méthodes
    public constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
    }
}
// Instance De Classe 
let monsterInstance: Monster = new Monster("Dragon", 5000);


//~-----------------------------
//~-Array
//~-----------------------------


let PlayerScores: number[] = [6511, 6512, 6513];
let Players: string[] = ["John", "Joe", "Jack"];


//~-----------------------------
//~- Tuples
//~-----------------------------


let Weapon: [string, number] = ["Gun", 100];

//~-----------------------------
//~- Enum
//~-----------------------------

enum Months {
    January = 1,
    February,
    March,
    April
}
let currentMonth = Months.February


//~-----------------------------
//~-Any & Unknown
//~-----------------------------


let playerItem: any = "Gun";
playerItem = 1000;
playerItem = 4564654586n;
playerItem = true;

let unknownData : unknown = 500


// Void 
function welcomeMessage(message: string): void {
    console.log("Your name is Haven");
}


//~-----------------------------
//~-Custom Types
//~-----------------------------


// Type Alias 
type id = number;
let monsterID: id = 300;

type transform = {
    x: number;
    y: number;
    z: number;
}

let playerPosition: transform = {
    x: 100,
    y: 2000,
    z: 0
}

let value: string | number


//~-----------------------------
//~- Interface
//~-----------------------------


interface Animal {
    name: string;
    location?: string;
    age: number; 
}

interface Entity {
    id: number;
}

interface GameObject {
    readonly object: number; 
}

type Seal = Animal & Entity & GameObject;

let NewSeal: Seal = {
    name: 'Seal',
    age: 10,
    id: 1,
};

let dog: Animal = {
    name: "Poopy",
    //location: "France",
    age: 5,
};


//~-----------------------------
//~-Fonction
//~-----------------------------


// Function declaration
function attackMonster(name: string, points: number) {
    console.log("monster has been attacked by player!");
}

// Function call 
attackMonster("Ogre", 3000);


// Function inside a variable 
const gameOver = function (playerName: string, playerScore: number) {
    console.log("Game Over" + "Player Name" + playerName + "Player Score" + playerScore);

}

gameOver ("Player1", 10000);

const newGame = (playerName: string, autoSave: boolean): void => console.log("Welcome to the game");

const createMonster = (monsterType: string, monsterPower : number, bonusPoints? : number): string => {
    return "New Monster Monster Type: ${monsterType} Monster Power : ${monsterPower} Bonus Points: ${bonusPoints}"
};

newGame ("Player2", true);

console.log(createMonster("Dragon", 1000, 2000));


// function Overloading 

function createPlayer (id: number, name: string): string;
function createPlayer (id: number): string;
function createPlayer (values: number | string): string {
    if (typeof values === "number") {
        return "New player created Player Name: Joe Player ID: " + values;
    } else {
        return "New player created";
    }

}


//~-----------------------------
//~-Classes
//~-----------------------------


abstract class GameObject {
    id: number;

    constructor (id: number) {
        this.id = id;
    }
    abstract move(): number[]
}
class Character extends GameObject{
    // Static properties
    static category: string = "Character";

    // Instance Properties
    public name: string;
    private _age: number;
    protected score: BigInt | undefined;
    public hasCar?: boolean;

    //Methods
    public constructor (name: string, age: number){
        super(6564)
        this.name = name;
        this._age = age;

        // Create Message
        console.log("A new"+Character.category+"has been created")
    }

    public welcomeMessage(): string{
        return "Welcome to the new chracter!"
    }

    move(): number[] {
        return [50, 50, 4]
    }

    //Getters & Setters
    get age (): number{
        return this._age;
    }

    set age (newAge: number){
        if (newAge > 120) {
            console.log("Age entered is too long")
        }else {
            this._age = newAge;
        }
    }
}

//class Instance
let Character1 = new Character("John Do", 20);
console.log(Character1.welcomeMessage());

class Fighter extends Character {

    // Method Overloading
    public welcomeMessage(): string {
        return "Welcome to the new fighter!"
    }

    // New Methods
    public kick(): number {
        return -50;
    }

}


//~-----------------------------
//~- TypeScript DOM Manipulation 
//~-----------------------------


const header1 = document.getElementById("first-heading")

if (header1){
    header1.innerText="Heading from TypeScript"
}

const productDiv = document.getElementsByClassName("product");

if (productDiv) {
    Array.from(productDiv).forEach((product) => {
        if (product instanceof HTMLElement) {
            product.style.background = "yellow"
        }
    })
}

// Event Listener 
const MyButton = document.getElementById("start-button");

if (MyButton) {
    MyButton.addEventListener("click", () => {
        alert("button pressed");
    });
}