$(document).ready(function(){

	$("#myth").click(function(event){
		event.preventDefault();
		$("#mythPic").hide("fast", function(){
			$("#mythPic").show("slow");
		});
	});

	$("#lawful").click(function(event){
		event.preventDefault();
		$("#lawfulPic").slideToggle("slow");
	});

	$("#neutral").click(function(event){
		event.preventDefault();
		$("#neutralPic").fadeToggle(1500);
	});

	$("#chaotic").click(function(){
		$("#chaoticPic").toggle(2000);
	});

	$("#pgTitle").animate({"height": "30px", "font-size": "+=20px"}, 400);
});