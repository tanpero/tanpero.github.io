const themeList = [
"zenburn.min.css",
"yeti.min.css",
"xq-light.min.css",
"xq-dark.min.css",
"vibrant-ink.min.css",
"twilight.min.css",
"colorforth.min.css",
"cobalt.min.css",
"blackboard.min.css",
"bespin.min.css",
"base16-light.min.css",
"base16-dark.min.css",
"ambiance.min.css",
"ambiance-mobile.css",
"abcdef.min.css",
"3024-night.min.css",
"3024-day.min.css",
"dracula.min.css",
"solarized.min.css",
"shadowfox.min.css",
"seti.min.css",
"rubyblue.min.css",
"railscasts.min.css",
"pastel-on-dark.min.css",
"paraiso-light.min.css",
"paraiso-dark.min.css",
"panda-syntax.min.css",
"oceanic-next.min.css",
"nord.min.css",
"neo.min.css",
"neat.css",
"ttcn.min.css",
"monokai.min.css",
"midnight.min.css",
"mdn-like.min.css",
"mbo.min.css",
"material.min.css",
"lucario.min.css",
"liquibyte.min.css",
"lesser-dark.min.css",
"isotope.min.css",
"idea.min.css",
"icecoder.min.css",
"hopscotch.min.css",
"gruvbox-dark.min.css",
"elegant.css",
"eclipse.min.css",
"duotone-light.min.css",
"duotone-dark.min.css"
];

let themeFileList = [];
let themeNameList = [];

themeList.forEach((item, index) => {
    let name = item.replace(".min.css", "").replace(".css", "");
    let file = "https://cdn.bootcss.com/codemirror/5.44.0/theme/" + item;
    themeNameList[index] = name;
    themeFileList[index] = file;
});
