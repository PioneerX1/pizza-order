//BUSINESS LOGIC
function Order() {
  this.cost = 0;
  this.pizzaList = [];
}

function Pizza(size, toppings) {
	this.size = size;
  this.toppings = toppings;
}

Order.prototype.addPizza = function(newPizza) {
  this.cost += newPizza.cost;
  this.pizzaList.push(newPizza);
}

Pizza.prototype.calculatePizzaCost = function() {
	//baseline cost for small with no toppings
	this.cost = 8.50;
	//upcharges for sizes beyond small
	if (this.size === "large") {
  	this.cost += 2.50;
  } else if (this.size === "medium") {
  	this.cost += 1.50;
  } else if (this.size === "extra large") {
    this.cost += 3.00;
  }
  //upcharges for different priced toppings
  for (var i=0; i < this.toppings.length; i++) {
  	if (this.toppings[i] === "pepperoni") {
    	this.cost += 1.50;
    }
    if (this.toppings[i] === "green peppers") {
    	this.cost += 0.50;
    }
    if (this.toppings[i] === "mushrooms") {
    	this.cost += 1.00;
    }
    if (this.toppings[i] === "olives") {
    	this.cost += 0.50;
    }
    if (this.toppings[i] === "onions") {
    	this.cost += 0.50;
    }
    if (this.toppings[i] === "bacon") {
    	this.cost += 1.50;
    }
    if (this.toppings[i] === "prosciutto") {
    	this.cost += 2.00;
    }
    if (this.toppings[i] === "sausage") {
    	this.cost += 1.50;
    }
    if (this.toppings[i] === "spinach") {
    	this.cost += 1.00;
    }
    if (this.toppings[i] === "pineapple") {
    	this.cost += 1.00;
    }
  }
  return this.cost;
}

function currency(number) {
  return "$"+number.toFixed(2).toString();
}


var newOrder = new Order;
//var order = [];
var pizzaNum = 0;
var newPizza;
var charge;

//USER INTERFACE LOGIC
$(document).ready(function() {
  //$("form#pizza-form").submit(function(event) {
  $('.input').change('input', function() {
    //assign input values to variables
    var inputSize = $("input[name=size]:checked").val();
    var inputToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      inputToppings.push($(this).val());
    });

    //create new pizza object with these variables
    newPizza = new Pizza(inputSize, inputToppings);
    charge = currency(newPizza.calculatePizzaCost());
    //alert('size: ' + inputSize + ' ' + cost);
    $("#show-cost").show();
    $("#pizza-cost").text(charge);
    //button to add this pizza to overall order

  });
  $("button#add-pizza").click(function(event) {
    event.preventDefault();
    //order.push(newPizza);
    newOrder.addPizza(newPizza);
    //alert(newOrder.pizzaList[pizzaNum].cost);

    $("ul#pizza-list").append("<li>" + newOrder.pizzaList[pizzaNum].size + " " + newOrder.pizzaList[pizzaNum].toppings + " " + currency(newOrder.pizzaList[pizzaNum].cost) + "</li>");
    $("#order-cost").text(currency(newOrder.cost));
    //alert(newOrder.cost);
    pizzaNum++;
    $("#order-button").show();
  });

  $("button#order-button").click(function(event) {
    event.preventDefault();
    alert("Thank you for placing your order. Please pickup at 123 Main Street, Seattle, WA in 30 minutes");
    location.reload();
  });

});
