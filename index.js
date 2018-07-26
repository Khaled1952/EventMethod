$(document).ready(function() {
	$('#box').click(function(){
		alert('You Clicked the box')
	});

	$("input").blur(function(){
		if ($(this).val()=="") {
			$(this).css('border','1px solid red');
			$('#box').text("Forgot to add text");
		}
	});
	$('input').keydown(function(){
		if($(this).val()!==""){
			$(this).css('border', '1px solid blue');
			$('#box').text("Thanks");
		}
	});

	$('#box').hover(function(){
		$(this).text("Hoverd in");
	},function(){
		$(this).text("Hoverd out");
	}
	);
});