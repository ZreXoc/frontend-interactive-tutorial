import type { StoryObj, Meta } from '@storybook/html';
import { createCSSElement } from './CSS';
import type { CSSProps } from './CSS';
import { createFlexElement } from './CSS';
import { createGridElement } from './CSS';

type Story = StoryObj;
export default {
  title: '前端入门交互式教程/CSS基础/样式与选择器',
} satisfies Meta;

// DOM结构示例
export const DOMStructure: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f5f5f5';
    container.style.borderRadius = '4px';

    const html = document.createElement('div');
    html.style.marginLeft = '0px';
    html.style.padding = '10px';
    html.style.border = '1px solid #333';
    html.innerHTML = '&lt;html&gt;';

    const head = document.createElement('div');
    head.style.marginLeft = '20px';
    head.style.padding = '10px';
    head.style.border = '1px solid #666';
    head.innerHTML = '&lt;head&gt;';

    const body = document.createElement('div');
    body.style.marginLeft = '20px';
    body.style.padding = '10px';
    body.style.border = '1px solid #666';
    body.innerHTML = '&lt;body&gt;';

    const div = document.createElement('div');
    div.style.marginLeft = '40px';
    div.style.padding = '10px';
    div.style.border = '1px solid #999';
    div.innerHTML = '&lt;div&gt;';

    const p = document.createElement('div');
    p.style.marginLeft = '60px';
    p.style.padding = '10px';
    p.style.border = '1px solid #999';
    p.innerHTML = '&lt;p&gt;这是段落文本&lt;/p&gt;';

    div.appendChild(p);
    div.appendChild(p.cloneNode(true));
    div.appendChild(p.cloneNode(true));
    body.appendChild(div);
    html.appendChild(head);
    html.appendChild(body);
    container.appendChild(html);

    return container;
  },
};

// CSS引入方式示例
export const CSSImport: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f5f5f5';
    container.style.borderRadius = '4px';

    const code = document.createElement('pre');
    code.style.backgroundColor = '#fff';
    code.style.padding = '15px';
    code.style.borderRadius = '4px';
    code.style.overflow = 'auto';
    code.innerHTML = `<!-- 1. 内联样式 -->
<p style="color: red; font-size: 16px;">这是红色文字</p>

<!-- 2. 内部样式表 -->
<head>
  <style>
    p { color: red; font-size: 16px; }
  </style>
</head>

<!-- 3. 外部样式表 -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>`;

    container.appendChild(code);
    return container;
  },
};

// 基础样式示例
export const BasicStyles: Story = {
  render: (args) => createCSSElement({
    id: 'basic-styles',
    content: args.content,
    styles: {
      fontSize: args.fontSize,
      color: args.color,
      backgroundColor: args.backgroundColor,
      width: args.width,
      height: args.height,
      padding: args.padding,
      margin: args.margin,
      border: args.border,
      borderRadius: args.borderRadius,
    },
  }),
  args: {
    content: '这是一个示例文本',
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#f0f0f0',
    width: 200,
    height: 100,
    padding: 10,
    margin: 10,
    border: '1px solid #ccc',
    borderRadius: 4,
  },
  parameters: {
    controls: {
      include: [
        'content',
        'fontSize',
        'color',
        'backgroundColor',
        'width',
        'height',
        'padding',
        'margin',
        'border',
        'borderRadius',
      ],
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: '元素内容',
    },
    fontSize: {
      control: { type: 'range', min: 12, max: 32, step: 1 },
      description: '字体大小',
    },
    color: {
      control: 'color',
      description: '文字颜色',
    },
    backgroundColor: {
      control: 'color',
      description: '背景颜色',
    },
    width: {
      control: { type: 'range', min: 50, max: 500, step: 10 },
      description: '宽度',
    },
    height: {
      control: { type: 'range', min: 50, max: 500, step: 10 },
      description: '高度',
    },
    padding: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      description: '内边距',
    },
    margin: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      description: '外边距',
    },
    border: {
      control: 'text',
      description: '边框样式',
    },
    borderRadius: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      description: '圆角大小',
    },
  },
};

// 文本样式示例
export const TextStyles: Story = {
  render: (args) => createCSSElement({
    id: 'text-styles',
    content: args.content,
    styles: {
      fontSize: args.fontSize,
      color: args.color,
      fontWeight: args.fontWeight,
      textDecoration: args.textDecoration,
      textAlign: args.textAlign,
      backgroundColor: args.backgroundColor,
      padding: args.padding,
      width: args.width,
    },
  }),
  args: {
    content: '这是一个示例文本',
    fontSize: 16,
    color: '#333333',
    fontWeight: 'normal',
    textDecoration: 'none',
    textAlign: 'left',
    backgroundColor: '#f0f0f0',
    padding: 10,
    width: 200,
  },
  parameters: {
    controls: {
      include: [
        'content',
        'fontSize',
        'color',
        'fontWeight',
        'textDecoration',
        'textAlign',
      ],
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: '元素内容',
    },
    fontSize: {
      control: { type: 'range', min: 12, max: 32, step: 1 },
      description: '字体大小',
    },
    color: {
      control: 'color',
      description: '文字颜色',
    },
    fontWeight: {
      control: 'select',
      options: ['normal', 'bold', 'lighter', 'bolder'],
      description: '字体粗细',
    },
    textDecoration: {
      control: 'select',
      options: ['none', 'underline', 'line-through', 'overline'],
      description: '文字装饰',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: '文字对齐',
    },
  },
};

// 选择器示例
export const Selectors: Story = {
  render: (args) => createCSSElement({
    id: 'selectors',
    content: args.content,
    selector: args.selector,
    selectorName: args.selectorName,
    styles: {
      fontSize: args.fontSize,
      color: args.color,
      backgroundColor: args.backgroundColor,
      padding: args.padding,
      border: args.border,
      borderRadius: args.borderRadius,
    },
    showDOM: true,
  }),
  args: {
    content: '这是一个示例元素',
    selector: 'class',
    selectorName: 'my-class',
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#f0f0f0',
    padding: 10,
    border: '1px solid #ccc',
    borderRadius: 4,
  },
  parameters: {
    controls: {
      include: [
        'content',
        'selector',
        'selectorName',
        'fontSize',
        'color',
        'backgroundColor',
        'padding',
        'border',
        'borderRadius',
      ],
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: '元素内容',
    },
    selector: {
      control: 'select',
      options: ['id', 'class', 'element', 'universal', 'descendant', 'child', 'adjacent', 'sibling', 'hover', 'active', 'focus', 'first-child', 'last-child', 'nth-child'],
      description: '选择器类型',
    },
    selectorName: {
      control: 'text',
      description: '选择器名称',
    },
    fontSize: {
      control: { type: 'range', min: 12, max: 32, step: 1 },
      description: '字体大小',
    },
    color: {
      control: 'color',
      description: '文字颜色',
    },
    backgroundColor: {
      control: 'color',
      description: '背景颜色',
    },
    padding: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      description: '内边距',
    },
    border: {
      control: 'text',
      description: '边框样式',
    },
    borderRadius: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      description: '圆角大小',
    },
  },
};

// 添加伪类选择器示例
export const PseudoClasses: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f5f5f5';
    container.style.borderRadius = '4px';

    const style = document.createElement('style');
    style.textContent = `
      .pseudo-example {
        padding: 20px;
        background-color: white;
        border-radius: 4px;
        margin-bottom: 20px;
      }

      .pseudo-example h3 {
        margin-top: 0;
        color: #333;
      }

      .pseudo-example .demo {
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .pseudo-example .demo button {
        padding: 8px 16px;
        margin: 5px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .pseudo-example .demo button:hover {
        background-color: #4a90e2;
        color: white;
      }

      .pseudo-example .demo button:active {
        background-color: #357abd;
        transform: scale(0.95);
      }

      .pseudo-example .demo input {
        padding: 8px;
        margin: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .pseudo-example .demo input:focus {
        outline: none;
        border-color: #4a90e2;
        box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
      }

      .pseudo-example .demo .list {
        margin: 10px 0;
      }

      .pseudo-example .demo .list p:first-child {
        color: #4a90e2;
        font-weight: bold;
      }

      .pseudo-example .demo .list p:last-child {
        color: #e74c3c;
        font-weight: bold;
      }

      .pseudo-example .demo .list p:nth-child(odd) {
        background-color: #f8f9fa;
      }

      .pseudo-example .demo .list p:nth-child(even) {
        background-color: #f0f0f0;
      }
    `;

    container.appendChild(style);

    // 创建示例区域
    const createExample = (title: string, content: string) => {
      const example = document.createElement('div');
      example.className = 'pseudo-example';
      
      const heading = document.createElement('h3');
      heading.textContent = title;
      
      const demo = document.createElement('div');
      demo.className = 'demo';
      demo.innerHTML = content;
      
      example.appendChild(heading);
      example.appendChild(demo);
      return example;
    };

    // 添加各种伪类示例
    container.appendChild(createExample(':hover 伪类', `
      <button>悬停我</button>
      <p>当鼠标悬停在按钮上时，按钮会改变颜色</p>
    `));

    container.appendChild(createExample(':active 伪类', `
      <button>点击我</button>
      <p>当按钮被点击时，按钮会缩小并改变颜色</p>
    `));

    container.appendChild(createExample(':focus 伪类', `
      <input type="text" placeholder="点击输入框">
      <p>当输入框获得焦点时，会显示蓝色边框和阴影</p>
    `));

    container.appendChild(createExample(':first-child 和 :last-child 伪类', `
      <div class="list">
        <p>第一个元素（蓝色）</p>
        <p>中间元素</p>
        <p>中间元素</p>
        <p>最后一个元素（红色）</p>
      </div>
    `));

    container.appendChild(createExample(':nth-child 伪类', `
      <div class="list">
        <p>第1个元素（浅灰色背景）</p>
        <p>第2个元素（深灰色背景）</p>
        <p>第3个元素（浅灰色背景）</p>
        <p>第4个元素（深灰色背景）</p>
      </div>
    `));

    return container;
  },
};

// 盒模型示例
export const BoxModel: Story = {
  render: (args) => createCSSElement(args as CSSProps),
  args: {
    id: 'box-model',
    selector: 'class',
    selectorName: 'box-model',
    content: '盒模型示例',
    styles: {
      width: 200,
      height: 100,
      padding: 20,
      margin: 20,
      border: '2px solid #333',
      backgroundColor: '#f0f0f0',
    },
  },
  parameters: {
    controls: {
      include: ['width', 'height', 'padding', 'margin', 'border'],
    },
  },
  argTypes: {
    width: {
      control: { type: 'range', min: 100, max: 500, step: 10 },
      description: '内容区域宽度',
    },
    height: {
      control: { type: 'range', min: 50, max: 300, step: 10 },
      description: '内容区域高度',
    },
    padding: {
      control: { type: 'range', min: 0, max: 50, step: 5 },
      description: '内边距',
    },
    margin: {
      control: { type: 'range', min: 0, max: 50, step: 5 },
      description: '外边距',
    },
    border: {
      control: 'text',
      description: '边框样式',
    },
  },
};

// 布局示例（Flexbox）
export const Layout: Story = {
  render: (args) => createFlexElement({
    id: 'layout',
    content: args.content,
    styles: {
      flexDirection: args.flexDirection,
      justifyContent: args.justifyContent,
      alignItems: args.alignItems,
      flexWrap: args.flexWrap,
      gap: args.gap,
      width: args.width,
      height: args.height,
      backgroundColor: args.backgroundColor,
      padding: args.padding,
    },
    multiple: args.multiple,
  }),
  args: {
    content: 'Flexbox示例',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    gap: '10px',
    width: 500,
    height: 200,
    backgroundColor: '#f0f0f0',
    padding: 20,
    multiple: 4,
  },
  parameters: {
    controls: {
      include: [
        'content',
        'flexDirection',
        'justifyContent',
        'alignItems',
        'flexWrap',
        'gap',
        'width',
        'height',
        'multiple',
      ],
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: '元素内容',
    },
    flexDirection: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: '主轴方向',
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: '主轴对齐',
    },
    alignItems: {
      control: 'select',
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      description: '交叉轴对齐',
    },
    flexWrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: '换行方式',
    },
    gap: {
      control: 'text',
      description: '元素间距',
    },
    width: {
      control: { type: 'range', min: 200, max: 800, step: 50 },
      description: '容器宽度',
    },
    height: {
      control: { type: 'range', min: 100, max: 400, step: 50 },
      description: '容器高度',
    },
    multiple: {
      control: { type: 'range', min: 1, max: 8, step: 1 },
      description: '元素数量',
    },
  },
};

// Grid布局示例
export const Grid: Story = {
  render: (args) => createGridElement({
    id: 'grid',
    content: args.content,
    styles: {
      gridTemplateColumns: args.gridTemplateColumns,
      gridTemplateRows: args.gridTemplateRows,
      gap: args.gap,
      width: args.width,
      height: args.height,
      backgroundColor: args.backgroundColor,
      padding: args.padding,
    },
    multiple: args.multiple,
  }),
  args: {
    content: 'Grid示例',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '10px',
    width: 600,
    height: 300,
    backgroundColor: '#f0f0f0',
    padding: 20,
    multiple: 6,
  },
  parameters: {
    controls: {
      include: [
        'content',
        'gridTemplateColumns',
        'gridTemplateRows',
        'gap',
        'width',
        'height',
        'multiple',
      ],
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: '元素内容',
    },
    gridTemplateColumns: {
      control: 'text',
      description: '列宽定义',
    },
    gridTemplateRows: {
      control: 'text',
      description: '行高定义',
    },
    gap: {
      control: 'text',
      description: '网格间距',
    },
    width: {
      control: { type: 'range', min: 300, max: 1000, step: 50 },
      description: '容器宽度',
    },
    height: {
      control: { type: 'range', min: 200, max: 600, step: 50 },
      description: '容器高度',
    },
    multiple: {
      control: { type: 'range', min: 1, max: 12, step: 1 },
      description: '元素数量',
    },
  },
};

// 定位示例
export const Positioning: Story = {
  render: (args) => createCSSElement({
    id: 'positioning',
    content: args.content,
    styles: {
      position: args.position,
      top: args.top,
      left: args.left,
      width: args.width,
      height: args.height,
      backgroundColor: args.backgroundColor,
      border: args.border,
    },
  }),
  args: {
    content: '定位示例',
    position: 'relative',
    top: 20,
    left: 20,
    width: 200,
    height: 100,
    backgroundColor: '#f0f0f0',
    border: '1px solid #333',
  },
  parameters: {
    controls: {
      include: [
        'content',
        'position',
        'top',
        'left',
        'width',
        'height',
      ],
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: '元素内容',
    },
    position: {
      control: 'select',
      options: ['static', 'relative', 'absolute', 'fixed'],
      description: '定位方式',
    },
    top: {
      control: { type: 'range', min: -100, max: 100, step: 5 },
      description: '顶部偏移',
    },
    left: {
      control: { type: 'range', min: -100, max: 100, step: 5 },
      description: '左侧偏移',
    },
    width: {
      control: { type: 'range', min: 100, max: 500, step: 10 },
      description: '宽度',
    },
    height: {
      control: { type: 'range', min: 50, max: 300, step: 10 },
      description: '高度',
    },
  },
};