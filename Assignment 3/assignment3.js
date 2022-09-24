$(document).ready(function(){
	$("#format_table").click(function(){
		$(".courses tr:first").addClass("header");
		$(".courses tr:even:not(tr:first)").addClass("altrow");
	});

	$("#add_img").click(function(){
		$("#myImage").append("<img src='images/jquery_cover.jpg'>");
	});

	$("#add_brdr").click(function(){
		$("div").addClass("enclose");
	});
});