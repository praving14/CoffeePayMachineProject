// function to round my values to two decimal places.I probably will not need this.
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}
/*
* ---------------------------------------GET PRICE OF COFFEE-------------------------------
*The function to get the price of the coffee
* parameters: the size of the coffee cup and type of coffee
* return: the price of the coffee 
*/
function getPrice(Coffeesize, Coffeetype) {
    var Price = 0;
    if (Coffeesize == "small" && Coffeetype == "expresso") {
        Price = 1.69;
    }
    else if (Coffeesize == "small" && Coffeetype == "cappuccino") {
        Price = 1.99;
    }
    else if (Coffeesize == "small" && Coffeetype == "mocha") {
        Price = 2.49;
    }
    else if (Coffeesize == "small" && Coffeetype == "classic") {
        Price = 1.69;
    }
    else if (Coffeesize == "medium" && Coffeetype == "cappuccino") {
        Price = 2.99;
    }
    else if (Coffeesize == "medium" && Coffeetype == "mocha") {
        Price = 3.39;
    }
    else if (Coffeesize == "medium" && Coffeetype == "expresso") {
        Price = 2.79;
    }
    else if (Coffeesize == "medium" && Coffeetype == "classic") {
        Price = 2.49;
    }
    else if (Coffeesize == "large" && Coffeetype == "cappuccino") {
        Price = 3.79;
    }
    else if (Coffeesize == "large" && Coffeetype == "mocha") {
        Price = 3.99;
    }
    else if (Coffeesize == "large" && Coffeetype == "expresso") {
        Price = 3.49;
    }
    else if (Coffeesize == "large" && Coffeetype == "classic") {
        Price = 3.19;
    }
    else {
        sizePrice = 0;
    }
    return Price;
}

//create an array to hold each order. The maximum it can hold is 3 orders;
// ---------------------------------------ARRAY OF ALL MY ORDERS-------------------------------
var orderList = [];

var counter = orderList.length -1;
// we create an object inside the array orderList where each object will have the necessay information about an order
orderList[counter] = {};

//---------------------------------------MY VARIABLES-------------------------------

var startOrder = document.getElementById("myOrder");
var cupSize = document.getElementsByClassName('size');
var spoonSize = document.getElementsByClassName('spoon');
var milk = document.getElementsByClassName('milk');
var coffeeOption = document.getElementsByClassName('coffeflavor');
var otherbuttons = document.getElementsByClassName('other');
var totalOfBill = document.getElementById('grandTotal');
var resetOption = document.getElementById('reset');
var allbuttons = document.getElementsByTagName('button');
var allprices = document.getElementsByClassName('prices');
var allorders = document.getElementsByClassName('orders');
var addNewOrderOfCoffee = document.getElementById('addOrder');
var finalCheckOut = document.getElementById('checkout');
var tableName = document.getElementById('coffeebill');

/*
*---------------------------------------START YOUR NEW ORDER-------------------------------
*
*Initially, the buttons on te page are disabled
* when you click on the 'Start your new order' button, all the other buttons are enabled
* also a row will be created in a bill table where you can insert your ordered items and price
*/

startOrder.addEventListener('click', function () {
    createNewRow(); //Create new row on the bill table;
    for (var i = 0; i < cupSize.length; i++) {
        cupSize[i].disabled = false; // This enables the other buttons so that the user can select their coffee specifics.
        if (cupSize[i].disabled == false) {
            cupSize[i].style.color = 'white';
        }
    }
    resetOption.disabled = false;
    startOrder.disabled = true;


});
/*
*-----------------------------------CHOOSE THE SIZE OF THE COFFEE CUP-------------------------------
*
* when you click on the cupsize. It takes the id of that element, takes it value and save it to
* orderList[0].cupSize
* Note: the element id is the same as the value of the element
*/
for (var i = 0; i < cupSize.length; i++) {
    cupSize[i].addEventListener('click', function () {
        orderList[counter]['size'] = this.id.toString().toUpperCase();
        cell1.innerText = orderList[counter]['size'] + ' Cup';
        for (var i = 0; i < spoonSize.length; i++) {
            spoonSize[i].disabled = false; // This enables the other buttons so that the user can select their coffee specifics.
            if (spoonSize[i].disabled == false) {
                spoonSize[i].style.color = 'white';
            }
        }
    });
}

/*
*-----------------------------------CHOOSE THE AMOUNT OF SUGAR-------------------------------
*
* when you click on the spoomsize. It takes the id of that element, takes it value and save it to
* orderList[0].spoonSize
*/

for (var i = 0; i < spoonSize.length; i++) {
    spoonSize[i].addEventListener('click', function () {
        orderList[counter]['sugarAmount'] = this.id.toString().toUpperCase();
        cell1.innerText = orderList[counter]['size'] + 'Cup, ' + orderList[counter]['sugarAmount'] + ' Sugar ';
        for (var i = 0; i < milk.length; i++) {
            milk[i].disabled = false; // This enables the other buttons so that the user can select their coffee specifics.
            if (milk[i].disabled == false) {
                milk[i].style.color = 'white';
            }
        }
    });
}

/*
*-----------------------------------MILK / CREAM-------------------------------
*
* when you click on the milk/cream option. It takes the id of that element,takes it value and save it to
* orderList[0].milkOrCream
*/

for (var i = 0; i < milk.length; i++) {
    milk[i].addEventListener('click', function () {
        orderList[counter]['milkOrCream'] = this.id.toString().toUpperCase();
        cell1.innerText = orderList[counter]['size'] + 'Cup ' + orderList[counter]['sugarAmount'] + ' Sugar, ' + orderList[counter]['milkOrCream'];
        for (var i = 0; i < coffeeOption.length; i++) {
            coffeeOption[i].disabled = false; // This enables the other buttons so that the user can select their coffee specifics.
            if (coffeeOption[i].disabled == false) {
                coffeeOption[i].style.color = 'white';
            }
        }
    })
}

/*
*-----------------------------------CHOOSE THE COFFEE-------------------------------
*
* when you click on the coffeeOption. It takes the id of that elementm, takes it value and save it to
* orderList[0].coffee
*/

for (var i = 0; i < coffeeOption.length; i++) {
    coffeeOption[i].addEventListener('click', function () {
        orderList[counter]['coffee'] = this.id.toString().toUpperCase();
        cell1.innerText = orderList[counter]['size'] + 'Cup, ' + orderList[counter]['sugarAmount'] + ' Sugar, ' + orderList[counter]['milkOrCream'] + ' ' + orderList[counter]['coffee'] + ' Coffee';
        for (var i = 0; i < otherbuttons.length; i++) {
            otherbuttons[i].disabled = false; // This enables the other buttons so that the user can select their coffee specifics.
        }
    });
}

/*
*-----------------------------------GET TOTAL-------------------------------
* When click on the get Total button, you will obtain the total of the order and the see the bill on he right
*/
var total = document.getElementById('getTotal');
total.addEventListener('click', function () {
    orderList[counter]['bill'] = getPrice(orderList[counter]['size'].toLowerCase(), orderList[counter]['coffee'].toLowerCase());
    cell2.innerText = orderList[counter]['bill'];
    totalOfBill.innerText = '$' + getBillTotal();
    disableButtons();
    finalCheckOut.disabled = false;
    addNewOrderOfCoffee.disabled = false;
    resetOption.disabled = false;

})

/*
*-----------------------------------FUNCTION: GET THE TOTAL SUM AMOUNT-------------------------------
* getBillTotal method goes through the price of each order of coffee and add them up to get the total bill
* return totalBill of the orders made
*/
function getBillTotal() {
    var bill = 0;
    for (var i = 1; i < tableName.rows.length; ++i) {
        bill += Number(tableName.rows[i].cells[1].innerText);
    }
    return bill;
}

/*
*  -------------------RESET--------------------------
*
* When you press the reset button, the array orderList is made empty
* All the buttons are disabled again
* Only the 'Start your New Order' button is enabled
*/
resetOption.addEventListener('click', function () {
    orderList = [];
    orderList[counter] = {};
    disableButtons();
    startOrder.disabled = false;
    billClear();
});

/*
*-----------------------------------FUNCTION: CLEAR THE BILL-------------------------------
* This fucntion clears the bill with all the previous data
*/
function billClear(){
    totalOfBill.innerText = '';
    for (var i = 1; i < tableName.rows.length; ++i) {
        tableName.rows[i].cells[0].innerText='';
        tableName.rows[i].cells[1].innerText=''
    }
    rowlength = 1;
}

/*
*-----------------------ADD ORDER-------------------------------
*
* When you click on the 'Add Order' button,
*/
addNewOrderOfCoffee.addEventListener('click', function () {
    var counter = orderList.length;
    // we create an object inside the array orderList
    orderList[counter] = {};
    disableButtons();
    createNewRow();
    cupSize 
    for (var i = 0; i < cupSize.length; i++) {
        cupSize[i].disabled = false; // This enables the other buttons so that the user can select their coffee specifics.
        if (cupSize[i].disabled == false) {
            cupSize[i].style.color = 'white';
        }
    }

});

//-----------------------------------FUNCTION: DISABLE ALL BUTTONS-------------------------------
// This function basically deals with what happens when you reset or add a new order
function disableButtons() {
    for (var i = 0; i < allbuttons.length; i++) {
        allbuttons[i].disabled = true; // disable all the buttons again;
        allbuttons[i].style.color = '';
    }
}

//-----------------------------FUNCTION: CREATE NEW ROW IN THE BILL TABLE-------------------------------
function createNewRow() {
    var row = tableName.insertRow(tableName.rows.length);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
}