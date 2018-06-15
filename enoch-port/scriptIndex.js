$(document).ready(function () {
    $(".hide").hide();

    $(".list-item").click(function () {
        $("#nav").addClass("animated slideOutUp");
        $("#nav").hide();
    });

    $("#about-click").click(function () {
        $("body").css("background-color", "var(--grey)");
        $("#about").addClass("animated slideInDown");
        $("#about").show();
    });

    $("#portfolio-click").click(function () {
        $("#portfolio").addClass("animated slideInUp");
        $("body").css("background-color", "var(--black)");
        $("#portfolio").show();
    });

    $("#skills-click").click(function () {
        $("#skills").addClass("animated slideInUp");
        $("body").css("background-color", "var(--tan)");
        $("#skills").show();
    });

    $("#experience-click").click(function () {
        $("#experience").addClass("animated slideInUp");
        $("body").css("background-color", "var(--dark-blue)");
        $("#experience").show();
    });

    $("#arrow-click").click(function () {
        $("#about").hide();
        $("#nav").show(); 
        $("#nav").addClass("animated slideInDown");
        
    });

  
});


