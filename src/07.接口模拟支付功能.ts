// 定义接口规范类约束
interface PayInterface{
    handle(price: number): void;
}
// 支付方式(不同类模拟)
class AliPay implements PayInterface{ //实现接口,满足规范
    public handle(price:number): void {  //定义支付函数和参数类型
        console.log(`支付宝付款${price}元`)
    }

}
class WePay implements PayInterface{
    public handle(price:number): void {
        console.log(`微信扫码付款${price}元`)
    }
}
// 括号接收传递的参数和限制类型
function pay(type: string, price: number) {
    let pay: PayInterface  //实例显然时类的对象,也需要满足规范,使pay可以更具switch去使用对应类内方法
    switch (type) {
        case 'alipay':  //进行归类然后创建实例去使用实例方法
            pay = new AliPay(); 
            break;    //如果满足就退出,提高效率
        case 'wepay':
            pay = new WePay();
    }
    pay.handle(price)   //泛红,因为前面赋值时使用过了pay,用于约束类型
}