$(document).ready(function() {
  // $('.mem-card').click(function() {
  //   if($(this p).is(':hidden')) {
  //     $(this).removeClass('hidden');
  //   } else {
  //     $(this).addClass('hidden');      
  //   }
  // });

  // $('.mem-card').click(function() {
  //   if($(this).has('p', function(){
  //     if($(this).is(':hidden')) {
  //       $(this).removeClass('hidden');
  //     } else {
  //       $(this).addClass('hidden');
  //     }
  //   });
  // });

  $('.mem-card').click(function() {
    var hiddenPic = $(this).find('p');
    if(hiddenPic.is(':hidden')) {
      console.log('This works');
      hiddenPic.removeClass('hidden');
    } else {
      hiddenPic.addClass('hidden');
    }
  });


  // $('.grid-cell').click(function() {
  //   if($(this).hasClass('blue-cell')) {
  //     $(this).text('.').removeClass('blue-cell');
  //   } else {
  //     $(this).text('clicked').addClass('blue-cell');      
  //   }
  // });

});