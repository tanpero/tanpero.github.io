# Reservator

---

这是一个用于收藏中国文化典籍，并尝试提供其多种形式的项目。

排版是根据个人喜好进行简单编排。

目前部分古籍中，由于某些生僻汉字暂时没有打出，使用“（左 X 右 X）“这种形式记录。将来会挑出精力，尽量依照原文，将其改回单个汉字。

欢迎热心人加入这一工作！^_^

目前需要的工作：

- 持续添加新的古籍及其内容
- 根据 .epub 文件制作 .mobi 文件（个人使用  Calibre<sup>&copy;</sup>)
- 修复文档中的临时性汉字记号
- 生成更多的文档类型

个人工作不易，需要您的支持~

---

## 图书馆

截止<span id="now"></span> ，Reservator&copy; 图书馆中共有书籍 <span id="books-count"></span> 本。

图书馆在[这里！](list)

---


## 可选的文档风格

---

- light
- newsprint
- night
- pixyll
- whitey



## 主项目及分支情况

---

项目的源文件使用 Markdown 编写。

这里的图书馆使用的是 [Project Branch for HTML](https://github.com/tanpero/Reservator-HTML) 项目分支中的 HTML 文档。



- Master Project

  [Source](https://github.com/tanpero/Reservator)

------

- [Project Branch for Epub](https://github.com/tanpero/Reservator-Epub)
- [Project Branch for HTML](https://github.com/tanpero/Reservator-HTML)
- [Project Branch for Kindle](https://github.com/tanpero/Reservator-Kindle)
- [Project Branch for LaTeX](https://github.com/tanpero/Reservator-LaTeX)
- [Project Branch for OpenOffice](https://github.com/tanpero/Reservator-OpenOffice)
- [Project Branch for OPML](https://github.com/tanpero/Reservator-OPML)
- [Project Branch for PDF](https://github.com/tanpero/Reservator-PDF)
- [Project Branch for StructuredText](https://github.com/tanpero/Reservator-reStructuredText)
- [Project Branch for RTF](https://github.com/tanpero/Reservator-RTF)
- [Project Branch for Textile](https://github.com/tanpero/Reservator-Textile)
- [Project Branch for Wiki](https://github.com/tanpero/Reservator-Wiki)
- [Project Branch for MS-Office](https://github.com/tanpero/Reservator-Word)

---

广州市江南外国语学校 杨雨露

<span id="now"></span>

<script type="text/javascript" src="/assets/date.js"></script>
<script src="list.js"></script>


<script src="/assets/common.js"></script>

<script>
    cleanPage();
	window.onload = function() {
		document.getElementById("books-count").innerHTML = list.length;
	}
</script>

