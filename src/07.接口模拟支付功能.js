// 支付方式(不同类模拟)
var AliPay = /** @class */ (function () {
    function AliPay() {
    }
    AliPay.prototype.handle = function (price) {
        console.log("\u652F\u4ED8\u5B9D\u4ED8\u6B3E".concat(price, "\u5143"));
    };
    return AliPay;
}());
var WePay = /** @class */ (function () {
    function WePay() {
    }
    WePay.prototype.handle = function (price) {
        console.log("\u5FAE\u4FE1\u626B\u7801\u4ED8\u6B3E".concat(price, "\u5143"));
    };
    return WePay;
}());
// 括号接收传递的参数和限制类型
function pay(type, price) {
    var pay; //实例显然时类的对象,也需要满足规范
    switch (type) {
        case 'alipay': //进行归类
            pay = new AliPay();
            break; //如果满足就退出,提高效率
        case 'wepay':
            pay = new WePay();
    }
    pay.handle(price);
}
