
$(document).ready(main);

function main() {
	
	const $time = $("#current-time");
	
	let headMessage = "现在是" + moment().format("YYYY年MM月DD日hh点，a好。 ");
	
	let showMessage = () => headMessage;
	

    const editor = CodeMirror((area) => {
        let codeArea = document.getElementById("code");
        codeArea.parentNode.replaceChild(area, codeArea)
    }, {
        mode: "text/javascript",    //实现 JavaScript 代码高亮
        lineNumbers: true,	//显示行号
        theme: "default",	//设置主题
        lineWrapping: true,	//代码折叠
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
		styleActiveLine: true,
        matchBrackets: true,	//括号匹配
		autoCloseBrackets: true, // 括号补全
		extraKeys: {
			"Ctrl-Space": "autocomplete",
			"Shift-Alt-Enter": function (cm) {
				cm.setOption("fullScreen", !cm.getOption("fullScreen"));
			}
		},
        showCursorWhenSelecting: true,
		
    });
	
	let themeInput = document.getElementById("select-theme");
	themeInput.onchange = selectTheme;
	function selectTheme () {
		var theme = themeInput.options[themeInput.selectedIndex].textContent;
		editor.setOption("theme", theme);
		location.hash = "#" + theme;
	}
	var choice = (location.hash && location.hash.slice(1)) ||
				(document.location.search &&
					decodeURIComponent(document.location.search.slice(1)));
	if (choice) {
		themeInput.value = choice;
		editor.setOption("theme", choice);
	}
	CodeMirror.on(window, "hashchange", function() {
		var theme = location.hash.slice(1);
		if (theme) { themeInput.value = theme; selectTheme(); }
	});
	

    editor.setSize('555px', '800px');     //设置代码框的长宽
	
	if (!Cookies.get("name")) {
		let name =  prompt("初次见面，你好啊~请问你叫什么名字呢？");
		if (name) {
			Cookies.set("name", name, { expires: 14 });
		}
	} else {
		headMessage += "又见面了，" + Cookies.get("name") + "。";
		editor.setOption("value", (() => 
			`/*\n* 作者：${Cookies.get("name")}\n* 日期：${moment().format("YYYY-MM-DD")}\n*/\n\n`)());
	}
	
	$time.text(showMessage());
	
	setInterval(() => $time.text(headerMessage()), 3600 * 1000);

    const output = document.getElementById("output");
	
	const toRun = () => {
        try {
            output.innerText = "";

            document.write = (...args) => {
				let text = args.join("");
                output.innerText += text;
				return text.length;
            }
			
			document.writeln = () => {
				document.write(...arguments, '\n') - 1;				
			}

            eval(editor.getValue());
        } catch (error) {
            alert("捕获错误 - " + error);
        }
    };

    const runButton = document.getElementById("run")
	runButton.addEventListener("click", toRun, false);
	runButton.addEventListener("touchend", toRun, false);

    const $cursorBlinkRate = $("#cursor-blink-rate");
    $cursorBlinkRate.on("change", () => {
        editor.setOption("cursorBlinkRate", +cursorBlinkRate.value);
    });
	

    const $lineWrapping = $("line-wrapping");
    $("[name='lineWrapping']").on("input",
        (e) => {
            let value = $(e.target).attr("checked");
            alert(value);
            editor.setOption("lineWrapping", value);
        });
	
	
    $("[name='indent-account']").on("change",
        (e) => {
            let value = $(e.target).attr("checked");
            alert(value);
            editor.setOption("indent-account", value);
        });
	
	//getRadioValue("indent-account");
}
