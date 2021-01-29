function Pizza(size, toppings, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}

let order = function (pizza) {
  let size = pizza.size;
  let toppings = pizza.toppings;
  let delivery = pizza.delivery;
  let orderPrice = 10;

  if (size === "small") {
    orderPrice = orderPrice;
  }
  else if (size === "medium") {
    orderPrice = orderPrice + 3;
  } else if (size === "large") {
    orderPrice = orderPrice + 5;
  } else if (size === "colossal") {
    orderPrice = orderPrice + 7;
  } else {
    orderPrice = orderPrice;
  }
  return orderPrice;
}


//User Interface Logic
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=size]:checked").val();
    const inputtedToppings = $("input:checkbox[name=toppings]:checked").val();
    const inputtedDelivery = $("input:checkbox[name=delivery]:checked").val();
    let newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedDelivery);
    let orderPrice = order(newPizza);
    $("#total").show().text("Total: " + orderPrice);
  })
});