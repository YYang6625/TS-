// type与interface都有规范类型的功能
type userType5 = { name: string, age: number }
interface UserInterface {
    name: string;
    age: number;
    hight?: number;     //?属性可以不编写
    [keys: string]: any; //(会规范所有内部属性),可追加类型属性
}

// 区别1:接口重名合并,或者另一接口继承使用,type重名不允许,但也可以进行合并操作
type name11 = { name: string}
type age11 = { name: number }
type User11 = name11 & age11  //合并type   组合type也行 name11 | age11

// 区别2:interface interface只能定义对象类型，type声明的方式可以定义组合类型，交叉类型和原始类型.