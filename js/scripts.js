function Pizza(size, toppings, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
  this.price = 0;
}

Pizza.prototype.calculatePrice = function () {
  if (this.size === "Small") {
    this.price = 10 + this.toppings.length * 2;
  } if (this.size === "Medium") {
    this.price = 13 + this.toppings.length * 2;
  } if (this.size === "Large") {
    this.price = 15 + this.toppings.length * 2;
  } if (this.size === "Colossal") {
    this.price = 18 + this.toppings.length * 2;
  } if (this.delivery === "delivery")
    this.price = this.price + 3;
    else {
    this.price = this.price;
  }
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
    newPizza.calculatePrice();
    $("#menu-custom").hide();
    $(".confirmation").show();
    $("#total").show().text("Your Total: $" + newPizza.price);
    $("#current-order").show().text(`${newPizza.size} pizza with ${newPizza.toppings} for ${newPizza.delivery}.`);
    $("#btn-checkout").show();
  });

  $("#btn-checkout").click(function () {
    $(".confirmation").hide();
    $(".checkout").show();
  });

});