function numbersOnly(arr) {
    var numbers = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            numbers.push(arr[i]);
        }
    }
    return numbers;
}

var newArray = numbersOnly([1, 'apple', -3, 'orange', 0.5]);
console.log(newArray);
