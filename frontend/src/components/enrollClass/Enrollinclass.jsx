var appUrl = "intent://enrollclass#Intent;scheme=https;package=alamaan.ois;end";
var playStoreUrl = "https://play.google.com/store/apps/details?id=alamaan.ois";
var websiteUrl = "https://www.alamaanois.com/";
var isAndroid = /Android/i.test(navigator.userAgent);

if (isAndroid) {
    window.location = appUrl;
    var timeout = setTimeout(function() {
        window.location = playStoreUrl;
    }, 2000);
} else {
    window.location = websiteUrl;
}

window.onblur = function() {
    clearTimeout(timeout);
};
