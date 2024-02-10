const array = [1, 2, 3, 4, 5];

let printWithDelay = (array, index) => index < array.length ? setTimeout(function() {
    console.log(array[index]);
    printWithDelay(array, index+1);
}, 3000): console.log("All Done");


printWithDelay(array, 0);