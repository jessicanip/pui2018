/* PUI-2018 Assignment 6
Jessica Nip
Section A  */

var quantity;
var glazing;
var curCart = localStorage.getItem("cart");

//onclick quantity buttons
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

//onclick glazing buttons
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

//onclick Add To Cart
function addCart(flavor){
	var temp_quantity = localStorage.getItem("curQuantity");
	var temp_glazing = localStorage.getItem("curGlazing");
	localStorage.removeItem("curQuantity");
	localStorage.removeItem("curGlazing");
	
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

	//clear background colors for all buttons
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

	//onclick, update cart count live
	cartName();
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
	else if (arr.length == 0) {
		var row = table.insertRow(1);
		var cur_td = document.createElement('td');
		cur_td.setAttribute('id',"flavor");
		cur_td.innerHTML = "Your Cart is Empty!";
		row.appendChild(cur_td);
	}
	else {
		for (var i = 0; i < arr.length; i++) {
			var row = table.insertRow(i+1);
			row.setAttribute('id',"item"+(i+1));
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

			//create remove button
			removeButton = document.createElement('button');
			removeButton.setAttribute('class', 'glazing-button');
			removeButton.setAttribute('onclick', 'removeItem(' + i + ')');
			removeButton.innerHTML = "X";
			row.appendChild(removeButton);

		}
	}
}

//remove row upon X onclick
function removeItem(index) {
	var arr = JSON.parse(localStorage.getItem("cart"));
	arr.splice(index,1);
	localStorage.setItem("cart",JSON.stringify(arr));

	var table = document.getElementById("cartID");
	var arr = JSON.parse(localStorage.getItem("cart"));

	//reload page after item removal
	window.location.reload();
}


//update cart count in header
function cartName() {
	var cartQuan = 0;
	//retrieve cart count
	var arr = JSON.parse(localStorage.getItem("cart"));
	if ((arr !== null)) {
		for (var i = 0; i < arr.length; i++) {
			cartQuan = cartQuan + Number(arr[i].quantity);
		}
	}
	//print for HTML
	var cartName = document.getElementById("cartName");
	cartName.innerHTML = "cart" + " (" + cartQuan.toString() + ")";
}

//calculate total price of items
function addPrice() {
	var totalPrice = 0;
	//retrieve cart count
	var arr = JSON.parse(localStorage.getItem("cart"));
	if ((arr !== null)) {
		for (var i = 0; i < arr.length; i++) {
			totalPrice = totalPrice + Number(arr[i].quantity);
		}
	}
	//calculate total price (cart count*1.99)
	var total = document.getElementById("totalPrice");
	totalPrice = totalPrice*1.99;
	var string = totalPrice.toString();
	total.innerHTML = string;
}

//add remove functionality

