$(document).ready(function() {
  $('.mem-card').click(function() {
    var hiddenPic = $(this).find('p');
    if(hiddenPic.is(':hidden')) {
      console.log('This works');
      hiddenPic.removeClass('hidden');
    } else {
      hiddenPic.addClass('hidden');
    }
  });
});