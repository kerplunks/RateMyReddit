/*function myFunction() {
    var userSelection = prompt("Please enter what part of reddit you want to visit", "aww");
}
$.getJSON("http://www.reddit.com/r/" + userSelection + "/.json?jsonp=?", function(data) { 
    $.each(data.data.children, function(i,item){
		item.data.url = item.data.url + ".jpg";
		
		$("<img/>").attr("src", item.data.url).appendTo("#images");
		
    });
});