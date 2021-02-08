/*This class should have a memory property that stores the most recent calculation along with several methods.
Each method should work as described in its respective comment and should throw a descriptive error if the input is invalid.*/
class Calc {

    //Constructs a Calc with an undefined memory property
    constructor() {
        this.memory = undefined;
    }

    //Clears the memory property
    clearMem() {
        this.memory = undefined;
    }

    //Adds two numbers together, defaults the second value to the memory property
    add(value1, value2 = this.memory) {
        if(value2!==undefined) {
        this.memory = value1 + value2;
        console.log(`${value1} + ${value2} = ${this.memory}`);
        return this.memory;
        } else {
             console.log(new Error('Must input two values to add'));
        }
    }

    //Subtracts one number from another number, defaults the second value to the memory property
    subtract(value1, value2 = this.memory) {
        if(value2!==undefined) {
            this.memory = value2 - value1;
            console.log(`${value2} - ${value1} = ${this.memory}`);
            return this.memory;
            } else {
                 console.log(new Error('Must input two values to subtract'));
            }
    }

    //Multiplies two numbers together, defaults the second value to the memory property
    multiply(value1, value2 = this.memory) {
        if(value2!==undefined) {
            this.memory = value1 * value2;
            console.log(`${value1} x ${value2} = ${this.memory}`);
            return this.memory;
            } else {
                 console.log(new Error('Must input two values to multiply'));
            }
    }

    //Divides one number by another, defaults second value to the memory property
    divide(value1, value2 = this.memory) {
        if(value2!==undefined) {
            this.memory = value1 / value2;
            console.log(`${value1} / ${value2} = ${this.memory}`);
            return this.memory;
            } else {
                 console.log(new Error('Must input two values to divide'));
            }
    }

    //Converts temperature from Celcius to Farenheit
    convertToF(cTemp) {
        if(typeof cTemp === 'number'){
        return cTemp * 1.8 + 32;
        } else {
            console.log(new Error('Invalid input: input must be a number'))
        }
    }

    //Converts temperature from Farenheit to Celcius
    convertToC(fTemp) {
        if(typeof fTemp === 'number'){
            return (fTemp - 32)/1.8;
        } else {
            console.log(new Error('Invalid input: input must be a number'))
        }
    }

    //Returns the square root of a number, defaults input to the memory property
    sqrt(num = this.memory) {
        if(num!== undefined) {
            this.memory = Math.sqrt(num);
            return this.memory;
        } else {
            console.log(new Error('Invalid input: input must be a number'))
        }
    }
}
