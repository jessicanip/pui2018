// TODO (Step 2): fill in code creating products objects here
var products = {
    "cinnamonBuns": [
        {
            "name": "Cinnamon Rolls",
            "price": "$2.00",
            "img": "img/birthday-cake.jpg",
            "id": 0
        },
        {
            "name": "Maple Walnut Cinnamon Rolls",
            "price": "$2.00",
            "img": "img/maple-walnut.jpg",
            "id": 1
        },
        {
            "name": "Lavendar Cinnamon Rolls",
            "price": "$2.00",
            "img": "img/lavender.png",
            "id": 2
        }
    ]
}

$(document).ready(function(){
    // TODO (Step 4): fill in code for changing selection-template here

    // get the HTML template using jQuery
	var source = $("#selection-template").html();
	// compile the template into a function
	var template = Handlebars.compile(source);
	// create new HTML using our data
	var newHTML = template(products);
	// add the new HTML to the page
	$("#product-selection-container").append(newHTML);

    // TODO (Step 7): add function call for 1st update to detail-template


    // TODO: (Step 8): add code below for changing product details on click


});

// TODO (Step 6): fill in function for updating detail-template based on id
function updateProductDetail(id) {


}
