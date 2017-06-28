 function random_color() {
     var rgb = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
     color = '#' //this is what we'll return!
     for (var i = 0; i < 6; i++) {
         x = Math.floor((Math.random() * 16))
         color += rgb[x];
     }
     return color;
 }
 $(document).ready(function () {
     $('#large_box').click(function () {
         setBGColor(this, random_color());
         setBGColor($(this).children(), random_color());

     })


     $('.side_box').click(function (event) {
         event.stopPropagation();
         setBGColor($(this).siblings(), random_color());

     })
     $('.middle_box').click(function (event) {
         event.stopPropagation();
         setBGColor($(this).parent(), random_color());

     })
 });

 function setBGColor(el, color) {
     $(el).css('background-color', color);
 }
