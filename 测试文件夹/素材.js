$(window).bind("scroll", function() {
    var $header = $("#header");
    var t = 200,
        m = Math.min(document.documentElement.scrollTop || document.body.scrollTop, t) / t;
    $header.css("background", "rgba(254, 192, 213, " + m + ")");
});