var showList = function(list, table) {	
	for (var i = 0, length = list.length; i < length; i += 1) {
		var section = document.createElement("p");
		var item = list[i];
		var file = item + ".html";
		var bookName = "《" + item + "》";
		
		section.innerHTML = 
			"<p><a href=\"/reservator-project/light/" + file + "\">" + bookName + "</a></p>" +
			"<blockquote>" +
			"  <ul>" +
			"    <li><a href=\"/reservator-project/light/" + "\">light</a></li>" +
			"    <li><a href=\"/reservator-project/newsprint/" + file + "\">newsprint</a></li>" +
			"    <li><a href=\"/reservator-project/night/" + file + "\">night</a></li>" +
			"    <li><a href=\"/reservator-project/pixyll/" + file + "\">pixyll</a></li>" +
			"    <li><a href=\"/reservator-project/whitey/" + file + "\">whitey</a></li>" +
			"  </ul>" +
			"</blockquote>" +
			"<hr />";
			
		table.appendChild(section);
	}
}
