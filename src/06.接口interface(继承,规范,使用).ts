// interface接口约束对象,定义规范,必须使用规范,否则报错,再次声明接口会进行合并规范而不是覆盖
// 我们可以使用type类型变量或interface接口来规范参数,函数的类型
interface UserInterface {
    name: string;
    age: number;
    hight?: number;     //?属性可以不编写
    info55(): string;
    //存储额外属性,允许无限追加其他属性值
    [key: string]: any; //(会规范所有内部属性)
}
let hd33: UserInterface = {
    // 不写全会显示类型“{}”缺少类型“UserInterface”中的某个属性
    name: '奕扬',
    age: 23,
    info55() {
        return `${this.name}-${this.age}`;  //并且要满足返回值的规范
    },
    //使用额外属性后的添加属性值可无限追加属性
    gender: 'male',
}


// 接口的实现与继承
interface PlayEndInterface{   //结束接口
    end(): void  //因为规范都必须使用,所以可以同时调用不同类的结束接口结束执行,
}
interface AnimationInterface extends PlayEndInterface{
    //定义动画接口与继承结束接口
    //与上面描述一致,接口定义的规范和方法必须被子类,实例等所使用
    name: string;
    move():void
}

// 抽象类(规范类的模板,规范类一些属性方法) ,也可以定义抽象属性,有了规范就必须要使用
abstract class Animation66 {
    abstract move():void;  //在只存在于抽象类内
    protected getPos(): { x: number; y: number }{
        return { x: 100, y: 300 };
    }
}
class Tank extends Animation66 implements AnimationInterface,PlayEndInterface{
    //定义一个类继承抽象类Animation66,并使用多个接口
    name: string = '敌方坦克'
    public move(): void{
        console.log(`${this.name}移动`);
    }
    end() { //继承接口方法也是必须要使用
        console.log("游戏结束")
    }
}
class Player extends Animation66 implements AnimationInterface,PlayEndInterface{
    // implements(实现):使用接口的方法会规范,可同时使用多个接口
    name: string = '玩家'
    public move(): void{
        console.log(`${this.name}坦克移动`);
    }
    end() {  //继承接口方法也是必须要使用,当end时也就同时实现了各个类的同时结束
        console.log("游戏结束")
    }
}

// 接口实现各个类的规范一致,更加规范
const hd85 = new Tank();
const play = new Player();
console.log(play.end());
hd85.move();
play.move();