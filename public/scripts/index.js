$(document).ready(
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            var target = $(this.hash);
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top
                    },
                    1000
                );
            }
        });
    })
);




if (document.querySelector('.navbar-nav')) {
    document.querySelector('.spacing').style.display = 'block'
} else {
    document.querySelector('.spacing').style.display = 'none';
}