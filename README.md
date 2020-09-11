# ES2016新特性
```javascript
function has(obj) {
    var arr = [null, undefined, 1, "2", true, false, true, false];
    return arr.includes(obj);
}

console.log(`调用这个函数：${has.toString()}`);
console.log("//以下是调用Array.prototype.includes方法".padEnd(100, "="));

console.log(`arr as Array has null:${has(null)}`);
console.log(`arr as Array has undefined:${has(undefined)}`);
console.log(`arr as Array has 1:${has(1)}`);
console.log(`arr as Array has "2":${has("2")}`);
console.log(`arr as Array has true:${has(true)}`);
console.log(`arr as Array has false:${has(false)}`);
console.log(`arr as Array has {}:${has({})}`);

console.log("分隔线".padStart(30,"*").padEnd(57,"*"));

console.log("//以下是调用 ** ".padEnd(60, "="));
console.log(" 2 ** 2 = " + 2 ** 2);
console.log(" 20 ** 20 = " + 20 ** 20);
```

# ES2017新特性

```javascript
console.log("特性一：padStart, padEnd");
console.log("padEnd()-打印手机号："+"150".padEnd(11, "*"));
console.log("padStart()和padEnd()-打印字符串："+"分隔符".padEnd(11, "*").padStart(20, "*"));


console.log("特性二：在函数，数组，对象中使用性尾逗号");
function foo(name, age, sex, ) {
    return (arguments);
}
console.log("函数的形参和实参的打印不会显示性逗号：",foo(1, 2, 3, ));

var arr = [1, 2, 3, 4, ];
console.log("数组的形参和实参的打印不会显示性逗号：", arr);

var obj = {
    name: "",
    age: 2,
    sex: 1,
};
console.log("对象的形参和实参的打印不会显示性逗号：",obj);

console.log("特性三：Object.prototype.getOwnPropertyDescriptors方法");
var obj = Object.create({foo:1});
obj.name = "name";
obj.age = "age";

console.log(Object.getOwnPropertyDescriptors(obj));

console.log("特性四：Object.values, Object.entries方法");
console.log(`Object.values:`,Object.values(obj));
console.log(Object.entries(obj))

console.log("特性五：async/await");
async function asyncFn() {
    console.log("同步")
    await 1;
}

asyncFn()
.then(function(args) {
    console.log("异步")
});

console.log("我的输出在同步字样之后");

console.log("特性六： ShareArrayBuffer和Atomics");
```
