//枚举enum:使内部number类型使用更加明确
enum SexType {
    boy,
    girl
}
console.log(SexType.boy)   //0   未赋值默认从零开始  后面一次递增+1
console.log(SexType.girl)  //1

// 断言as基本语法：
function create11(arg: boolean): string | number{
    return arg ? '123': 2032  //三元
}
let res = create11(true) as string  //强制转化成字符串后赋值字符类型，就不接受number类型了
res = '456'

// 值类型
let bb = 99 as const   //变成值类型只能为值99
let a13: string = 'hh' 

// 数组使用断言变成元组tuple
const arr = [bb, 89, '132', true, a] as const  //变成元组:根据值提取类型,其它都是具体值
// 总之来说就是变成元组并根据值提取类型，值为变量提取变量的类型，值为具体值，就只能对应具体值
// 也可以使用<const>等效
let arr2 = <const>[a, bb]
let sahk = hd[0];   //第一个为字符串类型
let sahj = hd[1];   //第一个只能为具体值99
sahk = 'jj'
sahj = 99  

// 数组变元组具体使用与细节
function hds() {
    let a = 'hd'
    let b = (x: number, y: number): number => x + y
    return [a,b] //函数内a字符串类型，b函数类型，返回一个数组(返回数组自然要满足值类型要求)
    // return [a,b] as [string,Function]      //3.直接在返回处声明(直接变成元组)
    // return [a,b] as [typrof a,typeof b]    //3.直接在返回处声明(利用typeof去确定类型,变成元组)
    // return [a,b] as const                  //3.或者变成元组,也就不需要声明了(比较完美)
}
const [m, n] = hds();  //数组接受返回的数组
// m(1, 2);   //报错这是无法调用的，因为不能匹配类型
(m as Function)(1, 2)                        //1.手动断言确定类型
const [x, y] = hds() as [string, Function];  //2.或者直接去指定断言返回的数组内部类型
console.log(y(1, 2))

// 非空断言! (明确数值或者元素存在,非空)  (有时在ts内需要明确类型才能使用)
// const el: HTMLDivElement = document.querySelector('.hd')!;  //明确类.hd挂载在div元素且div存在
// const el: HTMLDivElement = document.querySelector('.hd') as HTMLDivElement;  //效果一样
// 更多DON断言操作查看后端人typescript第二章(个人觉得因为是直接操作DOM,所以没做较详细笔记)


