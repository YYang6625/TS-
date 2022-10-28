// 类的使用  (public,protected)
class User {
    name: string;            //默认是public:公开的外部可随时访问
    public age: number;
    protected email: string; //可以设置protected,只能在类内部使用外部无法调用
    constructor(n: string, a: number) {
    // constructor(public n: string, a: number)   //使用时可以直接在()定义外部属性,只需要添加public,一步做到了定义外部属性且定义属性类型
     // 使用就可以直接取代this.name = n
        this.name = n;
        this.age = a;  //类型约束
        this.email = n;
    }
    info(): string{  //返回字符串类型
        return `${this.name}的年龄是 ${this.age}`
    }
    protected Info(): string{  //返回字符串类型
        return `${this.name}的年龄是 ${this.age}`
    }
}
const asj = new User('奕扬', 22)  //输入n,a


const xj: User[] = []  // 限定内容是类实例化出来的对象
xj.push(asj)
// 外部访问
console.log(asj.name)
// console.log(asj.Info)   //属性“Info”受保护，只能在类“User”及其子类中访问,可以在内部创建一个函数应用,再使用传搭建的函数进行调用即可

// 类的继承ts使用
class children extends User {
    constructor(n:string,a:number) {  //指定继承类型
        super(n,a)  //继承参数
        this.name = n
        this.age = a
    }
    public getIfo() {
        return this.Info()   //子类使用受保护的或者私密private属性或者方法
    }
}

// 子类使用父类方法属性
const shj = new children('奕扬', 23)
console.log(shj.info())    //使用继承父类的方法,子类需要使用父类方法需要更高级别的暴露
console.log(shj.getIfo())  //使用子类更高级别暴露去调用受保护protected的或者私密的private

// 类的只读属性readonly
class Axios {
    readonly site: string = "http://localhost:8080";
    public constructor(site?: string) {
        this.site = site || this.site;   //未输入参数不存在就返回本身
    }
    public get(url: string): any {
        console.log(`你请求的是${this.site}/${url}`);   //拼接请求参数
    }
}
const instance = new Axios();
instance.get('user')   //利用constructor改变可读属性
// 还有一个静态属性,只能通过类进行调用

// java单例模式     (阻止外部化实例对象,只能创建一个实例)
// 将constructor私有化,并且利用内部方法设置只能创建一个实例,生成单例模式
// 优点:控制实例数目, 节省资源, 减少内存开销, 减少频繁生成销毁实例,缺点:没有接口,不能继承
class Axios45 {
    private static instance: Axios45 | null = null;
    private constructor() {
        console.log('当构造函数被private后后的生成实例方法')
    }
    static make(): Axios45 {
        if (Axios45.instance == null) {
            Axios45.instance = new Axios45(); //只允许第一次生成实例
        }
        return new Axios45();  //利用内部方法生成实例对象
    }
}
const instace = Axios45.make();

// 类的get获取数据, set设置数据属性
class Article {
    private _lists: any[] = [];     //保护输入的属性,防止外部读取使用
    public get articles(): any[] {  //获取参数进行中间环境的处理
        return this._lists.map((article) => {
            article.title = article.title.substr(0,2)   //截取title的前两个字符  substr不去最后一个下标
        })
    }
    public set articles(lists: any[]) {  //set不能设置有返回值的函数
       this._lists = lists;
    }
}
const hdsd = new Article();
hdsd.articles = [{title: "123"},{title: "456"}]  //存入数据进行处理
