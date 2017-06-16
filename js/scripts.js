//BUSINESS LOGIC

function Pizza(size, toppings) {
	this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculateCost = function() {
	//baseline cost for small with no toppings
	this.cost = 8.50;
	//upcharges for sizes beyond small
	if (this.size === "large") {
  	this.cost += 2.50;
  } else if (this.size === "medium") {
  	this.cost += 1.50;
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
  }
  return this.cost;
}

//USER INTERFACE LOGIC



var newPizza = new Pizza("medium", ["mushrooms", "pepperoni", "green peppers"]);
var cost = newPizza.calculateCost();
alert(cost);
