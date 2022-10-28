//一.参数的类型约束限制

// ts会自动将设置值与设置类型进行绑定，无法修改成其它类型的值
let ts = "ts";
// ts = 123; //错误显示，无法将number值分配给string类型

function create1(a: number, b: number) {
    return a + b;
}
console.log(create1(6, 3));
//js的隐式转换导致输入字符也会产生结果 形成字符串相加 ts避免了这类情况
// 未限制情况下，接受值类型为any

// 修改返回类型结果(要求参数是number数字类型，返回值是字符串类型)
function create2(a: number, b: number):string {
    return "结果是" + (a + b);  //隐式转换
}
console.log(create2(6, 3));

//二.数组的类型约束限制
const Ts1 = [123, '123', true]; //[]内接受的值的类型约束数组后添加的值
const Ts2:(string|number|boolean)[] = [true, 123,"123"] //相当于约束了数组push等操作的类型值


//三.对象值类型的推断限制（注意数组函数是特殊的对象）
const user1 = { name: 'user', age: 18, open: false, lesson: [{ title: 'linux' }, { title: 'ts' }] }
// const user2:{name:string,age:number,open:boolean,lesson:{string}[]}  //相当于对内部每一个值进行了约束限制
// 同理针对内部数组的push，unshift等操作，也不需要在类型要求之内