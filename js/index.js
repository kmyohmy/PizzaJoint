var $ = function (id) {
    return window.document.getElementById(id);
};

customers = [];

//ORDER DATE

var toppingsSpace = $('toppings');
var toppings = toppingsSpace.getElementsByTagName('input')
var crustSpace = $('crust');
var crusts = crustSpace.getElementsByTagName('input');
var cheeseSelect = $('cheese');
var sauceSelect = $('sauce');
var Totaldiv = $('Totaldiv');
var deliveryForm = $('DeliveryAddress');
// FORM SHIT
var pickup = $('PickUpMethod');
var PickupMethod;
var pizzaSize = $('PizzaSizeChoice');  
var PizzaSizeChoice;


//MODAL LISTENERS/HANDLERS

const pickupModal = $("PickDelOrCarry");
const pizzaSizeModal = $("PickPizzaSize");
const details = $("details");
const Modal = $('modalWindow');
const MakeYaPizzaWindow = $('pizzaDetails');
const Billing = $('Billing');
const pizzaForm = $('pizzaForm');
const FormBillYa = $('BillYa');


    var currentCustInfo = {
        "name": '',
        "address":'',
        "addressTwo": '',
        "city": '',
        "zip": '',
        "email":'',
        "orderNumber": ''
    };


window.console.log(toppings);

var CurrentDeliveryType;
var CurrentPizzaSize;




//##############################################################################################################
//##############################################################################################################
                                //FUNCTION DECLARATIONS

//-------------------------------------------------------------------
                                //DELIVERY OR CARRYOUT SCREEN

//Get if it's Delivery or Carryout
    //If it's Delivery
function DelorCarryOut () {
    if (pickup.getElementsByTagName('input')[0].checked) {
        DeliveryType = pickup.getElementsByTagName('input')[0].value;

    } else if ((pickup.getElementsByTagName('input')[1].checked)) {
        DeliveryType = pickup.getElementsByTagName('input')[1].value;
    }
    // window.console.log(DeliveryType);
}

//-----------------------------------------------------------------
                                //PIZZA SIZE

function CheckPizzaSize () {
    //Get what size the pizza they want is 
    if (pizzaSize.getElementsByTagName('input')[0].checked) {
        // Small
        CurrentPizzaSize = pizzaSize.getElementsByTagName('input')[0].value;

    } else if (pizzaSize.getElementsByTagName('input')[1].checked) {
        // Medium
        CurrentPizzaSize = pizzaSize.getElementsByTagName('input')[1].value;

    } else if (pizzaSize.getElementsByTagName('input')[2].checked) {
        // Large
        CurrentPizzaSize = pizzaSize.getElementsByTagName('input')[2].value;
    }
}
//-----------------------------------------------------------------
                    // CHANGE THE COLOR OF THE INPUT FIELD IF CORRECT
function changeToGreen(e){
    //    var that = e.target.value;
    //     switch (that.name){
    //         case ''

    //     }

}
                    //GET THE DELIVERY ADDRESS VALUES

function formDeliveryValues () {
    var position = function (pos) {
        return deliveryForm.getElementsByTagName('input')[pos];
    };

    var name, address, addressTwo, city, state, zip, email;

    name = position(0).value;
    address = position(1).value;
    addressTwo = position(2).value;
    city = position(3).value;
    state = position(4).value;
    zip =  position(5).value;
    email = position(6).value;
    

    //ADD INFO TO SOMEWHERE
    window.console.log(name + " " + address +  " " + city +  " " + state + " " +  zip + " " +  email);

    currentCustInfo.name = name;
    currentCustInfo.address = address;
    currentCustInfo.addressTwo = addressTwo;
    currentCustInfo.city = city;
    currentCustInfo.state = state;
    currentCustInfo.zip = zip;
    currentCustInfo.email= email;


    customers.push(currentCustInfo);
    console.log(currentCustInfo);
    console.log(customers);
}
var TheCurrentPizza,PizzaToMake;
//-----------------------------------------------------------------
                                    //GET THE PIZZA INFO
function pizzaStyle () {
    var currentCrust, cheese, sauce,toppingsAdded, i;
    //CHECK FOR CRUST TYPE
    for (i = 0; i < crusts.length; i++) {
        if (crusts[i].checked) {
            currentCrust = crusts[i].value;
        
        }
        
    }
    window.console.log(currentCrust);
    
    cheese = cheeseSelect.value;
    
    sauce = sauceSelect.value;
    
    toppingsAdded = [];
    
    //COULD USE ARRAY.MAP

        //Check for toppings
        for( i = 0; i < toppings.length; i++){
            //Check if toppings is true
            if (toppings[i].checked) {
                toppingsAdded.push(toppings[i].value);
            }
        }
        
        TheCurrentPizza =  currentCrust + " " 
        + toppingsAdded.join() + "pizza with "
        + sauce + " sauce and  "
        + cheese + " cheese ";

        PizzaToMake = ( "The current pizza to make is a " + 
        currentCrust + " " 
        + toppingsAdded.join() + " pizza with "
        + sauce + " sauce and  "
        + cheese + " cheese "
    );
    
    window.console.log(toppingsAdded);
    window.console.log(TheCurrentPizza);
    
}


//-----------------------------------------------------------------
            //Open up the toppings and cheese windows
function open (){
    window.document.getElementById('cheeses').style.display = "inline";
    window.document.getElementById('sauces').style.display = "inline";
    window.document.getElementById('toppings').style.display = "inline";
}


//Get The Card Info 



//############################################################################################################## 



//##############################################################################################################
//##############################################################################################################



//FORM SHIT


var PlaceOrder = window.document.getElementById("PlaceOrder");
const housingType = $('housingType');

    var total = 0.00;



//##############################################################################################################
//##############################################################################################################
                            //PIZZA CUSTOMIZATIONS & PRICE ADJUSTMENTS

$('toppings').addEventListener('click', function(e){
    that = e.target;
    if(that.checked){
        total+=.99;
        window.console.log(total);
    } 
    else {
        total-=.99
        window.console.log(total);
    }
    Totaldiv.innerHTML = total.toFixed(2);
    
});


$('crust').addEventListener('click', function(e){
    var TheCurrentCrust = "HandTossed";
    that = e.target;
    thatCont = that.parentElement.id;

    if(thatCont ==="HandTossed"){
        TheCurrentCrust = "HandTossed";
    } else if (thatCont === "Thin-Crust") { 
        TheCurrentCrust = "Thin-Crust";
    } else if (thatCont === "NewYorkStyle"){
        TheCurrentCrust = "NewYorkStyle";
    } else if (thatCont === "Gluten-Free"){
        TheCurrentCrust = "Gluten-Free";
    }
    window.console.log(total);
    Totaldiv.innerHTML = total.toFixed(2);



    if(TheCurrentCrust === "HandTossed"){
        if (CurrentPizzaSize === "Small"){
            total+=9.99;
            open ();
        } else if (CurrentPizzaSize ==="Medium"){
            total+=12.99;
            open ();
        } else if(CurrentPizzaSize === "Large"){
            total+=14.99;
            open ();
        }
    } else if (TheCurrentCrust === "Thin-Crust") { 
        
        if (CurrentPizzaSize === "Small"){
            // NOT AVAILABLE
        } else if (CurrentPizzaSize ==="Medium"){
            total+=11.99;
            open ();
        } else if(CurrentPizzaSize === "Large"){
            total+=13.99;
            open ();
            
        }
    } else if (TheCurrentCrust === "NewYorkStyle"){
        if (CurrentPizzaSize === "Small"){
            // NOT AVAILABLE
        } else if (CurrentPizzaSize ==="Medium"){
            // NOT AVAILABLE
        } else if(CurrentPizzaSize === "Large"){
            total+=16.99;
            open ();
        }
    } else if (TheCurrentCrust === "Gluten-Free"){
        if (CurrentPizzaSize === "Small"){
            total+=10.99;
            open ();
        } else if (CurrentPizzaSize ==="Medium"){

            //// NOT AVAILABLE
        } else if(CurrentPizzaSize === "Large"){
            // NOT AVAILABLE
            
        }
    }

    var crustArray = crustSpace.getElementsByTagName('label');
    Array.prototype.map.call( crustArray, (crust) => {
        
            crust.style.display = "none";
        
        
    })
    
});


$('cheese').addEventListener('change', function(e){
    that = $('cheese').value;
    if(that === "extra"){
        total+= 2.99;
        
    } else if(that === "double"){
        total+=3.99;
        
    }
    window.console.log(that);
    
    window.console.log(total);
    Totaldiv.innerHTML = total.toFixed(2);
    $('cheese').disabled = true;
});

$('sauce').addEventListener('change', function(e){
    that = $('sauce').value;

    if(that === "hearty"){
        total+=0.99;
        
    } else if(that === "bbq"){
        total+=1.99;
        
    }

    window.console.log(total);
    Totaldiv.innerHTML = total.toFixed(2);
    $('sauce').disabled = true;
});

//##############################################################################################################
//##############################################################################################################
                        //MODAL CHANGE SCREEN EVENT LISTENERS

PlaceOrder.addEventListener('click',function (){
    Modal.classList.remove('d-none');
    PlaceOrder.classList.add('d-none');
});


pickup.addEventListener('change', function (e) {
    setTimeout( function(){
    e.preventDefault();
    DelorCarryOut();
    window.console.log("moving");
    // PickupMethod = pickup.value;
    pickupModal.classList.add("d-none");
    pizzaSizeModal.classList.remove("d-none");
    }
    , 2000);
});



pizzaSize.addEventListener('change', function (e){
        e.preventDefault();
        setTimeout( function(){
        CheckPizzaSize();
        window.console.log(pizzaSize);
        // PizzaSizeChoice = pizzaSize.value;
        pickupModal.classList.add("d-none");
        pizzaSizeModal.classList.add("d-none");
        //MAKE MODAL ACCOMMODATE THE SIZE OF THE DELIVERY FORM
        Modal.style.width = "100%";
        Modal.style.height = "100%";
        Modal.style.left = "0%";
        Modal.style.top = "0%";
        //MAKE DELIVERY FORM AVAILABLE
        details.classList.remove("d-none");
        Modal.style.overflowY = 'scroll';
        Modal.style.padding = "2%";
        }
        , 2000);
});

window.document.getElementById('details').addEventListener('change', function (e){
    console.log('change');
    var zipvalidated = false, emailValidated = false,phoneValidated = false;
    
    if(zipvalidated && emailValidated && phoneValidated){
        window.document.getElementById('btnDetails').style.display = 'block';
    }
    
});

deliveryForm.addEventListener("submit", function (e) {
        e.preventDefault();
        formDeliveryValues();
            // PizzaSizeChoice = pizzaSize.value;
        details.classList.add("d-none");
            //MAKE PIZZA FORM AVAILABLE
        MakeYaPizzaWindow.classList.remove("d-none");

        var PizzaSizeOutput = $("pizzaSizeOutput");
        PizzaSizeOutput.innerHTML = CurrentPizzaSize;
});


pizzaForm.addEventListener("submit", function (e) {
        e.preventDefault();
        pizzaStyle();
        // PizzaSizeChoice = pizzaSize.value;
        MakeYaPizzaWindow.classList.add("d-none");
        Billing.classList.remove("d-none");
});

FormBillYa.addEventListener("submit", function (e) {
        e.preventDefault();
        Billing.classList.add("d-none");
        //MAKE MODAL ACCOMMODATE THE SIZE OF THE DELIVERY FORM
        Modal.style.width = "80%";
        Modal.style.height = "80%";
        Modal.style.left = "10%";
        Modal.style.top = "10%";
        $('thanks').classList.remove("d-none");
      $('msgThanks').innerHTML = (
          `${currentCustInfo.name},`);
   $('readyWhen').innerHTML = TheCurrentPizza; 
});


$("closeModal").addEventListener('click', function (e){
        // e.preventDefault();
        Modal.classList.add('d-none');
        document.location.reload();
});








//##############################################################################################################
//##############################################################################################################
                                // CREDIT CARD VALIDATION & CARD FORM DETAILS

    function CheckLuhn (CardNumber) { 

        var number =  CardNumber.split("").reverse().join("");
        var i;
        var fullNumber = 0;
    
        for(i = 0; i < number.length; i++) {
            var luhnNum;    
            if(i % 2){
                luhnNum = number[i] * 2;
    
                if(luhnNum > 9){
                    luhnNum = String(luhnNum);
                    intOne = parseInt(luhnNum.charAt(0), 10);
                    intTwo = parseInt(luhnNum.charAt(1), 10);
                    luhnNum =  intOne + intTwo;
                    window.console.log(luhnNum);
                    fullNumber += luhnNum;
                } else {
                    fullNumber += luhnNum;
                    window.console.log(luhnNum);
                
                }
            } else {
                luhnNum = number[i];
                fullNumber += parseInt(luhnNum,10);
                }
        }
    
        window.console.log(" The Sum is " + fullNumber); 
    
        //Check and see if it's actually divisible
        if (fullNumber % 10 === 0){
            
            //Replace is-invalid class if it is there NEEDS TO BE ADJUSTED
    
        $('cardNumberInput').classList.remove('is-invalid');
            //Make Input box green
        $('cardNumberInput').classList.add('is-valid');;
    
        window.console.log("This card is valid");
        } else {
            //Make input red
        //Put in a span
        $('cardNumberInput').classList.add('is-invalid');
            window.console.log("This card is not valid");
    
        }
    
    }
    
    var CardNumber = window.document.getElementById("cardNumberInput").value; /*IRRELEVANT*/
    
    var CardNumInput = window.document.getElementById("cardNumberInput");
    
    CardNumInput.addEventListener('keyup', function (e) {
        // console.log(e.key + " Value " + CardNumInput.value);
        // console.log(" Value Length " + CardNumInput.value.length);
        var max = document.createAttribute('maxlength');
        // var VisaCardRegex = /[4]/g, MastercardRegEx;
        
        //CHECK FOR THE CARD NUMBER
        
        if( CardNumInput.value.charAt(0) === "4") {
        
                console.log("Visa");
                CardNumInput.maxlength = '16';
                $('visaLogo').src = "img/visacolor.png";
                if( CardNumInput.value.length === 13 || CardNumInput.value.length === 16 ) {
                    CheckLuhn(CardNumInput.value);
                    
                }
            } else if (CardNumInput.value.charAt(0) === "5" ){
                console.log("MAsterCard");
    
                CardNumInput.maxlength = '16';
                $('mastercardLogo').src ="img/mastercardcolor.png";
                if(CardNumInput.value.length === 16) {
                    CheckLuhn(CardNumInput.value);
                    //MASTERCARD
                
                }
    
                
            } else if (CardNumInput.value.charAt(0)=== "3" ) {
                console.log("Amex");
                CardNumInput.maxlength = '15';
                $('amexLogo').src= "/img/amexcolor.png";
                if(CardNumInput.value.length === 15) {
                    CheckLuhn(CardNumInput.value);
                    //AMERICAN EXPRESS
                }
    
            } else if (e.keyCode === 8 && CardNumInput.value.length === 0){
                    $('visaLogo').src = "./img/visablkwhite2.png";
                    $('mastercardLogo').src= "./img/visablkwhite2.png";
                    $('amexLogo').src = "./img/visablkwhite2.png";
                    max.value = 16;
                    CardNumInput.setAttributeNode(max);
    
            }
            
    });
    
    $("insertCustInfo").addEventListener('click', function () {
        window.console.log(currentCustInfo.name)
        $('BillName').value = currentCustInfo.name;
        $('BillAddress').value = currentCustInfo.address;
        $('BillAddressTwo').value = currentCustInfo.addressTwo;
        $('BillZip').value = currentCustInfo.zip;
    
    });
    
                                

//##############################################################################################################
//##############################################################################################################
                                    //PIZZA INFO






//##############################################################################################################
//##############################################################################################################
                                    //Thank You 
function generateOrderNumber(){
    var newOrderNumber;
    
    
}
                                        
                                        
//##############################################################################################################
//##############################################################################################################
                                    //PIZZA FOLLOW NAV
const triggers = window.document.querySelectorAll('.cool > li');
const background = window.document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter () {
    this.classList.add('trigger-enter');
    setTimeout( () => {
        if(this.classList.contains('trigger-enter')){
        this.classList.add('trigger-enter-active');
        }
    }, 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');

    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top:dropdownCoords.top - navCoords.top,
        left:dropdownCoords.left - navCoords.left


    };
    background.style.width = coords.width  + 'px';
    background.style.height = coords.height + 'px';
    background.style.transform = 'translate(' + coords.left+'px,' + coords.top+'px)';
}

function handleleave () {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
    
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));   
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleleave));    


//##############################################################################################################
//##############################################################################################################
                                    //REGEX VALIDATION

// function detailsCheck () {
//     var regAddress,regCity,regState, regZip,regEmail;    

// function validity () {
// //     window.console.log(deliveryForm.childElementCount);
// //     window.console.log(deliveryForm.children[0].getElementsByTagName('input')[0]);
// // var del = function (number){
// //     DeliveryForm.children[number].getElementsByTagName('input')[0];
// // };
//     var position = function (pos) {
//         return deliveryForm.getElementsByTagName('input')[pos];
//     };

//     var name, address, addressTwo, city, state, zip, email;

//     name = position(0).value;
//     address = position(1).value;
//     addressTwo = position(2).value;
//     city = position(3).value;
//     state = position(4).value;
//     zip =  position(5).value;
//     email = position(6).value;

// // ----------------------------------------------------
// var post = function (pos) {
//     return Billing.getElementsByTagName('input')[pos];
// };
// var cvv, ex, ccNum;
//     ccNum = post(5);
//     cvv = post(6);
//     ex = post(7);
// // }
// //Visa
// \d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d
// \d\d\d\d\d\d\d\d\d\d\d\d\d


// //MasterCard
// \d\d\d\d\d\d\d\d\d\d\d\d\d

// //Amex
// \d\d\d\d\d\d\d\d\d\d\d\d\d\d\d


// validity();


//##############################################################################################################
//##############################################################################################################
                                     //CRUSTS FUNCTIONS
function ifChecked(e) {
    // window.console.log(crusts);
    var i;
    // window.console.log(crusts[1].parentElement.id);
    // // window.console.log(tagname);

if (false ===e.target){

    for (i=0; i < crusts.length; i++){
        var tagname = crusts[i].parentElement.id;
        window.console.log(crusts[i]);
        if(crusts[i].checked){
        window.console.log('Something is checked');
        window.console.log(crusts[i].parentElement.id);
                if(tagname ==="HandTossed"){
                    if (CurrentPizzaSize === "Small"){
                        total-=9.99;
                    } else if (CurrentPizzaSize ==="Medium"){
                        total-=12.99;
                    } else if(CurrentPizzaSize === "Large"){
                        total-=14.99;
                    }
                } else if (tagname === "Thin-Crust") { 
                    
                    if (CurrentPizzaSize === "Small"){
                        // NOT AVAILABLE
                    } else if (CurrentPizzaSize ==="Medium"){
                        total-=11.99;
                    } else if(CurrentPizzaSize === "Large"){
                        total-=13.99;
                        
                    }
                } else if (tagname === "NewYorkStyle"){
                    if (CurrentPizzaSize === "Small"){
                        // NOT AVAILABLE
                    } else if (CurrentPizzaSize ==="Medium"){
                        // NOT AVAILABLE
                    } else if(CurrentPizzaSize === "Large"){
                        total-=16.99;
                        
                    }
                } else if (tagname === "Gluten-Free"){
                    if (CurrentPizzaSize === "Small"){
                        total-=10.99;
                    } else if (CurrentPizzaSize ==="Medium"){
            
                        //// NOT AVAILABLE
                    } else if(CurrentPizzaSize === "Large"){
                        // NOT AVAILABLE
                        
                    }
                }
                return;
            }
        }

    //IF NONE HAVE BEEN CHECKED
    }
}


//##############################################################################################################
                                    //ANIMATIONS
$('PickUpMethod').addEventListener('click', function () {
    console.log("item clicked");
    if($("delradio").checked){
        console.log($("delradio").nextElementSibling);
      
        $("delradio").nextElementSibling.src = "img/Deliver.gif";
    } else if ($("carryradio").checked){
        $("carryradio").nextElementSibling.src = "img/carryout.gif";

    }
});

$('PickPizzaSize').addEventListener('click', function(){
    if ($('pizzasmall').checked){
        $('pizzasmall').nextElementSibling.src = "img/pizzarotate.gif";
    } else if ($('pizzaMedium').checked){
        $('pizzaMedium').nextElementSibling.src = "img/pizzarotate.gif";

    } else if ($('pizzaLarge').checked){
        $('pizzaLarge').nextElementSibling.src = "img/pizzarotate.gif";
    
    }

});

//##############################################################################################################
//##############################################################################################################
                                    //DETAILS PAGE
            //LISTEN FOR THE USER'S DECISIONS SO WE CAN GRAB THOSE VALUES

housingType.addEventListener('change', function(){
    window.console.log(housingType.value);
    
    var otherinput = window.document.getElementsByClassName('otherInput')[0];
    if(housingType.value === "other"){
        window.console.log(otherinput);
        otherinput.classList.remove('d-none');
    } else {
        otherinput.classList.add('d-none');
    }

});

// toppings.addEventListener('click', order.toppingsAdded());


//##############################################################################################################
//##############################################################################################################
                                    // ON LOAD
window.addEventListener('load', function (){
    window.console.log('loaded');



});
window.document.getElementById('zipCode').addEventListener('keypress',function(e){
    var that = /^\d{5}$/;
    if (that.test(e.target.value)){
        this.classList.remove('is-invalid');
        zipvalidated = true;
    }
});
window.document.getElementById('thisEmail').addEventListener('keypress',function(e){
   var that = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (that.test(e.target.value)){
        this.classList.remove('is-invalid');
        emailValidated =  true;
    }
});

window.document.getElementById('PhoneNumber').addEventListener('keyup', function(e){
    var that = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if (that.test(e.target.value) ){
        this.classList.remove('is-invalid');
        phoneValidated =true;
    }
});