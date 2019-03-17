let themeSheet = document.createElement("link");
themeSheet.href = themeFileList[themeNameList.indexOf("monokai")];
themeSheet.rel = "stylesheet";
document.head.appendChild(themeSheet);

$(document).ready(main);

function main() {

    const editor = CodeMirror((area) => {
        let codeArea = document.getElementById("code");
        codeArea.parentNode.replaceChild(area, codeArea)
    }, {
        mode: "text/javascript",    //实现 JavaScript 代码高亮
        lineNumbers: true,	//显示行号
        theme: "monokai",	//设置主题
        lineWrapping: true,	//代码折叠
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        matchBrackets: true,	//括号匹配
        showCursorWhenSelecting: true,

    });

    editor.setSize('555px', '1000px');     //设置代码框的长宽

    const output = document.getElementById("output");

    document.getElementById("run").addEventListener("click", () => {
        try {
            output.innerText = "";

            function print() {
                output.innerText += [...arguments].join("") + "\n";
            }

            eval(editor.getValue());
        } catch (error) {
            alert("捕获错误 - " + error);
        }
    }, false);

    const $cursorBlinkRate = $("#cursor-blink-rate");
    $cursorBlinkRate.on("change", () => {
        editor.setOption("cursorBlinkRate", +cursorBlinkRate.value);
    })

    const $lineWrapping = $("line-wrapping");
    $("[name='lineWrapping']").on("blur",
        (e) => {
            let value = $(e.target).attr("checked");
            alert(value);
            editor.setOption("lineWrapping", value);
        });
}
