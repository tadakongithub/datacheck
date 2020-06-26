---
title: 'クロージャー'
category: 'Javascript'
date: '2020-06-25'
---

まず、コンソールに以下のように表示されるようにJSコードを書いてみてください。
1. グローバル変数を用いて
1. グローバル変数を用いずに

```javascript
console.log(count())//1
console.log(count())//2
console.log(count())//3
```

グローバル変数を用いる場合の例です。
```javascript
var num = 0;

function count() {
    num = num + 1;
    return num;
}
```
グローバル変数numに1加えた後、グローバル変数numの値を返しています。

次に、グローバル変数を用いない場合の例です。
```javascript
function outside () {
    var num = 0;
    return function inside() {
        num = num + 1;
        return num;
    }
}

var counter = outside();
```
まず、一番最後にoutside関数を呼んでいます。ここで、何が返ってくるかわかりますか？

はい、outside関数を呼んで返ってくるのは、returnの右側にくる部分ですから、以下の部分ですよね？
```javascript
function inside() {
    num = num + 1;
    return num;
}
```
なので、変数countは、outside関数の中にあるinside関数を指していることとなります。

### クロージャー
ここでポイントですが、このinside関数は外側のoutside関数のスコープにアクセスできます。つまり、inside関数は自分を含んでいるoutside関数の中にあるnum変数にアクセスできるのです。このように、内側の関数が外側の関数のスコープにアクセスできることをクロージャーと言います。

count関数を最初に呼ぶと、outside関数の中にあるinside関数を実行していることと同じになります。inside関数の外（でoutside関数の中）にあるnumに１を加え(0 + 1 = 1)、その値(1)を返します。

２回目に呼ぶときは、変数numは(1)に変わっているので、その値に１を加え(1 + 1 = 2)、その値(2)が返されます。

3回目に呼ぶときは、変数numは(2)に変わっているので、そこに１を加え(2 + 1 = 3)、その値(3)が返されます。

以上です。何かご指摘等ありましたらよろしくお願いいたします。