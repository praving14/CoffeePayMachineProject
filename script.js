// function to round my values to two decimal places 
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

//function to get the price of the coffee
function getPrice(Coffeesize, Coffeetype) {
    var Price = 0;
    //CoffeeSize calculation
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

//create an array to hold each order
var orderList = [];
//create new object within the array
var counter = orderList.length -1;
orderList[counter] = {};
var startOrder = document.getElementById("myOrder");
startOrder.addEventListener('click', function (){
   var allbuttons = document.getElementsByTagName('button');
    for (var i = 0; i < allbuttons.length; i++) {
        allbuttons[i].disabled = false;
        // This enables the other buttons so that the user can select their coffee specifics.
    } 
});

var cupSize = document.getElementsByClassName('size');
for (var i = 0; i < cupSize.length; i++) {
    cupSize[i].addEventListener('click', function () {
        orderList[counter]['size'] = this.id;
    });
}

var spoonSize = document.getElementsByClassName('spoon');
for (var i = 0; i < spoonSize.length; i++) {
    spoonSize[i].addEventListener('click', function () {
        orderList[counter]['sugarAmount'] = this.id;
    });
}

var milk = document.getElementsByClassName('milk');
for (var i = 0; i < milk.length; i++) {
    milk[i].addEventListener('click', function () {
        orderList[counter]['milkOrCream'] = this.id;
    })
}
var coffeeOption = document.getElementsByClassName('coffeflavor');
for (var i = 0; i < coffeeOption.length; i++) {
    coffeeOption[i].addEventListener('click', function () {
        orderList[counter]['coffee'] = this.id;
    });
}
var total = document.getElementById('getTotal');
total.addEventListener('click', function () {
    orderList[counter]['bill'] = getPrice(orderList[counter]['size'], orderList[counter]['coffee']);
    document.getElementById('order1').innerText = orderList[counter]['size'] + ' Cup ' + orderList[counter]['coffee'] + ' with ' + orderList[counter]['milkOrCream'] + ', ' + orderList[counter]['sugarAmount'] + ' sugar.';
    document.getElementById('price1').innerText = orderList[counter]['bill'];
    document.getElementById('grandTotal').innerText = getBillTotal();
})

function getBillTotal() {
    var bill=0;
    for (var i = 0 ; i < orderList.length; i++) {
        bill += Number(orderList[i]['bill']);
    }
    return bill;
}