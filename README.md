## Pizza Parlor
#### Object Oriented JavaScript Project: A pizza cost calculator.
***By Andrew Lawson © 2021***

## *Description:*
Users can choose a pizza's size, toppings, and delivery option and will receive a total price once submitted. This project's code uses concepts including object constructors, prototype methods, forms, and if/ else statements. 

## *Tests*
#### Test 1:
* Describe: Pizza()
* Test: Creates pizza object for size, toppings, and delivery to be applied. 
* Code: let newPizza = new Pizza('medium;,['pepperoni']);
* Expect(newPizza).toEqual(Pizza{ size: 'medium', toppings: ['pepperoni']});

#### Test 2:
* Describe: Pizza.prototype.calculatePrice
* Test: It will calculate total cost of a pizza based on what size, toppings, and delivery option the user chooses.
* Code: let newPizza = new Pizza('medium',['pepperoni'], 'delivery');
* newPizza.calculatePrice(); 
* Expect(newPizza.price).toEqual(18);

## *Setup Instructions:*

1. Copy https://github.com/andyL89/pizza-parlor.git.
2. Run `$ git clone https://github.com/andyL89/pizza-parlor.git` in the terminal to add directory to your computer.
3. Navigate to the top level of the directory.
4. Open index.html in your browser.

## *Tecnologies Used:*
* HTML
* CSS
* Java Script
* JQuery
* Bootstrap

## *Known Bugs:*

1. Multiple pizza ordering has yet to be implimented.

## *License*

[MIT](LICENSE.txt)

## Contact Information

Andrew Lawson : alawson89@gmail.com