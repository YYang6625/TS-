//创建一个属性修饰器,自带两个参数
const RandomColorDecoratoe: PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
) => {
  const colors: string[] = ["red", "green", "yellow", "blue", "#564283"];
  // 普通函数,在原型对象上添加方法
  Object.defineProperty(target, propertyKey, {
    get() {
      return colors[Math.floor(Math.random() * colors.length)]; //随机下标导致随机颜色
      // Math.random()返回一个0-1的数字,×数组长度并取floor成整数
    },
  });
};
class Random {
  @RandomColorDecoratoe //装饰类中的属性
  color: string | undefined;
  public draw() {
    //方法创建一个随机颜色元素盒子
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div style="hight:50px;width:50px;background-color:${this.color}">'奕扬'</div>`
    );
  }
}

new Random().draw();
