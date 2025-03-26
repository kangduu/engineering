# webpack

> 注意，webpack 不会更改代码中除 `import` 和 `export` 语句以外的部分。如果正在使用其它 [ES2015 特性](http://es6-features.org/)，请确保 webpack 的 loader 系统 中使用了像 Babel 一样的 [转译器](https://webpack.docschina.org/loaders/#transpiling)。

> 安装一个将被打包到`生产环境` bundle 的包时，应该使用 `npm install --save`；而安装一个用于`开发环境`的包时（例如代码检查工具、测试库等），应该使用 `npm install --save-dev`。

> webpack 最出色的功能之一就是除了引入 JavaScript，还可以通过 loader 或内置的 [资源模块](https://webpack.docschina.org/guides/asset-modules/) 引入任何其他类型的文件。

> 不要使用 webpack 编译不可信的代码。它可能会在计算机，远程服务器或者在 web 应用程序使用者的浏览器中执行恶意代码。

## 处理 CSS

### 基础

1. style-loader
2. css-loader

### QA

❓ [sass](https://webpack.docschina.org/loaders/sass-loader) [less](https://webpack.docschina.org/loaders/less-loader) [postcss](https://webpack.docschina.org/loaders/postcss-loader) 等处理方式

❓ 如何 [压缩 CSS](https://webpack.docschina.org/plugins/mini-css-extract-plugin/#minimizing-for-production) 以便在生产环境中节省加载时间

### Future

1. CSS 原子化？

## 处理图像资源

webpack5 版本最新配置如下：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```

### QA

1. 如何处理 svg，并支持修改 svg 样式？

## 处理字体

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```

```css
@font-face {
  font-family: "MyFont";
  src: url("./tet.ttf");
}
```

## 加载数据（json、csv、tsc、xml、...）
