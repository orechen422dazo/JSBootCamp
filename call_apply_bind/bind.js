function multiply(a, b) {
    return a * b;
}

// 最初の引数を2に固定した新しい関数を作成
const double = multiply.bind(null, 2);
console.log(double(4)); // 8
console.log(double(5)); // 10