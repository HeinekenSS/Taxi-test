$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#up-top').fadeIn();
        } else {
            $('#up-top').fadeOut();
        }
    });
    $('#up-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 600);
    });
});
var link = document.querySelector('.btn-comment');
var text = document.querySelector('textarea');
link.addEventListener('click', function (event) {
    event.preventDefault();
    text.classList.toggle('open');
});