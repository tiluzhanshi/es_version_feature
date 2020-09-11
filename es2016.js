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