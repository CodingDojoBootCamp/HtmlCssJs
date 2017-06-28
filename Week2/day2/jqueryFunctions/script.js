$('#addclass').click(function () {
    $(this).siblings().children('p').addClass('red');
});


$('#hide').click(function () {
    $(this).siblings().children('p').hide();
});


$('#show').click(function () {
    $(this).siblings().children('p').show();
});


$('#toggle').click(function () {
    $(this).siblings().children('p').toggle();
});

$('#slidedown').click(function () {
    $(this).siblings().children('p').slideDown('slow');
});
