function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
// ES6からの方法
const s = sum(...numbers)
console.log(s);
// 昔の方法
console.log(sum.apply(null, numbers));