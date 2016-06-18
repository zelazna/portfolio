$(function () {
    $('.menu-icon').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        var $modale = $('.modale');
        if ($this.hasClass('is-opened')) {
            $this.addClass('is-closed').removeClass('is-opened');
            $modale.fadeToggle("slow", "linear");
            $('html, body').css({'overflow': 'auto', 'height': 'auto'});
        } else {
            $this.removeClass('is-closed').addClass('is-opened');
            $modale.fadeToggle("slow", "linear");
            $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        }
        $('.ancres').click(function () {
            $modale.css({'display': 'none'});
            $('html, body').css({'overflow': 'auto', 'height': 'auto'});
            $('.menu-icon').removeClass('is-opened').addClass('is-closed');
        })
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            var $this = $('.menu-icon');
            if ($this.hasClass('is-opened')) {
                $this.addClass('is-closed').removeClass('is-opened');
                $('.modale').fadeToggle("slow", "linear");
                $('html, body').css({'overflow': 'auto', 'height': 'auto'});
            }
        }
    });
    
    $(".button-fill").hover(function () {
        $(this).children(".button-inside").addClass('full');
    }, function () {
        $(this).children(".button-inside").removeClass('full');
    });

});