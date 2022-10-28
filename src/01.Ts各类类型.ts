// Ts的基本认识和使用
// 进入文件夹内编译ts文件   输入tsc app.ts(生成同名js文件)
// 进行实时监听编译 在终端输入 tsc app.ts -w     (w就是watch监听)

// ts提供了约束数据类型  即类型注释 类型必须相同

// ts进行编译时会对文件夹内容进行校验，使用会出现变量名下飘红  可以在vsccode 设置中中搜索validate取消扩展中Typescript 第一项禁用javascript验证即可

// 1.字符串
let ts1: string = 'ts';
//链接字符串(编译会使用.concat()连接字符串)
let ts2: string = `web ${ts1}`;

// 2.数字
let ts3: number = 1;
let ts4: number = Infinity;//无穷大

// 3.字符串
let ts5: string = 'ts';

// 4.布尔值
let ts6: boolean = true;
let ts7: Boolean = new Boolean(1); //返回布尔对象0false 数值true

//5.空值 void   （void=null会报错  null未赋值已占位）
let ts9: void = undefined;
function ts10 (): void {   //同理我们可以进行一些修改，按所需返回对应类型
    // 返回值必须为空
    console.log(123);  //这里并未返回
}
ts10();  //返回值为undefined

//6.undefined与null(默认情况下undefined与null是不可以被赋值其他类型的值，但是可以进行默认设置的修改)
let ts11:undefined = undefined;
let ts12: null = null;

// 7.不确定类型unknown(不确定类型)
let xx: unknown = 'hdr';
// 可以利用类型断点as： 对值进行类型转换
let b: string = xx as string;

// 8.never:针对一些不会完全执行完的函数，比如遇见错误时的暂停
function yy(): never{
    throw new Error("类型错误")
}

//接收任意类型的数据（相当于原生js）
let ts13: any = {};
let ts14: any = Symbol('学习');  //Symbol类型（唯一性）

// 括号
let hd: string | number[]  //含义是hd变量接受string类型和内部值为number类型的数组
hd = '123'
hd = [123, 456]
// hd = ['123',456] //报错

let hd2: (string | number)[]  //含义即hd接收的是一个数组，内部值类型为string或number
hd2 = ['123', 456]
// 相当于
hd2: Array<string | number | object>