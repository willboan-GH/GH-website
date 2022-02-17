$(function(){


  // $("#title").hide();
  // $("#text-animated").hide();
  $("#title,#teal-rectangle").fadeIn(1000).css('display', 'inline-block');
  setTimeout(function() {
    $("#text-animated").fadeIn(1200).css('display', 'inline-block');
  },600);








  // function typeWriter(id, text, speed) {
  //   var i = 0;
  //   if (i < text.length) {
  //     document.getElementById(id).innerHTML += text.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, speed);
  //   }
  // }
  //
  // typeWriter(
  //   "text-animated",
  //   'We develop advanced talent strategies for global businesses across all industries, from start-ups to leading multinationals.',
  //   50
  // );

});
