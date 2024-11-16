let myObj = {
    id: 2,
    printId() {
        console.log(this.id);
    }
}

/*
* @{this}
* 出力結果が２になるのはオブジェクトを参照しているから
* 呼ばれた状況でthisの値変わる
* */
myObj.printId();// 2

/*
* @{use this}
* loggerは this.id Object内のuuidを参照する。
* */
let person = {
    uuid: "0X11111",
    logger() {
        console.log(this.uuid)// 0X11111
    }
}

person.logger()