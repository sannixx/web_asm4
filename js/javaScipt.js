$(document).ready(function () {

    setAreaImg();
    $('.carousel').carousel({
        touch: true
    });

});

$(window).resize(function (event) {
    setAreaImg();
});

function setAreaImg() {
    if ($(window).height() >= 600) {
        $("img").css('max-height', 600);
    } else {
        $("img").css('max-height', $(window).height());
    }
}