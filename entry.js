requirejs.config({
  // 默认任意模块 ID 都从 js/lib 目录中加载  
  baseUrl: 'lib',
  // 此外，如果模块 ID 以 "app" 开头，则会从 js/app 目录加载
  // paths 配置相对于 baseUrl 的路径规则，同时不要包含文件后缀 (.js)，因为 paths 的配置支持指向目录
  paths: {
    app: '../app',
    dayjs: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/dayjs/1.10.8/dayjs.min'
  }
});

// 开始执行应用逻辑
require(['app/sub'], function (sub) {
  console.log(sub)
  // 当 app/sub 模块加载完成之后，当前函数被执行
});

// 远程模块
require(['dayjs'], function (dayjs) {
  console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
});

// 使用 commonjs 模块
require(["app/goods"], function (goods) {
  goods.addToCart();
});