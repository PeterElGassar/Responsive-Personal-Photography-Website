$(document).ready(function () {

    $("#nav-toggle-btn").click(function () {
        $(this).toggleClass("x-shap");
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();

        if (position >= 500) {
            $(".nav-menu").addClass("custem-navbar");
            $('.navbar-brand a img').addClass("brand-img");

        } else {
            $(".nav-menu").removeClass("custem-navbar");
            $('.navbar-brand a img').removeClass("brand-img");
        }
    });

    // Mission Part 2
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 710) {
            $('.camera-img').addClass('img-fromLeft');
            $('.mission-text').addClass('text-fromRight');

        } else {
            $('.camera-img').removeClass('img-fromLeft');
            $('.mission-text').removeClass('text-fromRight');
        }
    });

    //Gallery Show
    $('.list-inline-item').on("click", function () {
        var imgGenreName = $(this).attr("data-filter");
        if (imgGenreName === "all") {
            $(".filter").show("slow");
        } else {

            $(".filter").not('.' + imgGenreName).hide("slow");
            $('.filter').filter('.' + imgGenreName).show('slow');
        }
    });

    //Click Btn Effict
    $('.list-inline-item').on("click", function () {
        $(this).addClass("active-item").siblings().removeClass("active-item");
    });

    //Price Card Inmation
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        console.log(position);
        if (position >= 3950) {
            $('.card-1').addClass('card-fromleft');
            $('.card-2').addClass('card-fromRight');
            $('.card-3').addClass('card-fromBottom');

        } else {
            $('.card-1').removeClass('card-fromleft');
            $('.card-2').removeClass('card-fromRight');
            $('.card-3').removeClass('card-fromBottom');

        }
    });
});