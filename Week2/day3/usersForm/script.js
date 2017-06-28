var newUser = {
    fname: 'John',
    lname: 'smith',
    email: 'jsmith@gmail.com',
    phone: '123456789'
}

$('document').ready(function () {
    $('#addUser').submit(function (evt) {
        evt.preventDefault();

        //console.log(getFormData($(this)));
        addUser(getFormAsObject($(this)));
        return false;
    });

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
    console.log(usr);
    var usrRow = '<tr>' +
        '<td>' + usr.fname + '</td>' +
        '<td>' + usr.lname + '</td>' +
        '<td>' + usr.email + '</td>' +
        '<td>' + usr.phone + '</td>' +
        '</tr>'
    $('#users tbody').append(usrRow)
}
