> 注意，webpack 不会更改代码中除 `import` 和 `export` 语句以外的部分。如果正在使用其它 [ES2015 特性](http://es6-features.org/)，请确保 webpack 的 loader 系统 中使用了像 Babel 一样的 [转译器](https://webpack.docschina.org/loaders/#transpiling)。

> 安装一个将被打包到`生产环境` bundle 的包时，应该使用 `npm install --save`；而安装一个用于`开发环境`的包时（例如代码检查工具、测试库等），应该使用 `npm install --save-dev`。

> webpack 最出色的功能之一就是除了引入 JavaScript，还可以通过 loader 或内置的 [资源模块](https://webpack.docschina.org/guides/asset-modules/) 引入任何其他类型的文件。

> 不要使用 webpack 编译不可信的代码。它可能会在计算机，远程服务器或者在 web 应用程序使用者的浏览器中执行恶意代码。

# 管理资源

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

> xml-loader csv-loader

> JSON 数据内置支持，不需要额外的 loader

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
    ],
  },
};
```

```js
// csv 数据格式
[
  ["id", "name", "age", "city"],
  ["1", "John Doe", "28", "New York"],
  ["2", "Jane Smith", "34", "Los Angeles"],
  ["3", "Michael Brown", "22", "Chicago"],
]

// xml 数据格式
{
    "catalog": {
        "book": [
            {
                "$": {
                    "id": "bk101"
                },
                "author": [
                    "Gambardella, Matthew"
                ],
                "title": [
                    "XML Developer's Guide"
                ],
                "genre": [
                    "Computer"
                ],
                "price": [
                    "44.95"
                ],
                "publish_date": [
                    "2000-10-01"
                ],
                "description": [
                    "An in-depth look at creating applications with XML."
                ]
            },
        ]
    }
}
```

> 在使用 d3 等工具实现某些数据可视化时，这个功能极其有用。这将帮助不用在运行时发送请求获取和解析数据，而是在构建过程中将其提前加载到模块中，以便浏览器加载模块后，可以直接访问解析过的数据。

### [自定义 JSON 模块解析器](https://webpack.docschina.org/guides/asset-management/#customize-parser-of-json-modules)

# 管理输出

## [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack output management",
    }),
  ],
};
```

## 清理 dist 文件夹

```js{5}
module.exports = {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 清理dist文件
  },
};
```

## manifest 拓展阅读

关于 [WebpackManifestPlugin](https://github.com/shellscape/webpack-manifest-plugin) 如何处理 webpack 的 manifest 数据

# 开发环境

## Source Map

❓ 为什么需要 source map

> 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。例如，如果将三个源文件（a.js，b.js 和 c.js）打包到一个 bundle（bundle.js）中，而其中一个源文件包含错误，那么堆栈跟踪就会直接指向到 bundle.js，却无法准确知道错误来自于哪个源文件，所以这种提示通常无法提供太多帮助。

```js
module.exports = {
  devtool: "inline-source-map", // more config https://webpack.docschina.org/configuration/devtool/
};
```

## 开发工具

### 观察模式 --watch

虽然可以监听文件的变化，但是不能自动刷新浏览器

### [webpack-dev-server](https://webpack.docschina.org/guides/development/#using-webpack-dev-server)

本地服务，将 bundle 写进内存，会刷新整页面[模块热替换](https://webpack.docschina.org/guides/hot-module-replacement/)。

### [webpack-dev-middleware](https://webpack.docschina.org/guides/development/#using-webpack-dev-middleware)

webpack-dev-middleware 是一个包装器，它可以把 webpack 处理过的文件发送到 server。

🤔：这是否就可以实现服务端渲染？
