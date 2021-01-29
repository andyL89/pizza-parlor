function Pizza(size, toppings, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}



//User Interface Logic
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const inputtedSize = $("input:checkbox[name=size]:checked").val();
    const inputtedToppings = $("input:checkbox[name=toppings]:checked").val();
    const inputtedDelivery = $("input:checkbox[name=delivery]:checked").val();
    let newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedDelivery);
    let orderPrice = order(newPizza);
    $("#total").show().text("Total: " + orderPrice);
  })
});