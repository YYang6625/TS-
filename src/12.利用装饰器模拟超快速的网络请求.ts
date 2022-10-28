// 定义装饰器工厂
const RequestDecorator = (url: string): MethodDecorator => {
  //返回方法装饰器
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value; //value是指all方法{}的内容
    // 模拟请求(也可以利用axios，fetch)
    // 这里使用promise模拟axios请求,promise是同步,then是异步微任务
    new Promise<any[]>((resolve) => {
      //promise可接收一个泛型,ctrl+点击promise可查看
      setTimeout(() => {
        console.log("奕扬");
        resolve([{ name: "奕扬" }]); //传递then成功状态,并传递一个参数
      }, 2000); //模拟请求延迟
    }).then((users) => {
      //接收参数
      method(users); //调用方法
    });
  };
};
class Request2 {
  @RequestDecorator("http://www.baidu.com/") //装饰函数
  public all(users: any[]) {
    console.log(users);
  }
}
