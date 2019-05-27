$(function () {
  $('.burger_trigger, .menu').click(function(){
    $('.menu').toggleClass('menu_opened');
  })
  $(document).click(function(event) {
      if ($(event.target).closest(".burger_trigger").length ) return;
      $('.menu').removeClass('menu_opened');
      event.stopPropagation();
  });
})
