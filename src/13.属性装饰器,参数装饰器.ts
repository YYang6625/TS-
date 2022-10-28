// 属性装饰器
// 属性装饰器有两个参数,第一参数分静态方法(构造函数)和普通方法(原型对象),第二个是属性名称
const PropDecorator: PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
) => {
  // 可以在Object.defineProperty(target,propertyKey,{})中的{}设置一些get,set
  // get,set就可以对设置的属性值或者要读取的属性值进行修改
  Object.defineProperty(target, propertyKey, {
    get: () => {}, //访问器
    set: () => {}, //
  });
};

// 参数装饰器修改属性(参数前两个一致,第三个是指参数所在的位置)
const ParamsDecorator: ParameterDecorator = (...args: any[]) => {
  console.log(args); //打印三个参数分别为 {}(普通函数返回原型对象) show(方法名称) 1(下标位置)
};
class Shuxing {
  @PropDecorator
  public static title: string | undefined;
  // 参数装饰器修饰参数
  public show(id: number = 1, @ParamsDecorator content: string) {}
}
// 同时使用参数装饰器和方法装饰器,先执行参数装饰器,再执行方法装饰器

// 还有这针对参数修饰器的元数据,也就是参数内存数据Reflect-metadata 以及参数的defineMetadata和getMetadata(个人觉得使用较少,并且不方便,详细查看后盾人ts第五章)
