$(document).ready(function() {

	$("#login-modal").on( "click", function() {
        $("#login").toggleClass( "is-active" );
        $("html").toggleClass( "is-clipped" );
    });

	$("#sign-modal").on( "click", function() {
        $("#sign").toggleClass( "is-active" );
        $("html").toggleClass( "is-clipped" );
    });

    $(".modal-background").on( "click", function(e) {
    	e.preventDefault();
    	$(".modal").removeClass( "is-active" );
        $("html").toggleClass( "is-clipped" );
    });

    $(".modal-close").on( "click", function(e) {
        $(".modal").removeClass( "is-active" );
        $("html").toggleClass( "is-clipped" );
    });
});