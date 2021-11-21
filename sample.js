function showSum(obj) {
    var num1 = 1;
    var num2 = 2;
    var sum = num1 + num2;
    console.log(obj);
    alert(sum);
}

// 「.strike」クラスに取り消し線をつける
function dispLineThrough() {
    $('.strike').css('text-decoration', 'line-through');
    $('.strike').css('text-decoration-color', 'red');
}

/**
 * 数値チェック関数
 * 入力値が数値 (符号あり小数 (- のみ許容)) であることをチェックする
 * [引数]   numVal: 入力値
 * [返却値] true:  数値、false: 数値以外
 */
function isNumber (numVal) {
    // チェック条件パターン
    var pattern = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
    // 数値チェック
    return pattern.test(numVal);
}

const TestAAA = (valA) => {
    console.log(valA);
    alert(valA);
    return "OK";
}

const TestBBB = () => {
    alert(TestAAA("Call to TestAAA" /* func test */));
}


/**
 * 初歩としてPromise関数の使い方を把握する関数
 */
const PromiseTest01 = () => {
    let val_Base = "AAA";

    // 関数定義
    const a = (arg) => {
        console.log("a");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(arg + "→BBB");
            }, 1000);
        });
    }
    const b = (arg) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const flg = true;
                console.log("b");
                if (flg) resolve(arg + "→CCC");
                else reject("error!");
            }, 1000);
        });
    }
    // const c = () => console.log("c");
    // const d = () => console.log("d error:");
    const c = (arg) => {
        console.log("c arg:" + arg + "→DDD");
    }
    const d = (arg) => {
        console.log("d error:" + arg);
    }

    // 関数呼び出し
    console.log("method start");
    let val_retVal;
    a().then(result => {val_retVal = result});
    // resultには「b」の戻り値が入っていて、それを「c」・「d」の引数へセットしている。
    // rejectが返される場合、catchへ飛ぶ（多分。。。）
    b(val_retVal).then(result => {c(result)}).catch(result => {d(result)});
    alert("Call To PromiseTest01");
}

// async・awaitを使用した非同期処理テスト１
// delayミリ秒待機する。任意の第二引数を結果として返す。
async function sleep(delay, result) {
    return new Promise(resolve => {
        setTimeout(() => resolve(result), delay);
    });
}

async function exec() {

    // 非同期処理を実行するだけ
    await sleep(1000)
    console.log(1);

    // 非同期の結果を受け取る
    let result = await sleep(2000, 42)
    console.log(result);
}

// async・awaitを使用した非同期処理
function PromiseTest03 (flg, next_word=``) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let arg = `Success`;
            if (flg) resolve(`${next_word}Success`);
            else reject(`${next_word}Failure`);
        }, 1000);
    });
}

async function funcA() {
    let a = "";
    let b = "";
    try {
        // 処理１
        a = await PromiseTest03(true, "1st:");
        // 処理２
        b = await PromiseTest03(false, "2nd:");
    } catch(e) {
        // 処理３（処理２で失敗すると呼ばれる）
        // eには処理２の結果(b)が入っている
        a += `, ${e}, ${await PromiseTest03(true, 'Re:')}`;
    }
    return console.log(`Finish a:${a}`);
}

// 残余引数・スプレッド演算子
const TestCCC = () => {
    // const ary = [1, 2, 3, 4, 5];
    // a,bは固定でセット、残りはargsに配列で格納される
    const a = (a, b, ...args) => {
        console.log(`a:${a}`);
        console.log(`b:${b}`);
        for (const v of args) {
            console.log(`v:${v}`);
        }
    };

    a(1, 2, 3, 4, 5, 6, 7);
}

// 分割代入
const TestDDD = () => {
    let a, b, c, d, rest;
    ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
    console.log(`a:${a}`);
    console.log(`b:${b}`);
    console.log("rest:" + rest.c); // {c: 30, d: 40}
    console.log("rest:" + rest.d); // {c: 30, d: 40}

    [a, b, d] = [10, 20, 30];
    // console.log(a); // 10
    // console.log(b); // 20
    // console.log(c); // 30
    // console.log(d); // 30

    const thinking = {
        name: "小動物",
        mind: "Python3",
        reason: "`raise e from cause` べんりですよ"
    };
    // const {name="AAAAAA", mind, reason} = thinking;
    // console.log(`${name}だけど${reason} ${mind}理由の一つです`);
    const {name="AAAAAA", mind} = thinking;
    console.log(`${name}だけど${mind}理由の一つです`);
}

// 辞書・ハッシュ使用方法
const TestMap = () => {
    const map = new Map ([
        ["埼玉県", 12],
        ["東京都", 13],
        ["神奈川県", 14]
    ]);

    // 一覧表示
    for (const [key, value] of map) {
        console.log(`県名 ${key}:${value}`);
    }

    // 追加・削除・取得
    map.set("北海道", 1);
    map.delete("埼玉県");
    console.log(`東京都：${map.get("東京都")}`);
}

// オブジェクトコピー
const TestObjectCopy = () => {

    const srcObj = {
        id: 123,
        name: "srcObj!!!3"
    };
    const destObj = {};

    // パターン１
    Object.assign(destObj, srcObj);

    // パターン２
    const destObj2 = {...srcObj};

    console.log(`destObj2.id:${destObj2.id}`);
    console.log(`destObj2.name:${destObj2.name}`);
}

var person = {
    name: {
        first :'Bob',
        last: 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
};

$(function () {
    $('#jstest1').on('click', function () {
        person.firewall = function () { alert("dddzzz"); }
        person.firewall();
        //alert("person:" + person['name']['last']);
        //alert("person:" + person['name']['last']);
    });
});
