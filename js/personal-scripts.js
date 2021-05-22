
$(".design").mouseover(function(){
	
	$(this).find(".design-text").css("display","flex");
	
});
$(".design").mouseleave(function(){
     
	$(this).find(".design-text").css("display","none");

	
});

$(".design-text").click(function(){
	$(this).css("display","none");
});







