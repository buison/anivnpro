$(function () {
	// light out
    var lightout = false;
    $("#movie-player, #toggle_resize, #mediaplayer, #vid-play, .play-area, #explayer, #player, #toggle-light, #likeplayer, #explayer-1, .luotxem, .download-phim, .fb-like, .button-watch").css("position", "relative").css('z-index', 8);
    $("#toggle-light, #lightout").click(function () {
        if (!lightout) {
            lightout = true;
            $("#lightout").css("opacity", 0.98).hide().fadeIn();
        } else {
            lightout = false;
            $("#lightout").fadeOut();
        }
        $("#toggle-light").text(lightout ? 'Bật đèn' : 'Tắt đèn');
    });
});