# 前端入门交互式教程

一个交互式的前端入门教程，通过实时演示和动手实践，帮助初学者快速掌握HTML、CSS和JavaScript的基础知识。

## 项目特点

- 🎯 **交互式学习**：通过实时演示和动手实践，直观理解前端概念
- 📚 **循序渐进**：从HTML基础到JavaScript进阶，由浅入深
- 🎨 **可视化效果**：每个概念都配有实时预览，所见即所得
- 💡 **实践导向**：通过实际案例学习，快速掌握实用技能
- 🚀 **现代化工具**：使用Storybook构建，提供最佳开发体验

## 教程内容

### HTML基础
- 基础元素
  - 文本元素
  - 块级元素
  - 内联元素
  - 元素嵌套
  - HTML属性
- 常用元素
  - 列表元素
  - 表格元素
  - 表单元素
  - 多媒体元素

### CSS基础
- 样式与选择器
  - 基础样式属性
  - 文本样式
  - CSS选择器
  - 伪类选择器
  - 盒模型
  - 布局（Flexbox和Grid）
  - 定位

### JavaScript基础
- 基础语法
  - 变量和数据类型
  - 函数
  - DOM操作
  - 事件处理
  - 动画效果
- 实战案例
  - 下拉菜单
  - 标签页
  - 聊天室示例

## 快速开始

1. 克隆仓库
```bash
git clone https://github.com/ZreXoc/frontend-interactive-tutorial.git
cd frontend-interactive-tutorial
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm run storybook
```

4. 在浏览器中打开 http://localhost:6006

## 技术栈

- [Storybook](https://storybook.js.org/) - 用于构建UI组件和页面
- [TypeScript](https://www.typescriptlang.org/) - 提供类型安全
- [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML) - 网页结构
- [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) - 样式设计
- [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) - 交互逻辑

## 项目结构

```
frontend-interactive-tutorial/
├── stories/                # 教程内容
│   ├── html/              # HTML相关教程
│   ├── css/               # CSS相关教程
│   └── js/                # JavaScript相关教程
├── src/                   # 源代码
├── public/                # 静态资源
└── package.json          # 项目配置
```