$(document).ready(function () {

    //Nav & Arrow Navigation 
    $(".hide").hide();

    $(".list-item").click(function () {
        $("#nav").addClass("animated slideOutUp");
        $("#nav").hide();
    });

    $("#about-click").click(function () {
        $("body").css("background-color", "var(--grey)");
        $("#about").addClass("animated slideInDown");
        $("#about-h1").addClass("animated slideInLeft");
        $("#about").show();
    });

    $("#portfolio-click").click(function () {
        $("#portfolio").addClass("animated slideInUp");
        $("body").css("background-color", "var(--tan)");
        $("#portfolio").show();
    });

    $("#skills-click").click(function () {
        $("#skills").addClass("animated slideInUp");
        $("body").css("background-color", "var(--black)");
        $("#skills").show();
    });

    $("#experience-click").click(function () {
        $("#experience").addClass("animated slideInUp");
        $("body").css("background-color", "var(--whiteSmoke)");
        $("#experience").show();
    });

    $("#arrow-click-up-about").click(function () {
        $("body").css("background-color", "");
        $("#nav").removeClass("slideOutUp").addClass("animated slideInDown");
        $("#nav").show();
        $("#about").hide();
    });

    $("#arrow-click-down-about").click(function () {
        $("body").css("background-color", "var(--tan)");
        $("#portfolio").addClass("animated slideInDown");
        $("#portfolio").show();
        $("#about").hide();
    });

    $("#arrow-click-up-port").click(function () {
        $("#about").addClass("animated slideInDown");
        $("body").css("background-color", "var(--grey)");
        $("#about").show();
        $("#portfolio").hide();
    });

    $("#arrow-click-down-port").click(function () {
        $("body").css("background-color", "var(--black)");
        $("#skills").addClass("animated slideInDown");
        $("#skills").show();
        $("#portfolio").hide();
    });

    $("#arrow-click-up-skills").click(function () {
        $("body").css("background-color", "var(--tan)");
        $("#portfolio").addClass("animated slideInUp");
        $("#portfolio").show();
        $("#skills").hide();
    });

    $("#arrow-click-down-skills").click(function () {
        $("body").css("background-color", "var(--whiteSmoke)");
        $("#experience").addClass("animated slideInDown");
        $("#experience").show();
        $("#skills").hide();

    });

    $("#arrow-click-up-experience").click(function () {
        $("body").css("background-color", "var(--black)");
        $("#skills").addClass("animated slideInUp");
        $("#skills").show();
        $("#experience").hide();
    });

    //TypedJS Library Code
    var type = new Typed('#about-text', {
        strings: ["About"],
        typeSpeed: 100
    });

    var type = new Typed('#portfolio-text', {
        strings: ["Portfolio"],
        typeSpeed: 100
    });

    var type = new Typed('#skills-text', {
        strings: ["Skills"],
        typeSpeed: 100
    });

    var type = new Typed('#experience-text', {
        strings: ["Experience"],
        typeSpeed: 100
    });




  
});


