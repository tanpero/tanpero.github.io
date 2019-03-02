window.onload = function() {
	
	var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var nowDate = year + "年" + month + "月" + day + "日";
    var span = document.getElementById("now");
	
	if (!span) {
		return;
	}
	
	span.innerHTML = nowDate;
}