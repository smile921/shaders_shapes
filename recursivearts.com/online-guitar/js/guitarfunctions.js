function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}
window.twttr = function(e, t, n) {
    var o, a = e.getElementsByTagName(t)[0],
        s = window.twttr || {};
    return e.getElementById(n) ? s : ((o = e.createElement(t)).id = n, o.src = "https://platform.twitter.com/widgets.js", a.parentNode.insertBefore(o, a), s._e = [], s.ready = function(e) {
        s._e.push(e)
    }, s)
}(document, "script", "twitter-wjs");

var songTitle, totalScore = 0;

function ScrollGuitar(e) {
    e > 0 ? $("html, body").animate({
        scrollTop: 0
    }, "50") : $("html, body").animate({
        scrollTop: 680
    }, "50")
}
