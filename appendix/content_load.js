document.querySelector("main").innerHTML = `<i class="fa fa-load splash margin bottom m2"></i><span class="flex flex-row flex-center-h flex-center-v"><span class="dots margin right m0">.</span><span>updating database</span><span class="dots margin left m0">.</span></span>`;
addScript("js/splash.min.js");

fetchThis("/json/index.json").then(function(value) {
    let gotPako = pako.deflate(value);
    localforage.setItem('index', gotPako).then(function() {
        localStorage.version = version;
    });
}).then(function() {
    if (path === "load") {
        window.location.href = window.location.origin;
    } else {
        window.location.reload();
    }
    //appendectomy();
});