# The Flintlogy

------

The Flintlogy，即**坚学**。

坚指杨雨露的化学老师陈文坚老师。她的思想在杨雨露的诸位初中老师中独树一帜，故立学以载之。

陈文坚老师在杨雨露的同学中被称为**坚哥**。

坚哥的粉丝叫**坚果**，随时随地为坚哥应援。

坚学，即是以坚哥的思想为基础发展而来的一门学问。

------

<button id="change-style">更换一种显示风格</button>

<script type="text/javascript">
    var extension = window.location.toString().split("#")[1];
    if (extension) {        
        var anchor = document.createElement("a");
        anchor.href = "#" + extension;
        anchor.style.display = "hide";
        document.body.appendChild(anchor);
        anchor.click();
    }
    var styles = ["academic", "han", "light", "newsprint", "night", "pixyll", "scribble", "solarized", "whitey"];
    document.getElementById("change-style").addEventListener("click", function() {
        var index = Math.floor(Math.random() * styles.length);
        var url = "/arts/flintlogy/" + styles[index] + (extension ? "#" + extension : "");
        window.location.assign(url);
    });
    document.title = "坚学 - The Flintlogy";
</script>

