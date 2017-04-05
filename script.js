$(document).ready(function(){
	$("a").click(function() {
		var hrefClicked = $(this).attr("href");
		if(hrefClicked.match("^#")) {
			var viewRequested = hrefClicked.substring(hrefClicked.indexOf("#") + 1);
			$(".is-active").removeClass("is-active");
			$("#"+viewRequested).addClass("is-active");
			$('a[href="#'+viewRequested+'" class="mdl-layout__tab"]').addClass("is-active");
		}
	});
})
