$(document).ready(function() {
    AOS.init();

    var bande = 0;

    $("#hide_navbar").click(function(){
        $(".topNavBar").hide(1000);
        $(".topArrow").show(1000);
        bande = 1;
    });
    $("#show_navbar").click(function(){
        $(".topNavBar").show(1000);
        $(".topArrow").hide(500);
        bande = 0;
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    var newsletter = function () {
        swal({
            title: '<br /><div class="sk-spinner sk-spinner-chasing-dots"> <div class="sk-dot1"></div><div class="sk-dot2"></div></div><br />',
            text: "Enviando información...",
            allowEscapeKey: false,
            showConfirmButton: false,
            timer: 3000
        }).then(
                function () {
                    swal("¡Gracias!","Te llegará a tu correo información sobre mis próximos lanzammientos, presentaciones y mucho más.","success");
                }, function (dismiss) {
                    swal("¡Gracias!","Te llegará a tu correo información sobre mis próximos lanzammientos, presentaciones y mucho más.","success");
                }
            );
    }

    $("#Newsletter").keyup(function(e){ 
        var code = e.which; // recommended to use e.which, it's normalized across browsers
        if(code==13)e.preventDefault();
        if(code==32||code==13||code==188||code==186){
            newsletter();
        } // missing closing if brace
    });

    $("#Newsletter_btn").click(function(){ 
        newsletter();
    });

    $(document).scroll(function() {
        if(bande == 0) {
            var y = $(this).scrollTop();
            if (y > 80) {
                $('.topNavBar').fadeIn(800);
            } else {
                $('.topNavBar').fadeOut(800);
            }
            if (y > 80) {
                $('.logo_principal').fadeOut(400);
            } else {
                $('.logo_principal').fadeIn(1500);
            }

            var scrollDistance = $(window).scrollTop();
            $('.section-scroll').each(function(i) {
                if ($(this).position().top <= scrollDistance + 5) {
                    $('a.navBar_item.active').removeClass('active');
                    $('a.navBar_item ').eq(i).addClass('active');
                }
            });
        }

        if(bande == 1) {
            var y = $(this).scrollTop();
            if (y > 80) {
                $('.topArrow').fadeIn(800);
            } else {
                $('.topArrow').fadeOut(800);
            }
            if (y > 80) {
                $('.logo_principal').fadeOut(400);
            } else {
                $('.logo_principal').fadeIn(1500);
            }


        }

    });
    
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $('#lightgallery').lightGallery({
        controls: false,
        share: false,
        actualSize: false,
        fullScreen: false,
        getCaptionFromTitleOrAlt: false
    });

    $('i.fa-apple').addClass("music_icons_size");
    $('.fa-apple').css("color", "#d4d4d4");


    /* VIDEOS */
        $("#video01").click(function(){
            $('.video01').removeClass("d-none");
            $('.video02').addClass("d-none");
            $('.video03').addClass("d-none");
            $('.video04').addClass("d-none");
            $('.video05').addClass("d-none");
            $('.video06').addClass("d-none");
            $('.video07').addClass("d-none");

            $('#video01').addClass("active");
            $('#video02').removeClass("active");
            $('#video03').removeClass("active");
            $('#video04').removeClass("active");
            $('#video05').removeClass("active");
            $('#video06').removeClass("active");
            $('#video07').removeClass("active");

        });
        $("#video02").click(function(){
            $('.video01').addClass("d-none");
            $('.video02').removeClass("d-none");
            $('.video03').addClass("d-none");
            $('.video04').addClass("d-none");
            $('.video05').addClass("d-none");
            $('.video06').addClass("d-none");
            $('.video07').addClass("d-none");

            $('#video01').removeClass("active");
            $('#video02').addClass("active");
            $('#video03').removeClass("active");
            $('#video04').removeClass("active");
            $('#video05').removeClass("active");
            $('#video06').removeClass("active");
            $('#video07').removeClass("active");
        });
        $("#video03").click(function(){
            $('.video01').addClass("d-none");
            $('.video02').addClass("d-none");
            $('.video03').removeClass("d-none");
            $('.video04').addClass("d-none");
            $('.video05').addClass("d-none");
            $('.video06').addClass("d-none");
            $('.video07').addClass("d-none");

            $('#video01').removeClass("active");
            $('#video02').removeClass("active");
            $('#video03').addClass("active");
            $('#video04').removeClass("active");
            $('#video05').removeClass("active");
            $('#video06').removeClass("active");
            $('#video07').removeClass("active");
        });
        $("#video04").click(function(){
            $('.video01').addClass("d-none");
            $('.video02').addClass("d-none");
            $('.video03').addClass("d-none");
            $('.video04').removeClass("d-none");
            $('.video05').addClass("d-none");
            $('.video06').addClass("d-none");
            $('.video07').addClass("d-none");

            $('#video01').removeClass("active");
            $('#video02').removeClass("active");
            $('#video03').removeClass("active");
            $('#video04').addClass("active");
            $('#video05').removeClass("active");
            $('#video06').removeClass("active");
            $('#video07').removeClass("active");
        });
        $("#video05").click(function(){
            $('.video01').addClass("d-none");
            $('.video02').addClass("d-none");
            $('.video03').addClass("d-none");
            $('.video04').addClass("d-none");
            $('.video05').removeClass("d-none");
            $('.video06').addClass("d-none");
            $('.video07').addClass("d-none");

            $('#video01').removeClass("active");
            $('#video02').removeClass("active");
            $('#video03').removeClass("active");
            $('#video04').removeClass("active");
            $('#video05').addClass("active");
            $('#video06').removeClass("active");
            $('#video07').removeClass("active");
        });
        $("#video06").click(function(){
            $('.video01').addClass("d-none");
            $('.video02').addClass("d-none");
            $('.video03').addClass("d-none");
            $('.video04').addClass("d-none");
            $('.video05').addClass("d-none");
            $('.video06').removeClass("d-none");
            $('.video07').addClass("d-none");

            $('#video01').removeClass("active");
            $('#video02').removeClass("active");
            $('#video03').removeClass("active");
            $('#video04').removeClass("active");
            $('#video05').removeClass("active");
            $('#video06').addClass("active");
            $('#video07').removeClass("active");
        });
        $("#video07").click(function(){
            $('.video01').addClass("d-none");
            $('.video02').addClass("d-none");
            $('.video03').addClass("d-none");
            $('.video04').addClass("d-none");
            $('.video05').addClass("d-none");
            $('.video06').addClass("d-none");
            $('.video07').removeClass("d-none");

            $('#video01').removeClass("active");
            $('#video02').removeClass("active");
            $('#video03').removeClass("active");
            $('#video04').removeClass("active");
            $('#video05').removeClass("active");
            $('#video06').removeClass("active");
            $('#video07').addClass("active");
        });

    /* MUSIC DESKTOP */
        $("#music_itunes_button").click(function(){
            $("#music_itunes").show();
            $("#music_spotify").hide();
            $("#music_spotify_sub").hide();
            $("#music_youtube").hide();
            $("#music_youtube_sub").hide();
            $("#music_soundcloud").hide();

            $('.fa-apple').css("color", "#d4d4d4");
            $('i.fa-apple').css("transform", "scale(1.3)");
            $('.fa-spotify').css("color", "#fff");
            $('i.fa-spotify').css("transform", "scale(1)");
            $('.fa-soundcloud').css("color", "#fff");
            $('i.fa-soundcloud').css("transform", "scale(1)");
        });

        $("#music_spotify_button").click(function(){
            $("#music_itunes").hide();
            $("#music_spotify").show();
            $("#music_spotify_sub").show();
            $("#music_youtube").hide();
            $("#music_youtube_sub").hide();
            $("#music_soundcloud").hide();

            $('.fa-apple').css("color", "#fff");
            $('i.fa-apple').css("transform", "scale(1)");
            $('.fa-spotify').css("color", "#1db954");
            $('i.fa-spotify').css("transform", "scale(1.5)");
            $('.fa-soundcloud').css("color", "#fff");
            $('i.fa-soundcloud').css("transform", "scale(1)");
        });

        $("#music_soundcloud_button").click(function(){
            $("#music_itunes").hide();
            $("#music_spotify").hide();
            $("#music_spotify_sub").hide();
            $("#music_soundcloud").show();

            $('.fa-apple').css("color", "#fff");
            $('i.fa-apple').css("transform", "scale(1)");
            $('.fa-spotify').css("color", "#fff");
            $('i.fa-spotify').css("transform", "scale(1)");
            $('.fa-soundcloud').css("color", "#f50");
            $('i.fa-soundcloud').css("transform", "scale(1.5)");
        });

    /* MUSIC MOBILE */
        $("#music_itunes_button2").click(function(){
            $("#music_itunes").show();
            $("#music_spotify").hide();
            $("#music_spotify_sub").hide();
            $("#music_youtube").hide();
            $("#music_youtube_sub").hide();
            $("#music_soundcloud").hide();

            $('.fa-apple').css("color", "#d4d4d4");
            $('i.fa-apple').css("transform", "scale(1.3)");
            $('.fa-spotify').css("color", "#fff");
            $('i.fa-spotify').css("transform", "scale(1)");
            $('.fa-youtube').css("color", "#fff");
            $('i.fa-youtube').css("transform", "scale(1)");
            $('.fa-soundcloud').css("color", "#fff");
            $('i.fa-soundcloud').css("transform", "scale(1)");
        });

        $("#music_spotify_button2").click(function(){
            $("#music_itunes").hide();
            $("#music_spotify").show();
            $("#music_spotify_sub").show();
            $("#music_youtube").hide();
            $("#music_youtube_sub").hide();
            $("#music_soundcloud").hide();

            $('.fa-apple').css("color", "#fff");
            $('i.fa-apple').css("transform", "scale(0.8)");
            $('.fa-spotify').css("color", "#1db954");
            $('i.fa-spotify').css("transform", "scale(1.5)");
            $('.fa-youtube').css("color", "#fff");
            $('i.fa-youtube').css("transform", "scale(1)");
            $('.fa-soundcloud').css("color", "#fff");
            $('i.fa-soundcloud').css("transform", "scale(1)");
        });

        $("#music_soundcloud_button2").click(function(){
            $("#music_itunes").hide();
            $("#music_spotify").hide();
            $("#music_spotify_sub").hide();
            $("#music_youtube").hide();
            $("#music_youtube_sub").hide();
            $("#music_soundcloud").show();

            $('.fa-apple').css("color", "#fff");
            $('i.fa-apple').css("transform", "scale(0.8)");
            $('.fa-spotify').css("color", "#fff");
            $('i.fa-spotify').css("transform", "scale(1)");
            $('.fa-youtube').css("color", "#fff");
            $('i.fa-youtube').css("transform", "scale(1)");
            $('.fa-soundcloud').css("color", "#f50");
            $('i.fa-soundcloud').css("transform", "scale(1.6)");
        });

});