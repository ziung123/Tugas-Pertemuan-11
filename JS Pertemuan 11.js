$(document).ready(function() {
    // Animasi ketika halaman dimuat
    $(".container").css("transform", "scale(1)");

    $("#show-button").click(function() {
        $("#student-info").slideDown(1000).animate({ opacity: 1 }, { queue: false, duration: 1000 });
    });
});
