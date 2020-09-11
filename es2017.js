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






