var newUser = {
    fname: 'John',
    lname: 'smith',
    email: 'jsmith@gmail.com',
    phone: '123456789',
    description: 'Placing Contact via defined object'
}



var cards = 0;
var ships;
$('document').ready(function () {
    $.ajax({
        url: 'http://swapi.co/api/starships/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            ships = data.results;
            console.log(ships);
            for (s in ships) {
                $('#ships').append(shipUI(ships[s], s));
            }
        },
        error: function () {
            alert('Oh No the API must be down');
        },
        beforeSend: setHeader
    });

    $(document).on('click', 'h3', function () {
        console.log();
        $('#ship-details').html(shipDetails(ships[$(this).attr('data-local-id')]));
    });
});

function shipUI(s, id) {
    console.log(s);
    return `<h3 data-local-id="${id}">${s.name}</h3>`;
}

function shipDetails(s) {
    return `<ul>
                <li>${s.name}</li>
                <li>${s.model}</li>
            </ul>`;

}


function setHeader(xhr) {
    //xhr.setRequestHeader('origin', 'localhost');
    xhr.setRequestHeader('accept', '*/*');

}
