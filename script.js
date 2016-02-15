// function to round my values to two decimal places 
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

//function to get the price of the coffee
function getPrice(Coffeesize, Coffeetype) {
    var Price = 0;
    //CoffeeSize calculation
    if (Coffeesize == "Small" && Coffeetype == "Expresso") {
        Price = 1.69;
    }
    else if (Coffeesize == "Small" && Coffeetype == "Cappacino") {
        Price = 1.99;
    }
    else if (Coffeesize == "Small" && Coffeetype == "Mocha") {
        Price = 2.49;
    }
    else if (Coffeesize == "Small" && Coffeetype == "Classic") {
        Price = 1.69;
    }
    else if (Coffeesize == "Medium" && Coffeetype == "Cappacino") {
        Price = 2.99;
    }
    else if (Coffeesize == "Medium" && Coffeetype == "Mocha") {
        Price = 3.39;
    }
    else if (Coffeesize == "Medium" && Coffeetype == "Expresso") {
        Price = 2.79;
    }
    else if (Coffeesize == "Medium" && Coffeetype == "Classic") {
        Price = 2.49;
    }
    else if (Coffeesize == "Large" && Coffeetype == "Cappacino") {
        Price = 3.79;
    }
    else if (Coffeesize == "Large" && Coffeetype == "Mocha") {
        Price = 3.99;
    }
    else if (Coffeesize == "Large" && Coffeetype == "Expresso") {
        Price = 3.49;
    }
    else if (Coffeesize == "Large" && Coffeetype == "Classic") {
        Price = 3.19;
    }
    else {
        sizePrice = 0;
    }
    return Price;
}

//create new object called an order
var order = new Object();
var chooseSize = doucment.getElementsByClassName("size");
for (var i = 0; i < chooseSize.length; ++i) {
    chooseSize[i].addEventListener("click", function () {
        alert(this.id);
    });
}
var chooseSpoon= doucment.getElementsByClassName("spoon");
for (var i = 0; i < chooseSize.length; ++i) {
    chooseSpoon[i].addEventListener("click", function () {
        order.spoon = this.value;
        alert("You picked" + order.spoon + ".");
    });
}
var choosemilk = doucment.getElementsByClassName("milk");
for (var i = 0; i < chooseSize.length; ++i) {
    choosemilk[i].addEventListener("click", function () {
        order.milk = this.value;
        alert("You picked" + order.milk + ".");
    });
}
var choosecoffeflavor = doucment.getElementsByClassName("coffeflavor");
for (var i = 0; i < chooseSize.length; ++i) {
    choosecoffeflavor[i].addEventListener("click", function () {
        order.coffeflavor = this.value;
    });
}

function total() {

}