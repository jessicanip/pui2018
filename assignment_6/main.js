/* PUI-2018 Assignment 6
Jessica Nip
Section A  */

//test string vs number
var quantity;
var glazing;
var curCart = localStorage.getItem("cart");


function selectorTypeQuan(itemSelected) {
	if (typeof(itemSelected) === 'number') {
		//disable other buttons
		var button = document.getElementById("quan1");
		button.style.background='none';
		var button = document.getElementById("quan3");
		button.style.background='none';
		var button = document.getElementById("quan6");
		button.style.background='none';
		var button = document.getElementById("quan12");
		button.style.background='none';
		
		//change background color of selection
		quantity = itemSelected;
		localStorage.setItem("curQuantity",quantity);
		var baseStr = "quan";
		var num = itemSelected.toString();
		var fullStr = baseStr.concat(num);
		var button = document.getElementById(fullStr);
		button.style.background='#D2D2D2';
	}
}

function selectorTypeGlaze(itemSelected,num) {
		//disable other buttons
		var button = document.getElementById("glaze1");
		button.style.background='none';
		var button = document.getElementById("glaze2");
		button.style.background='none';
		var button = document.getElementById("glaze3");
		button.style.background='none';
		var button = document.getElementById("glaze4");
		button.style.background='none'
		
		//change background color of selection
		var baseStr = "glaze";
		var strnum = num.toString();
		var fullStr = baseStr.concat(num);
		var button = document.getElementById(fullStr);
		button.style.background='#D2D2D2';
		glazing = itemSelected;
		localStorage.setItem("curGlazing",glazing);
}


function addCart(flavor){
	var temp_quantity = localStorage.getItem("curQuantity");
	var temp_glazing = localStorage.getItem("curGlazing");
	localStorage.removeItem("curQuantity");
	localStorage.removeItem("curGlazing");
	//document.getElementsByClassName("glazing-button").innerHTML = localStorage.getItem("saveGlazing");
	
	console.log(temp_quantity);
	console.log(temp_glazing);
	var obj = new userChoice(flavor,temp_quantity,temp_glazing);
	var curCart = JSON.parse(localStorage.getItem("cart"));
	if ((curCart == null) || (curCart == undefined)){
		var cart_obj = makeCart(obj);
		localStorage.setItem("cart",JSON.stringify(cart_obj));
	}
	else {
		curCart.push(obj);
		localStorage.setItem("cart",JSON.stringify(curCart));
	}
	var button = document.getElementById("quan1");
	button.style.background='none';
	var button = document.getElementById("quan3");
	button.style.background='none';
	var button = document.getElementById("quan6");
	button.style.background='none';
	var button = document.getElementById("quan12");
	button.style.background='none';
	var button = document.getElementById("glaze1");
	button.style.background='none';
	var button = document.getElementById("glaze2");
	button.style.background='none';
	var button = document.getElementById("glaze3");
	button.style.background='none';
	var button = document.getElementById("glaze4");
	button.style.background='none'
}

//object creation
function userChoice(flavor, quantity, glazing) {
	this.flavor = flavor;
	this.quantity = quantity;
	this.glazing = glazing;
}

//make cart
function makeCart(item) {
	return [item];
}

var arr = JSON.parse(localStorage.getItem("cart"));

function addRows() {
	var table = document.getElementById("cartID");
	var arr = JSON.parse(localStorage.getItem("cart"));
	if (arr == undefined) {
		var row = table.insertRow(1);
		var cur_td = document.createElement('td');
		cur_td.setAttribute('id',"flavor");
		cur_td.innerHTML = "Your Cart is Empty!";
		row.appendChild(cur_td);
	}
	else {
		for (var i = 0; i < arr.length; i++) {
		var row = table.insertRow(i+1);
		var cur_td = document.createElement('td');
		cur_td.setAttribute('id',"flavor");
		cur_td.innerHTML = arr[i].flavor;
		row.appendChild(cur_td);
		cur_td = document.createElement('td');
		cur_td.setAttribute('id',"glazing");
		cur_td.innerHTML = arr[i].glazing;
		row.appendChild(cur_td);
		cur_td = document.createElement('td');
		cur_td.setAttribute('id',"price");
		cur_td.innerHTML = "$1.99";
		row.appendChild(cur_td);
		cur_td = document.createElement('td');
		cur_td.setAttribute('id',"quantity");
		cur_td.innerHTML = arr[i].quantity;
		row.appendChild(cur_td);
		}
	}
}

function addPrice() {
	var totalPrice = 0;
	var arr = JSON.parse(localStorage.getItem("cart"));
	if ((arr !== null)) {
		for (var i = 0; i < arr.length; i++) {
			totalPrice = totalPrice + Number(arr[i].quantity);
		}
	}

	var total = document.getElementById("totalPrice");
	totalPrice = totalPrice*1.99;
	var string = totalPrice.toString();
	total.innerHTML = string;
}


//create cart(updated number)
//add remove functionality

