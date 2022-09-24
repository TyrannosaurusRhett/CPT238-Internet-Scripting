$(document).ready(function(){
	$("#area1").offset({left:200, top: 200})
	$("#area2").offset({left:350, top: 225});
	$("#area3").offset({left:305, top: 295});
	$("#area4").offset({left:730, top: 335});
	$("#area5").offset({left:730, top: 365});
	$("#area6").offset({left:730, top: 485});

	$("#moveUp").css({"font-size": "16px", "color": "white", 
		"background-color": "blue"});
	$("#moveDown").css({"font-size": "16px", "color": "white", 
		"background-color": "blue"});
	$("#changeText").css({"font-size": "16px", "color": "white", 
		"background-color": "blue"});

	$("#moveDown").click(function(){
		$("#area3").scrollTop(+50);
	});

	$("#moveUp").click(function(){
		$("#area3").scrollTop(-50);
	});

	$("#changeText").click(function(){
		$("#area3").toggleClass("newFont");

	});
});