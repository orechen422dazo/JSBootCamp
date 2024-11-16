
function greet(id, id2, id3) {
    console.log(arguments);
    let sliceArray = [].slice.call(arguments, 0, 1);
    console.log(sliceArray);
}

const array = [1, 2, 3, 4, 5];

console.log(Math.min.apply(null, array));