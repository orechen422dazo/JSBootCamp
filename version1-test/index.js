// 問題１
// 関数に引数を1, [2, 3, 4]渡します。
// logの出力結果は、[1, 2, 3, 4]

function arrayConcat(a, b) {
    return [a, ...b]
}

let a = 1
let b = [2, 3, 4]

let fa  = arrayConcat(a, b)
console.log(fa)

if(typeof fa === 'object') {
    // expected data type object
    console.log('this is array')
    // Number of elements?
    if(fa.length === 4) {
        console.log('4')
    } else {
        console.log(fa.length)
    }
} else {
    console.log('Not this is array')
}