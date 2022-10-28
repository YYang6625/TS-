// 装饰器(主要用途是对数据进行一些数据,方法,属性的拓展)
// 设置装饰器类似于指定类型，只不过指定的是函数类型
function decorator(target: Object) { }
@decorator   //装饰器需要在tsconsfig.json文件中去配置开启
class HD {   //这里定定义的类就是装饰器(所以就是装饰函数某些功能咯)
} 

//装饰器的基本使用decorator 装饰器本质就是一个函数
const moveDecorator: ClassDecorator = (target: Function) => {  //ClassDecorator表示的是类装饰器,可以ctrl点击查看剩余装饰器
    console.log(target)   //输出下面两个构造函数 [Function:Tank2] [Function:Player2]
    // 在类原型上添加方法
    target.prototype.getPos = (): { x: number; y: number } => {
        return { x: 100, y: 100 };
    }
}
// 定义两个装饰器  (作用于下面类)
@moveDecorator //语法糖 没事使用语法糖:moveDecorator(Tank2),其实从定义类装饰器就可以看出是要传递一个函数过去,也就是构造函数
class Tank2{ }  //装饰器类型决定上面target类型

@moveDecorator
class Player2{
    public getPos() {  //在原型上规范了输入类型,这里不输入也行
        
    }
}
// 定义完函数原型对象上的方法就可以使用了
const p = new Player2();
console.log(p.getPos());

// 我们可以叠加使用装饰器,在不同装饰器中定义不同方法提供使用
// @xxx
// @yyy
// class zzz{}    //在zzz这个类就可以同时使用两个装饰器中的方法或者属性

// 装饰器工厂DecoratorFactory:内部包含很多装饰器,按需使用
const DecoratorFactory =(type: string): ClassDecorator => {  //返回类装饰器函数(就和返回函数值类型一样  (): void=>{},只不过变成了一个装饰器)
    console.log(type)  //输入值
    switch (type) {
        case'tank':
        return (target: Function) => {
            target.prototype.playMusic = ():void => {
            console.log('播放坦克音乐');
            }
        }
        default:
        return (target: Function) => {
            target.prototype.playMusic = ():void => {
            console.log('播放玩家音乐');
            }
        }  
    }
}

@DecoratorFactory('tank')  //传递至返回对应方法
class tank{}
const t = new tank();
(<any>t).playMusic() //返回之后使用

@DecoratorFactory('player')
class player{}


// 还有另外三种装饰器 MethodDecorator(方法装饰器) ParameterDecorator(参数装饰器) PropertyDecorator(原型对象装饰器)
// 使用大致差不多

// 方法装饰器
const showDecorator: MethodDecorator = (...args: any[]) => {  //定义一个方法装饰器
// const showDecorator: MethodDecorator = (target: Object, prototype:string| Symbol, descriptor: PropertyDescriptor) => {
    // ..args内部是三个参数  分别为 所装饰函数的原型对象/构造函数  方法名称  方法描述(三个参数就是对装饰函数的修饰，描述是指改变函数{}内的的内容)
    console.log(args)
    args[0].name = '奕扬';

}
class kshd {
    @showDecorator
    public show() {
    //普通方法函数  方法装饰器返回的第一个元素就是原型对象  //普通函数 方法装饰器返回的第一个元素就是原型对象
    //静态方法函数  方法装饰器返回的第一个元素就是类的构造函数  //静态函数 方法装饰器返回的第一个元素就是类的构造函数
    }
}
const k = new kshd();
// console.log(new kshd().name) //'奕扬'  这就说明 普通函数args第一个元素在原型对象上

// 高亮案例
const highLightDecorator: MethodDecorator = (target: Object, prototype: string | Symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value  //method接收的是response{}内的返回的内容也就是函数return
    descriptor.value = () => {
        return `<div style="color:green;">${method()}</div>`   //因为接收的是{}内的return函数所以这里是method(),这里也应用了闭包
    }
}
class Method {
    @highLightDecorator
    public response() {
        return '别再怠慢了,没时间了'
    }
}
document.body.insertAdjacentHTML("beforeend", new Method().response())  //在页面body最后上插入一个HTML元素

// 延时器案例
const SleepDecorator = (times: number): MethodDecorator => { //接收一个装饰器传递过来的参数
    // 返回一个定时器，利用接收的参数动态改变时间
    return (arget: Object, prototype: string | Symbol, descriptor: PropertyDescriptor) => {
        const method = descriptor.value
        descriptor.value = () => {
            setTimeout(() => {
                method()
            },times)
        }
    }
    // 简化写法删去return 使用剩余函数接收
    // (...args:any[]) => {
    //     const [,,descriptor] = args  //这里，，是指跳过了前两个参数
    //     const method = descriptor.value
    //     descriptor.value = () => {
    //         setTimeout(() => {
    //             method()
    //         },times)
    //    }
}
class Sleep{
    @SleepDecorator(2000)  //传递times
    public response() {
        console.log("延时器")
    }
}