document.getElementsByTagName("body")[0].innerHTML = localGet("fable_search");

document.getElementsByTagName("scrolltop")[0].outerHTML = localGet("fable_scroll");

document.getElementsByTagName("header")[0].outerHTML = localGet("fable_header");

document.getElementsByClassName("logo-top")[0].innerHTML = localGet("logotextright") + localGet("logotextnull");

document.getElementsByClassName("logo-side")[0].innerHTML = localGet("logotextright") + localGet("logotextnull");

document.getElementsByTagName("footer")[0].outerHTML = localGet("fable_footer");

document.getElementsByTagName("nav")[0].outerHTML = localGet("fable_nav");

addScript("js/scroll.min.js");
addScript("js/menu.min.js");
addScript("js/index.min.js");
addScript("js/search.min.js");
addScript("js/result.min.js");
addScript("js/filter.min.js");
addScript("js/switch.min.js");

loadTime();
appendectomy();