
// MODAL RELATED
//DEV PURPOSES ONLY

PlaceOrder.addEventListener('click', function() {
    var Modal = $('modalWindow');
    Modal.style.display = "block";
    // var newOrder = new order();

});

function NextModal () {
    window.console.log("moving");
  

    PickupMethod = pickup.value;
    pickupModal.style.left = '-100%';
    pizzaSizeModal.style.left = '0%';

}
function PullUPDetails () {
    // PizzaSizeChoice = pizzaSize.value;
    pickupModal.style.left = '-100%';
    pizzaSizeModal.style.display = 'none';
    //MAKE MODAL ACCOMMODATE THE SIZE OF THE DELIVERY FORM
    Modal.style.width = "100%";
    Modal.style.height = "100%";
    Modal.style.left = "0%";
    Modal.style.top = "0%";
    //MAKE DELIVERY FORM AVAILABLE
    details.style.display = "block";
    

}
function MakeYaPizza () {
    
     // PizzaSizeChoice = pizzaSize.value;
     details.style.display = 'none';
     //MAKE PIZZA FORM AVAILABLE
    MakeYaPizzaWindow.style.display = "block";
   
     
 
 }


function CreditCardDetails () {
    MakeYaPizzaWindow.style.display = "none"
    Billing.style.display = "block";
}

function ThankYou () {
    Billing.style.display = 'none';
      //MAKE MODAL ACCOMMODATE THE SIZE OF THE DELIVERY FORM
      Modal.style.width = "80%";
      Modal.style.height = "80%";
      Modal.style.left = "10%";
      Modal.style.top = "10%";
      $('thanks').style.display = "block";
    //   $('msgThanks').innerHTML = (
    //       `${name}, Thank you for your order!`
    //     ) 
    //   $('readywhen').innerHTML = `Your ${pizza} will be ready in 10-15 minutes!`;
    }