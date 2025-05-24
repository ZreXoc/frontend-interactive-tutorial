import type { Meta, StoryObj } from '@storybook/html';
import { createList, createTable, createForm, createMedia, createBlockquote, createCode } from './CommonElements';
import type { ListProps, TableProps, FormProps, MediaProps, BlockquoteProps, CodeProps } from './CommonElements';

const meta = {
  title: '前端入门交互式教程/01.HTML基础/02.常用元素',
  render: () => createCommonElements(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

// 列表元素示例
export const Lists: Story = {
  render: (args) => createList(args as ListProps),
  args: {
    type: 'ul',
    items: ['这是第一个列表项', '这是第二个列表项', '这是第三个列表项'],
    className: 'custom-list',
    style: 'padding-left: 20px;',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['ul', 'ol'],
      description: '选择列表类型（无序列表或有序列表）',
    },
    items: {
      control: 'object',
      description: '列表项内容',
    },
    className: {
      control: 'text',
      description: '列表的类名',
    },
    style: {
      control: 'text',
      description: '列表的样式',
    },
  },
};

// 表格元素示例
export const Tables: Story = {
  render: (args) => createTable(args as TableProps),
  args: {
    headers: ['什么是前端?', '必须跑在浏览器上', '得面向用户', '不是最后面就行'],
    rows: [
      ['必须是三大件', '网页设计是前端', 'electron是前端', 'nodejs也是前端'],
      ['至少得是程序', 'WebAssembly是前端', '编译器前端是前端', '音乐播放器也是前端'],
      ['是个东西就行', 'flash小游戏是前端', 'HR是前端', '后端也是前端'],
    ],
    className: 'custom-table',
    style: 'border-collapse: collapse; width: 100%; text-align: center; border: 1px solid #ccc;',
  },
  argTypes: {
    headers: {
      control: 'object',
      description: '表格头部',
    },
    rows: {
      control: 'object',
      description: '表格内容',
    },
    className: {
      control: 'text',
      description: '表格的类名',
    },
    style: {
      control: 'text',
      description: '表格的样式',
    },
  },
};

// 表单元素示例
export const Forms: Story = {
  render: (args) => createForm(args as FormProps),
  args: {
    groups: [
      {
        type: 'text',
        label: '用户名：',
        placeholder: '请输入用户名',
        className: 'form-group',
        style: 'margin: 10px 0;',
      },
      {
        type: 'password',
        label: '密码：',
        placeholder: '请输入密码',
        className: 'form-group',
        style: 'margin: 10px 0;',
      },
      {
        type: 'email',
        label: '邮箱：',
        placeholder: '请输入邮箱地址',
        className: 'form-group',
        style: 'margin: 10px 0;',
      },
      {
        type: 'number',
        label: '年龄：',
        placeholder: '请输入年龄',
        className: 'form-group',
        style: 'margin: 10px 0;',
      },
      {
        type: 'select',
        label: '城市：',
        options: ['北京', '上海', '广州', '深圳'],
        className: 'form-group',
        style: 'margin: 10px 0;',
      },
      {
        type: 'radio',
        label: '性别：',
        options: ['男', '女', '其他'],
        className: 'form-group',
        style: 'margin: 10px 0;',
      },
      {
        type: 'checkbox',
        label: '兴趣爱好：',
        options: ['阅读', '音乐', '运动', '旅游'],
        className: 'form-group',
        style: 'margin: 10px 0;',
      },
      {
        type: 'textarea',
        label: '个人简介：',
        placeholder: '请输入个人简介',
        rows: 4,
        className: 'form-group',
        style: 'margin: 10px 0;',
      },
      {
        type: 'submit',
        label: '',
        value: '提交',
        className: 'form-group',
        style: 'margin: 10px 0;',
      },
    ],
    className: 'custom-form',
    style: 'max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px;',
  },
  argTypes: {
    groups: {
      control: 'object',
      description: '表单组配置',
    },
    className: {
      control: 'text',
      description: '表单的类名',
    },
    style: {
      control: 'text',
      description: '表单的样式',
    },
  },
};

// 多媒体元素示例
export const Media: Story = {
  render: (args) => createMedia(args as MediaProps),
  args: {
    type: 'video',
    src: 'https://daisu.ke/daisuke-short.mp4',
    controls: true,
    alt: '示例图片',
    width: 200,
    height: 300,
    className: 'custom-media',
    style: 'border-radius: 8px;',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['img', 'video', 'audio'],
      description: '多媒体元素类型',
    },
    src: {
      control: 'text',
      description: '媒体源地址',
    },
    alt: {
      control: 'text',
      description: '图片的替代文本',
    },
    width: {
      control: { type: 'range', min: 100, max: 800, step: 50 },
      description: '宽度（像素）',
    },
    height: {
      control: { type: 'range', min: 100, max: 800, step: 50 },
      description: '高度（像素）',
    },
    controls: {
      control: 'boolean',
      description: '是否显示控制条（用于视频和音频）',
    },
    autoplay: {
      control: 'boolean',
      description: '是否自动播放（用于视频和音频）',
    },
    loop: {
      control: 'boolean',
      description: '是否循环播放（用于视频和音频）',
    },
    className: {
      control: 'text',
      description: '多媒体元素的类名',
    },
    style: {
      control: 'text',
      description: '多媒体元素的样式',
    },
  },
};

// 引用块元素示例
export const Blockquotes: Story = {
  render: (args) => createBlockquote(args as BlockquoteProps),
  args: {
    content: '这是一段引用文本，通常用于引用他人的话或内容。',
    cite: 'https://example.com',
    className: 'custom-blockquote',
    style: 'border-left: 4px solid #ccc; padding-left: 20px; margin: 20px 0; font-style: italic;',
  },
  argTypes: {
    content: {
      control: 'text',
      description: '引用内容',
    },
    cite: {
      control: 'text',
      description: '引用来源URL',
    },
    className: {
      control: 'text',
      description: '引用块的类名',
    },
    style: {
      control: 'text',
      description: '引用块的样式',
    },
  },
};

// 代码元素示例
export const Codes: Story = {
  render: (args) => createCode(args as CodeProps),
  args: {
    content: 'const greeting = "Hello, World!";\nconsole.log(greeting);',
    isPre: true,
    language: 'javascript',
    className: 'custom-code',
    style: 'background-color: #f5f5f5; padding: 15px; border-radius: 4px; font-family: monospace;',
  },
  argTypes: {
    content: {
      control: 'text',
      description: '代码内容',
    },
    isPre: {
      control: 'boolean',
      description: '是否使用pre标签包裹',
    },
    language: {
      control: 'text',
      description: '代码语言（用于语法高亮）',
    },
    className: {
      control: 'text',
      description: '代码元素的类名',
    },
    style: {
      control: 'text',
      description: '代码元素的样式',
    },
  },
};