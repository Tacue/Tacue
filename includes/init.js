(function($){
  $(function(){

    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $(".dropdown-trigger").dropdown();
    $('.modal').modal();
    $('select').formSelect();

    $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
    fullWidth: true;
  }, 3000); // every 2 seconds

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
