let banknum = 1000;
let num = 0;
let banksub = 0;
let nsme = sessionStorage.getItem("login_name");//getting session from login page//
let items = [];
let drinks = [];
let dprice = [];
let price = [];
let tax = 0;
let x = 0;
let xi = 0;
let audio = document.getElementById("sound");
let audio1 = document.getElementById("sound1");
let audio2 = document.getElementById("sound2");
//******************************************************************************************//
//Session creation for relationship between homepage and login page//


//********************************************************************************8********//
function loginclick()
{	
	sessionStorage.setItem("user", nsme.toString()); //setting a local session for the homepage//
	name = sessionStorage.getItem("user"); //getting that session//
	document.getElementById("naMe").innerHTML = name ;//writing it to the designated area//

}

function BC() {
  audio.play();
  items.push("Banana Chips"); //sending item name to array//
  tax = 100 * 0.025;
  fprice = 100 + tax;
  price.push(fprice); //ssending specfic price to arrayy//
}

function LO() {
  audio.play();
  items.push("Lays|Original"); //sending item name to array//
  tax = 120 * 0.025;
  fprice = 120 + tax;
  price.push(fprice);
}

function PR() {
  audio.play();
  items.push("Pringles|Original"); //sending item name to array//
  tax = 200 * 0.025;
  fprice = 200 + tax;
  price.push(fprice);
}

function CS() {
  audio.play();
  items.push("Cheese Sticks"); //sending item name to array//
  tax = 80 * 0.025;
  fprice = 80 + tax;
  price.push(fprice);
}

function RB() {
  audio.play();
  items.push("Raisin Bun"); //sending item name to array//
  tax = 110 * 0.025;
  fprice = 110 + tax;
  price.push(fprice);
}

function SB() {
  audio.play();
  items.push("Shirley's Buiscet"); //sending item name to array//
  tax = 60 * 0.025;
  fprice = 60 + tax;
  price.push(fprice);
}

function RH() {
  audio.play();
  items.push("Red Hot"); //sending item name to array//
  tax = 60 * 0.025;
  fprice = 60 + tax;
  price.push(fprice);
}

function D() {
  audio.play();
  items.push("Doritos|Original"); //sending item name to array//
  tax = 60 * 0.025;
  fprice = 60 + tax;
  price.push(fprice);
}

function R() {
  audio.play();
  items.push("Ruffles|Original"); //sending item name to array//
  tax = 60 * 0.025;
  fprice = 60 + tax;
  price.push(fprice);
}

//*****************************************************************//

function W() {
  audio1.play();
  drinks.push("Water"); //sending drink name to array//
  tax = 50 * 0.025;
  fprice = 50 + tax;
  dprice.push(fprice);
}

function P() {
  audio1.play();
  drinks.push("Pepsi"); //sending drink name to array//
  tax = 100 * 0.025;
  fprice = 100 + tax;
  dprice.push(fprice);
}

function CW() {
  audio1.play();
  drinks.push("Cran Water"); //sending drink name to array//
  tax = 180 * 0.025;
  fprice = 180 + tax;
  dprice.push(fprice);
}

function OJ() {
  audio1.play();
  drinks.push("Orange Juice"); //sending drink name to array//
  tax = 150 * 0.025;
  fprice = 150 + tax;
  dprice.push(fprice);
}

function PP() {
  audio1.play();
  drinks.push("Peanut Punch"); //sending drink name to array//
  tax = 120 * 0.025;
  fprice = 120 + tax;
  dprice.push(fprice);
}

function FP() {
  audio1.play();
  drinks.push("Fruit Punch"); //sending drink name to array//
  tax = 110 * 0.025;
  fprice = 110 + tax;
  dprice.push(fprice);
}

function CM() {
  audio1.play();
  drinks.push("Cow's Milk"); //sending drink name to array//
  tax = 103 * 0.025;
  fprice = 130 + tax;
  dprice.push(fprice);
}

function C() {
  audio1.play();
  drinks.push("Coca Cola"); //sending drink name to array//
  tax = 103 * 0.025;
  fprice = 130 + tax;
  dprice.push(fprice);
}

function S() {
  audio1.play();
  drinks.push("Sprite"); //sending drink name to array//
  tax = 90 * 0.025;
  fprice = 90 + tax;
  dprice.push(fprice);
}

function cart() {
  window.location.href = "#pg3";
  let listHTML = "";
  //CREATING EACH DRINKS INFO-PAGE IN CHECKOUT//
  for (let i = 0; i < price.length; i++) {
    //creating and incrememnting, incrament 'i'//
    listHTML +=
      ' <br /><div id="item-' +
      i +
      '"><label>' +
      items[i] +
      "</label><br/>" +
      "Price: $" +
      price[i] +
      ' <br /><span> <button class="ui-btn" onclick="remove();">Remove</button></span></div><br /> ';
  }
  let totalHTML = 0;
  if (price.length > 0) {
    totalHTML = price.concat(dprice).reduce((a, b) => a + b);
  } else {
    totalHTML = 0;
  }
  document.getElementById("item").innerHTML = listHTML;
  document.getElementById("total").innerHTML = "Total: " + totalHTML;
}

function cart1() {
  let listHTML2 = "";
  //CREATING EACH DRINKS INFO-PAGE IN CHECKOUT//
  for (let i = 0; i < drinks.length; i++) {
    //creating and incrememnting, incrament 'i'//
    listHTML2 +=
      ' <br /><div id="item-' +
      i +
      'c"><label>' +
      drinks[i] +
      "</label><br/>" +
      "Price: $" +
      dprice[i] +
      ' <br /><span> <button class="ui-btn" onclick="remove1();">Remove</button></span></div><br /> ';
  }

  let totalHTML = 0; //creating total variable//
  if (price.length > 0) {
    //checking if there is any items in item price array//
    totalHTML = price.concat(dprice).reduce((a, b) => a + b);
  } else {
    totalHTML = 0;
  }
  document.getElementById("drink").innerHTML = listHTML2; //placing info in drink item space//
  document.getElementById("total").innerHTML = "Total: " + totalHTML; //placing total in designated space//
}
//REMOVE BUTTON FOR SNACKS//
function remove() {
  if (x < x + 1) {
    console.log(x);
    //CLEARING THE CART//
    let div = document.getElementById("item-" + x.toString()); //finding item space by id//
    div.innerHTML = "<div></div>"; //clearing item space//

    //REMOVING ITEM FROM ARRAY//
    items.splice(x, 1); //remove element from item array//
    price.splice(x, 1); //remove element from price array//
    let totalHTML = 0; //declare variable//
    console.log(price);
    //CHANGING TOTAL AMOUNT//
    if (price.length > 0 || dprice.length > 0) {
      //condtion to check if there is anything in either array//
      totalHTML = price.concat(dprice).reduce((a, b) => a + b); //adding the prices for total amount//
    } else {
      totalHTML = 0; //if there is nothing total amount must equal zero; just precation for empty error with the reduce function//
    }
    console.log(totalHTML); //log for developer view//
    document.getElementById("total").innerHTML = "Total: " + totalHTML; //send it to the designated area in the HTML//
    //RESET INCREMENT//
    x += 1;
  }
}

function remove1() {
  if (xi < xi + 1) {
    let div = document.getElementById("item-" + xi.toString() + "c");
    div.textContent = "";
    drinks.splice(xi, 1);
    dprice.splice(xi, 1);
    if (dprice.length > 0 || price.length > 0) {
      totalHTML = price.concat(dprice).reduce((a, b) => a + b);
    } else {
      totalHTML = 0;
    }
    document.getElementById("total").innerHTML = "Total: " + totalHTML;
    xi += 1;
  }
}
//For back Button//
function reset() {
  x = 0;
  xi = 0;
}

//For checkout button//
function checkout() 
{
    audio2.play();
    
    var character = new Array("2022");
    var charstring ="";
    let i = 0, n = 999
    while(i < n)
    {
        charstring += character + Math.floor(Math.random()* 1000000)
        document.getElementById("account-number-label").innerHTML = "Recipt#: " + charstring;
        break
    }
    
    i += 1

    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
    if (price.length > 0 || dprice.length > 0) {
      //condtion to check if there is anything in either array//
      totalHTML = price.concat(dprice).reduce((a, b) => a + b); //adding the prices for total amount//
    } else {
      totalHTML = 0; //if there is nothing total amount must equal zero; just precaution for empty error with the reduce function//
    }
    console.log(totalHTML); //log for developer view//
    document.getElementById("popup-total").innerHTML = "Total: " + totalHTML; //send it to the designated area in the HTML//
    

    document.getElementById("bank-num").innerHTML = "Bank amount: " + banknum;
    
     banksub = banknum - totalHTML
    document.getElementById("banksub").innerHTML = "Amount after purchase: " + banksub;
    
	num = banksub;
  items = [];
  drinks = [];
  dprice = [];
  price = [];
  tax = 0;
  x = 0;
  xi = 0;
  

  }
  
  function closePopup() 
  {
    
    popup.classList.remove("open-popup");
    window.location.href = "#pg2";
	if ( num< 0) {
		alert("Insufficient Funds");
	} else{
		alert("Purchase Successful");
		banknum = banksub;
	}
  }

function back(){
window.location.href = "homepage.html";
}



