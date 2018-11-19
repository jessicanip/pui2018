$("#toggleFunc").on("click", function() {
	$(".outer").toggle();
});

$("#toggleSmooth").on("click", function() {
	$(".outer").toggle("slow");
});

$("#slidingUp").on("click", function() {
	$(".outer").slideUp("slow");
});

$("#slidingDown").on("click", function() {
	$(".outer").slideDown("slow");
});

$("#slidingUpHeight").on("click", function() {
	/* You can customize your own animation with .animate() */
	$(".outer").animate({height: '20px'}, 'slow');
});

$("#slidingDownHeight").on("click", function() {
	/* You can customize your own animation with .animate() */
	$(".outer").animate({height: '300px'}, 'slow');
});

$("#slidingUpDownHeight").on("click", function() {
    /* You can chain animations such that they appear sequentially */
    $(".outer").animate({height: "20px"}, "slow")
               .animate({height: "50px"}, "slow");
});