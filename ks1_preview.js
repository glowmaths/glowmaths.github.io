$(document).ready(function () {
    $('td').mouseenter(function () {
        $(this).addClass('hovered');
    });
    $('td').mouseleave(function () {
        $(this).removeClass('hovered');
    });
    $('td').click(function () {
        $('td').removeClass('selected');
        $(this).addClass('selected');
    });
    
    $(".1_1").click(function () {
        $("#statements").html("empty");
        $("#themes").html("empty");
        $("#key").html("empty");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "#");
    });
});
