// toggle completed class when todo item is clicked
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//remove to do item when X is clicked
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13)  {
		var newVal = $(this).val();
		$(this).val("");
		console.log(newVal);
		$('ul').append("<li><span><i class='far fa-trash-alt'></i></span> " + newVal + "</li>");
		
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});
