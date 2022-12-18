function addScript(key) {
    let script;
    script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    script.setAttribute("src",key);
    document.body.appendChild(script);
}

function addStyle(key) {
    let style;
    style = document.createElement("link");
    style.setAttribute("rel","stylesheet");
    style.setAttribute("type","text/css");
    style.setAttribute("href",key);
    document.head.appendChild(style);
}

addScript("js/fav.min.js");