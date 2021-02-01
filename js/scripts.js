function Pizza(size, toppings, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}

Pizza.prototype.pizzaOrdered = function () {
  return this.size + " " + "pizza" + " " + "w/" + " " + this.toppings;
}

let order = function (pizza) {
  let size = pizza.size;
  let toppings = pizza.toppings;
  let delivery = pizza.delivery;
  let orderPrice = 0;

  if (size === "small") {
    orderPrice = orderPrice + 10 + (toppings.length * 2);
  } if (size === "medium") {
    orderPrice = orderPrice + 13 + (toppings.length * 2);
  } if (size === "large") {
    orderPrice = orderPrice + 15 + (toppings.length * 2);
  } if (size === "colossal") {
    orderPrice = orderPrice + 18 + (toppings.length * 2);
  } if (delivery === "delivery")
    orderPrice = orderPrice + 3;
  else {
    orderPrice = orderPrice;
  }
  return orderPrice;
}


//User Interface Logic
$(document).ready(function () {
  $("#btn-custom").click(function (event) {
    event.preventDefault();
    $("#btn-custom").hide();
    $("h2.double").hide();
    $(".order-custom").show();
  });

  $("#menu-custom").submit(function (event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=size]:checked").val();
    let chosenToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () {
      const inputtedToppings = $(this).val();
      chosenToppings.push(inputtedToppings);
    });
    const inputtedDelivery = $("input:radio[name=delivery]:checked").val();
    let newPizza = new Pizza(inputtedSize, chosenToppings, inputtedDelivery);
    let orderPrice = order(newPizza);
    $("#menu-custom").hide();
    $(".confirmation").show();
    $("#total").show().text("Your Total: $" + orderPrice);
    $("#current-order").show().text(newPizza.pizzaOrdered());
    $("#btn-checkout").show();
  });
    
  $("#btn-checkout").click(function () {
    $(".confirmation").hide();
    $(".checkout").show();
  });

});