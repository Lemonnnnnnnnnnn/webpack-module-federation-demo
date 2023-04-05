# 📦 webpack5 Module Federation 入门案例

本项目是一个 webpack5 的 Module Federation 入门案例，旨在帮助开发者更好地理解和使用 Module Federation。

## 🚀 快速开始

1. 克隆本项目

   ```bash
   git clone https://github.com/yourusername/webpack5-module-federation-demo.git
   ```

2. 安装依赖

   ```bash
   cd webpack5-module-federation-demo
   npm install
   ```

3. 启动应用

   ```bash
   npm run bootstrap
   npm run start
   ```

## 💡 项目说明

本项目使用了两个独立的 webpack 应用：

- `ui-lib`：运行在 `http://localhost:4000` 端口，提供了一个包含一个按钮的页面
- `app`：运行在 `http://localhost:3000` 端口，读取ui-lib的按钮并进行展示

`ui-lib` 和 `app` 之间使用了 Module Federation 进行了模块共享，在 `app` 中使用了 `ui-lib` 中的模块。

## 📚 技术栈

- webpack5
- Module Federation
- React
- lerna
