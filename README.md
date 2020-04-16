# describe

这是石头用来测试代码的环境。
第一次使用前需要安装依赖。即：在项目根目录下执行`npm i`

# usage

1. 写一个js代码的文件`first.js`
  ```
  function hi(name) {
    console.log(`str ${name}`)
  }
  hi()
  ```
2. 在入口文件`src/index.js`引入no.1的文件。
  ```
  import hi from '<path>/first.js'
  ```
3. 启动本地的热更新服务。
  ```
  npm run dev
  ```
4. 在浏览器中打开`http://localhost:8080/#/`

```
npm dev
// 使用本地热更新启动服务。

npm start
// 与npm dev一样，但是没写完，所以不能正常运行。

npm test
// 测试

npm build
// 打包项目。输出目录一般在项目根目录的dist目录。
```

# config

由于这个石头配置的测试代码的环境，所以该项目的配置以石头的习惯为标准。
下面说了一项目的配置。（有可能说不全）

## 项目结构

```
root
|--dist               // 打包后的输出目录。
|--lib                // 记项目使用的文件的库。
|--node_modules       // npm包依赖的目录。
|--src                // 原文件根目录
    |-- index.js      // 默认的入口文件。
    |-- demo.js       // 示例。
|--.gitignore         //
|--package-lock.json  // 包的lock文件
|--package.json       // 包说明文档
|--README.md          //
|-- webpack.config.js // webpack的配置文件。这里只有最基本的配置。
```

## 入口文件

入口文件在`src/index.js`.
- 一般不在这里写测试代码。
- 一般引入测试代码的文件。

