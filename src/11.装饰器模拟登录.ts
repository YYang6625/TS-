// 装饰器就是一些可以复用的函数，为了修饰函数，装饰器工厂就是这些函数的集合
// 案例一，验证用户是否登录
// 定义用户信息 
const user31 = {
    name: "奕扬",
    isLock: true,
}
// 定义方法装饰器针对函数
const AccessDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol,
    descriptor: PropertyDescriptor) => { //按住ctrl移动至propertyDecorator可知只是一个接口，规范
    const method = descriptor.value    //value是store方法中{}的内容
    if (user31.isLock === true) {   //利用isLock判断是否登录
        return method()
    }
    alert("请登录后操作")
    location.href = './07.接口模拟在线支付.html'  //假设跳转至登陆页面
}
class Login{
    show() {
        console.log("显示文章")
    }
    @AccessDecorator
    store() {
        console.log("保存文章")
    }
}
new Login().store()

// 案例进阶，根据权限控制访问方法（核心逻辑）
type user32Type = { name: string, permissions:string[],isLock: boolean}  //项目中一般有单独保存的权限表，用户权限也有单独保存的数据，只不过这里是单独设置的
const user32 = {
    name: "奕扬",
    isLock: true,
    permissions:["store","manage"]  //表示为用户权限
}
// 利用装饰器工厂进行完善(传递参数并返回一个方法装饰器)  定义装饰器是直接定义成装饰器
const AccessDecorator2 = (keys:string[]): MethodDecorator => {  //keys:string[],可追加字符串数组参数
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const validate = ():any => {
            keys.every(k => { //every遍历方法，判断数组元素是否都满足某个条件，有一个不满足就返回false
                return user32.permissions.includes(k) //include，判断是否存在某一个指定的值，存在t不存在f,(判断用户权限是否存在传递过来的每一个元素)
            })
        }
        descriptor.value = () => {
            if (validate()) {
                alert("验证通过")
                return location.href = "http://www.baidu.com"
            }
            alert("验证失败")
        }
    }
}

class Login2{
    show() {
        console.log("显示文章")
    }
    @AccessDecorator2(['store','manage'])  //传递用户权限
    store() {
        console.log("保存文章")  //显示用户内容
    }
}
new Login2().store()