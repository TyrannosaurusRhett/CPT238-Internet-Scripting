function area(){
	var area_calc = height * width;
	return area_calc;
}

var alphabet = '';
for (var i = 0; i != 26; ++i) alphabet += String.fromCharCode(i + 65);

$(document).ready(function(){
	$("#letters").addClass("Christmas");
	$("#calculation").addClass("Easter");
});