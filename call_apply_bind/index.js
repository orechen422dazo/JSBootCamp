
/*
　@{call}
  thisというプロパティをconsoleに出力するようにしている
* callというのはthisで関数のobjectを決定することができる。
* */
function greet() {
    // このthisは関数が呼ばれるまでは決まっていない。
    let hi = `Hi, ${this.name}`;
    console.log(hi);// Hi icchy
}

let obj = {name: "icchy"};

// call メソッドを使って、thisのオブジェクトを決定する
greet.call(obj);