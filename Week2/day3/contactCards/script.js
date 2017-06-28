var newUser = {
    fname: 'John',
    lname: 'smith',
    email: 'jsmith@gmail.com',
    phone: '123456789',
    description: 'Placing Contact via defined object'
}

var cards = 0;

$('document').ready(function () {
    $('form').submit(function (evt) {
        //evt.preventDefault();
        addUser(getFormAsObject($(this)));
        return false;
    });
    $(document).on('click', '.card', function () {
        $(this).children('p').toggle();
    })
    addUser(newUser);

});

function getFormAsObject(frm) {
    var vars = [];
    var hash;
    var hashes = frm.serialize().split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = decodeURIComponent(hash[1]);
    }
    return vars;
}

function addUser(usr) {
    var contact = '<div class="card" id="' + cards + '">' +
        '<h3>' + usr.fname + ' ' + usr.lname + '</h3>' +
        '<p>' + usr.description + '</p>' +
        '</div>'
    $('.cards').append(contact);
    cards++;
}
