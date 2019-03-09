var list = ["古画品录", "公孙龙子", "棋经十三篇", "宋史", "陈书", "楚辞", "韩非子", "东京梦华录", "列子", "古诗十九首", "史记", "左传", "平宋录", "庄子", "文心雕龙", "明史", "水经注", "汉书", "礼记", "管子", "靖康传信录"];

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
			"    <li><a href=\"/reservator-project/light/" + file + "\">light</a></li>" +
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
