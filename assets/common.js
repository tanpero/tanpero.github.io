var cleanPage = function() {
	var defaultFooter = document.getElementsByClassName("site-footer")[0];
	defaultFooter.parentNode.removeChild(defaultFooter);
}