var cleanPage = function() {
	setTimeout(function() {
		var defaultFooter = document.getElementsByClassName("site-footer")[0];
		defaultFooter.style.display = "none";
	});
}