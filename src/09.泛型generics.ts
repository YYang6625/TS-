// 比如函数规范了类型,但是我想要使用不同的参数去使用这个函数,如果只有我类型而重新定了函数,不免麻烦,也就诞生了泛型generics
// 动态改变参数类型
function dump<T>(arg: T): T{  //利用T作为泛型接收动态参数类型
    return arg
}
let haxx = dump<string>('oh shit')
let hayy = dump<number>(123)    //不同参数类型使用同一函数
let hazz = dump(true)           //也可以自动推断类型

// 泛型在函数中的使用
class Collection<hd> {
    data: hd[] = [];
    public push(...items: hd[]) {
        this.data.push(...items);
    }
    public shift():any{
        return this.data.shift();  //返回被删除的元素,该方法删除下边为0的数组元素
    }
}
type User22 = { name: string; age: number }
const user43: User22 = { name: 'John', age: 42 };
const collections = new Collection<User22>();   //利用type代替hd动态数据类型
collections.push(user43);

// 构造函数中泛型的使用
class Ah<T> {
    public constructor(private user: T) {   //利用private直接内部定义属性

    }
    public get():T{
        return this.user
    }
}
interface UserInterface33{
    name: string;
    age: number;
}
const obj42 = new Ah<UserInterface33>({ 'name': 'John', 'age': 42 });   //按照接口类型要求传递数据并动态泛型接收
console.log(obj42.get); //使用实例公开方法

// 接口中使用泛型和泛型的多接口定义
interface ahsdhInterface<B, C>{  //定义接口并使用多个泛型
    title: string;
    isLock: B;
    comments:C[];
}
type CommentsType = {  //数组内部接收键值对,也就是对象
    content: string;
    author: string;
}
const asas: ahsdhInterface<Boolean, CommentsType> = {   //传递动态B接收Boolean,动态C接收CommentsType类型变量
    // 需要满足接口规范使用所有变量
    title: '奕扬',
    isLock: false,
    comments:[{content: 'HelloWorld !', author: "奕扬"}],
}