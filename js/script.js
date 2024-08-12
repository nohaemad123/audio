/**
 * Created by khaled pc on 13/09/2015.
 */
$(document).ready(function() {

    /*===============================================================================*/
    /* owlCarousel */
    /*===============================================================================*/
    var owl = $("#slider");

    owl.owlCarousel({
        navigation : false,
        singleItem : true,
        pagination : false,
        autoPlay : true,
        transitionStyle : "fadeUp"
    });

    var owl = $("#projects");

    owl.owlCarousel({

        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 3],
            [1000, 4],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],
        pagination : false,
        autoPlay : true,
        navigation : false

    });

    /*===============================================================================*/
    /* parallax */
    /*===============================================================================*/
    $('.projects').parallax("0%", 0.1);



    $("#drop4").click(function() {
        $(".dropdown-menu").toggleClass('open');
        return false;
    });
    $("#drop5").click(function() {
        $(".dropdown-menu5").toggleClass('open');
        return false;
    });
    $(".button-m").click(function() {
        $(".menu-mobile").toggleClass('open');
        return false;
    });

});