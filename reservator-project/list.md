# 图书馆
---

> note: 部分古籍文档较大，移动设备或低带宽状态浏览可能较慢。
>
> note: light 风格适合于移动设备浏览。

---


<script  type="text/javascript" src="list.js"></script>

<span id="now"></span>

<script type="text/javascript" src="date.js"></script>

<script type="text/javascript" src="common.js"</script>

<script type="text/javascript">
    window.onload = function() {
        cleanPages();
        var span = document.getElementById("now");
        var table = document.getElementsByClassName("main-content")[0];
        var list = ["楚辞", "韩非子", "东京梦华录", "列子", "古诗十九首", "史记", "左传", "平宋录", "庄子", "文心雕龙", "明史", "水经注", "汉书"];
        showList(list, table);
        showDate(span);
    }
</script>

