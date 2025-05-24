import type { Meta, StoryObj } from "@storybook/html";
import { createElement } from "./Element";
import type { ElementProps } from "./Element";

const meta = {
  title: "前端入门交互式教程/01.HTML基础/01.HTML元素",
  render: () => createElement(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

// 基础元素示例
export const BasicElements: Story = {
  render: (args) => createElement(args as ElementProps),
  args: {
    elementType: "p",
    content: "我能吞下玻璃而不伤身体。",
  },
  argTypes: {
    elementType: {
      control: "select",
      options: ["div", "p", "h1", "h2", "h3"],
      description: "选择块级元素类型",
    },
  },
};

// 块级元素阶段
export const BlockElements: Story = {
  render: (args) => createElement(args as ElementProps),
  args: {
    blockType: "div",
    content:
      "我能吞下玻璃，我不毀受傷",
    multiple: 3,
  },
  parameters: {
    controls: {
      include: ["blockType", "content"],
    },
  },
  argTypes: {
    blockType: {
      control: "select",
      options: ["div", "p", "h1", "h2", "h3"],
      description: "选择块级元素类型",
    },
  },
};

// 内联元素阶段
export const InlineElements: Story = {
  render: (args) => createElement(args as ElementProps),
  args: {
    inlineType: "span",
    content:
      "我能吞下玻璃而不伤身体，还有一件事",
    multiple: 3,
  },
  parameters: {
    controls: {
      include: ["inlineType", "content"],
    },
  },
  argTypes: {
    inlineType: {
      control: "select",
      options: ["span", "strong", "em", "a", "i"],
      description: "选择内联元素类型",
    },
  },
};

// 元素嵌套阶段
export const NestedElements: Story = {
  render: (args) => createElement(args as ElementProps),
  args: {
    elementType: undefined,
    blockType: "p",
    content: "我能吞下玻璃",
    nestedContent: "而不伤身体",
    nestedElementType: "em",
    multiple: 3,
  },
  parameters: {
    controls: {
      include: ["blockType", "content", "nestedContent", "nestedElementType"],
    },
  },
  argTypes: {
    blockType: {
      control: "select",
      options: ["div", "p", "h1", "h2", "h3"],
      description: "选择外层块级元素类型",
    },
    nestedElementType: {
      control: "select",
      options: ["span", "strong", "em", "i"],
      description: "选择内层元素类型",
    },
  },
};

// 属性阶段
export const ElementWithAttributes: Story = {
  render: (args) => createElement(args as ElementProps),
  args: {
    elementType: "div",
    content:
      "这是一个可以自定义样式的元素，试试调整下面的属性，看看会发生什么变化！",
    id: "unique-id",
    className: "highlight-box",
    backgroundColor: "#f0f0f0",
    color: "#333333",
    width: 200,
    height: 100,
    padding: 10,
    margin: 10,
    border: "1px solid #ccc",
    borderRadius: 4,
    multiple: 2,
  },
  parameters: {
    controls: {
      include: [
        "elementType",
        "content",
        "id",
        "className",
        "backgroundColor",
        "color",
        "width",
        "height",
        "padding",
        "margin",
        "border",
        "borderRadius",
      ],
    },
  },
  argTypes: {
    elementType: {
      control: "select",
      options: ["div", "p", "span"],
      description: "选择元素类型",
    },
    id: {
      control: "text",
      description: "元素的唯一标识符，就像给元素起个名字",
    },
    className: {
      control: "text",
      description: "元素的类名，可以给多个元素设置相同的样式",
    },
    backgroundColor: {
      control: "color",
      description: "背景颜色，让元素看起来更有特色",
    },
    color: {
      control: "color",
      description: "文字颜色，让内容更加醒目",
    },
    width: {
      control: { type: "range", min: 50, max: 500, step: 10 },
      description: "宽度（像素），调整元素的大小",
    },
    height: {
      control: { type: "range", min: 50, max: 500, step: 10 },
      description: "高度（像素），调整元素的大小",
    },
    padding: {
      control: { type: "range", min: 0, max: 50, step: 1 },
      description: "内边距（像素），让内容与边框保持适当距离",
    },
    margin: {
      control: { type: "range", min: 0, max: 50, step: 1 },
      description: "外边距（像素），让元素之间保持适当距离",
    },
    border: {
      control: "text",
      description: "边框样式，给元素添加边框",
    },
    borderRadius: {
      control: { type: "range", min: 0, max: 50, step: 1 },
      description: "圆角大小（像素），让元素看起来更柔和",
    },
  },
};

export const Default: Story = {};
