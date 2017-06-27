var students = [{
        first_name: 'Michael',
        last_name: 'Jordan'
    },
    {
        first_name: 'John',
        last_name: 'Rosales'
    },
    {
        first_name: 'Mark',
        last_name: 'Guillen'
    },
    {
        first_name: 'KB',
        last_name: 'Tonel'
    }
];

students.print = function () {
    this.forEach(function (student) {
        console.log(student.first_name, student.last_name);
    }, this);
}

function printStudents(arr) {
    arr.forEach(function (student) {
        console.log(student.first_name, student.last_name);
    }, this);
}

printStudents(students);

students.print();
