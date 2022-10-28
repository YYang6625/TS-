// 泛红是由于校验了其它ts文件，发现变量名已存在，但是不应先影响使用(多用于项目校验，这里单独教学不考虑)
// 可以在设置中将vaildate中的typescript也取消勾选(需要时开启即可)
let hd88 = () => '后盾人'
// hd = 'houdunren.com'
let a: string = hd88 as unknown as string  //将函数转化成unknown再转化成字符串再进行赋值(但是无意义)


// 一.函数基本，函数结构
//函数类型的确定是大写其他则是小写
let fuc: Function   
fuc = () => 'good good study!'

// 函数可选参数 ？  (默认值需要放置在最后)
// 函数会自动推算返回值类型  可以利用as(断言)转换
function sum(a: number, b: number, c?: number) {
    c = c || 0.6
    return (a + b)*c 
}
console.log(sum(2, 3)) 

// 规范习惯
function msg(): void{  //没有明确返回内容时，为void  （为了提高可阅读性，最好在函数后面添加返回类型）
    console.log('123')
}

//箭头函数
let msg2 = (): void => { '123' }
// 规范传递过来的参数类型
let addUser = (user: { name: string; age:number}):void => {
    console.log('addUser')  //要习惯给函数添加返回类型值
}
addUser({ name: 'user', age: 18 })


// 二.Type限制函数类型,函数接收数组类型
// 可以使用类型变量来替代内部的类型规范 (可利用类型userType进行反复复用)
type userType = {name: string, age: number}
let addUser2 = (user2:userType):void => {
    console.log('addUser')  //要习惯给函数添加返回类型值
}
addUser2({ name: 'user', age: 18 })

// 利用Type类型进行复用小案例
type userAddFun = (user: userType) => boolean  //将函数定义成类型要求返回布尔值
let addUser3: userAddFun = (user3: userType):boolean=> {  //函数定义的规范限制函数生成
    console.log("添加用户")
    return true;
}
addUser3({ name: 'user', age: 18 })


// 利用剩余参数...args接收多个参数(默认伪数组接收)
function sum99(...args: number[]): number{
    // 利用reduce累加(初始值赋值给s，n是遍历迭代传递过来的参数)
    return args.reduce((s,n)=>s+n, 0);   //返回number类型
}
sum99(1,2,3,4,5)

// 函数接收数组
function push(arr: any[], ...args: any[]): any[]{
    arr.push(...args);  //push操作原数组，直接返回即可无需另外接收
    return arr;
}
let xx86 = ['123']
push(xx86, '789', '456') //['123', '789', '456]

// 元组tuple
// let arr:(string|number| boolean)[] = ["1",true,123]  //只限制数组内的类型不限制对应顺序的类型
// 元组的诞生就是解决这方面问题的

let tuple: [string, boolean, number] = ["123", true, 123]  //对应顺序对应类型tuple
// tuple[0] = true   //类型不符将报错