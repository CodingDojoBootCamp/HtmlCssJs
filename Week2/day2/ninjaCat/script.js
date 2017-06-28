var images = [
    ['cat0.png', 'ninja0.png'],
    ['cat1.png', 'ninja1.png'],
    ['cat2.png', 'ninja2.png'],
    ['cat3.png', 'ninja3.png'],
    ['cat4.png', 'ninja4.png'],
]

var imgTemplate =

    function imgTemplate(img, row, col) {
        var output = '<img src="./img/' + img + '" data-img-row=' + row + ' data-img-col=' + col + '>'
        return output;
    }




function initialize() {
    for (var i = 0; i < images.length; i++) {
        $('main').append(imgTemplate(images[i][0], i, 0));

    }

    $('img').click(function () {
        var el = $(this)
        var row = el.attr('data-img-row');
        var col = el.attr('data-img-col');
        el.attr('src', './img/' + images[row][1 - col]);
        el.attr('data-img-col', 1 - col);
    });

}

initialize();
