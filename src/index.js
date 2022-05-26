// var val = "(変数";
// console.log(val);

// //var変数は上書き可能
// val = "uwagakikanou";
// console.log(val);

// //再宣言可能
// var val = "再宣言";
// console.log(val);

// let val2 = "let変数";
// console.log(val2);
// //let1は上書き可能
// val2 = "上書き確認";
// console.log(val2);
// //letは再宣言不可

//constは再宣言上書き不可
//constでオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "mori",
//   age: 33
// };
// val4.addres = "hirosima";
// console.log(val4);

// //constでオブジェクトはプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5.push("monkey");
// console.log(val5);

// const name = "mori";
// const age = 33;

// // const message = "私の名前は" + name + "です";
// // console.log(message);

// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };

//

// const func3 =(num1, num2) => {
//   return num1 + num2;
// // }
// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

// 分割代入
// const myprofile = {
//   name: "mori",
//   age: 33
// };

// const { name, age } = myprofile;
// const message1 = `名前は${name}です。年齢は${age}です。`;
// console.log(message1);

const myprofile = ["momo", 33];

const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}です`;
console.log(message3);

//デフォルト値、引数

const sayhello = (namae = "momomo") => console.log(`こんにちは${namae}さん`);
sayhello();

//スプレッド構文　...
