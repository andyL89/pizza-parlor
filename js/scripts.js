function Pizza(size, toppings, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}


let order = function (pizza) {
  let size = pizza.size;
  let toppings = pizza.toppings;
  let delivery = pizza.delivery;
  let orderPrice = 0;

  if (size === "small") {
    orderPrice = orderPrice + 10;
  }
  else if (size === "medium") {
    orderPrice = orderPrice + 13;
  } else if (size === "large") {
    orderPrice = orderPrice + 15;
  } else if (size === "colossal") {
    orderPrice = orderPrice + 17;
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
    $("input:checkbox[name=toppings]:checked").each(function () {
      const inputtedToppings = $(this).val();

      const inputtedDelivery = $("input:radio[name=delivery]:checked").val();
      let newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedDelivery);
      let orderPrice = order(newPizza);
      $("#total").show().text("Total: " + orderPrice);
      console.log(newPizza);
    })
  });
});