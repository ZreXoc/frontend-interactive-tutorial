import type { Meta, StoryObj } from '@storybook/html';
import { createDOMDemoElement } from './JS';

type Story = StoryObj;
export default {
  title: '前端入门交互式教程/JavaScript基础/基础语法',
} satisfies Meta;

// 变量和数据类型示例
export const Variables: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f5f5f5';
    container.style.borderRadius = '4px';

    const code = document.createElement('pre');
    code.style.backgroundColor = '#fff';
    code.style.padding = '15px';
    code.style.borderRadius = '4px';
    code.style.overflow = 'auto';
    code.innerHTML = `// 变量声明
let name = "${args.name}";
const age = ${args.age};
var hobby = "${args.hobby}";

// 数据类型
let isStudent = ${args.isStudent};
let score = ${args.score};
let skills = ${JSON.stringify(args.skills, null, 2)};

// 输出结果
console.log(name, age, hobby, isStudent, score, skills);`;

    container.appendChild(code);

    // 创建输出区域
    const output = document.createElement('div');
    output.style.marginTop = '20px';
    output.style.padding = '15px';
    output.style.backgroundColor = '#fff';
    output.style.borderRadius = '4px';
    output.innerHTML = `<h4>输出结果：</h4>
      <p>name: ${args.name}</p>
      <p>age: ${args.age}</p>
      <p>hobby: ${args.hobby}</p>
      <p>isStudent: ${args.isStudent}</p>
      <p>score: ${args.score}</p>
      <p>skills: ${JSON.stringify(args.skills)}</p>`;

    container.appendChild(output);
    return container;
  },
  args: {
    name: '小明',
    age: 18,
    hobby: '编程',
    isStudent: true,
    score: 95.5,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  argTypes: {
    name: {
      control: 'text',
      description: '字符串类型示例',
    },
    age: {
      control: { type: 'number', min: 0, max: 100 },
      description: '数字类型示例',
    },
    hobby: {
      control: 'text',
      description: '字符串类型示例',
    },
    isStudent: {
      control: 'boolean',
      description: '布尔类型示例',
    },
    score: {
      control: { type: 'number', min: 0, max: 100, step: 0.5 },
      description: '浮点数类型示例',
    },
    skills: {
      control: 'object',
      description: '数组类型示例',
    },
  },
};

// 函数示例
export const Functions: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f5f5f5';
    container.style.borderRadius = '4px';

    const code = document.createElement('pre');
    code.style.backgroundColor = '#fff';
    code.style.padding = '15px';
    code.style.borderRadius = '4px';
    code.style.overflow = 'auto';
    code.innerHTML = `// 函数声明
function greet(name) {
  return \`你好，\${name}！\`;
}

// 箭头函数
const add = (a, b) => a + b;

// 函数调用
const greeting = greet("${args.name}");
const sum = add(${args.num1}, ${args.num2});

// 输出结果
console.log(greeting);
console.log(sum);`;

    container.appendChild(code);

    // 创建输出区域
    const output = document.createElement('div');
    output.style.marginTop = '20px';
    output.style.padding = '15px';
    output.style.backgroundColor = '#fff';
    output.style.borderRadius = '4px';
    output.innerHTML = `<h4>输出结果：</h4>
      <p>greeting: 你好，${args.name}！</p>
      <p>sum: ${args.num1 + args.num2}</p>`;

    container.appendChild(output);
    return container;
  },
  args: {
    name: '小明',
    num1: 5,
    num2: 3,
  },
  argTypes: {
    name: {
      control: 'text',
      description: '函数参数示例',
    },
    num1: {
      control: { type: 'number', min: 0, max: 100 },
      description: '第一个数字',
    },
    num2: {
      control: { type: 'number', min: 0, max: 100 },
      description: '第二个数字',
    },
  },
};

// DOM操作示例
export const DOM: Story = {
  render: (args) => {
    return createDOMDemoElement({
      buttonText: args.buttonText,
      elementText: args.elementText,
      backgroundColor: args.backgroundColor,
      textColor: args.textColor,
    });
  },
  args: {
    buttonText: '添加元素',
    elementText: '元素',
    backgroundColor: '#4a90e2',
    textColor: '#ffffff',
  },
  argTypes: {
    buttonText: {
      control: 'text',
      description: '添加按钮文本',
    },
    elementText: {
      control: 'text',
      description: '元素文本前缀',
    },
    backgroundColor: {
      control: 'color',
      description: '元素背景颜色',
    },
    textColor: {
      control: 'color',
      description: '元素文字颜色',
    },
  },
};

// 动画示例
export const Animation: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f5f5f5';
    container.style.borderRadius = '4px';

    const code = document.createElement('pre');
    code.style.backgroundColor = '#fff';
    code.style.padding = '15px';
    code.style.borderRadius = '4px';
    code.style.overflow = 'auto';
    code.innerHTML = `// 创建动画元素
const box = document.createElement('div');
box.style.width = '${args.size}px';
box.style.height = '${args.size}px';
box.style.backgroundColor = '${args.color}';
box.style.transition = 'all 0.3s ease';

// 添加动画效果
box.addEventListener('mouseover', () => {
  box.style.transform = 'rotate(${args.rotation}deg) scale(1.2)';
  box.style.backgroundColor = '${args.hoverColor}';
});

box.addEventListener('mouseout', () => {
  box.style.transform = 'rotate(0deg) scale(1)';
  box.style.backgroundColor = '${args.color}';
});`;

    container.appendChild(code);

    // 创建演示区域
    const demo = document.createElement('div');
    demo.style.width = `${args.size}px`;
    demo.style.height = `${args.size}px`;
    demo.style.backgroundColor = args.color;
    demo.style.transition = 'all 0.3s ease';
    demo.style.marginTop = '20px';
    demo.style.cursor = 'pointer';

    demo.addEventListener('mouseover', () => {
      demo.style.transform = `rotate(${args.rotation}deg) scale(1.2)`;
      demo.style.backgroundColor = args.hoverColor;
    });

    demo.addEventListener('mouseout', () => {
      demo.style.transform = 'rotate(0deg) scale(1)';
      demo.style.backgroundColor = args.color;
    });

    container.appendChild(demo);
    return container;
  },
  args: {
    size: 100,
    color: '#4a90e2',
    hoverColor: '#e24a4a',
    rotation: 45,
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 50, max: 200, step: 10 },
      description: '元素大小',
    },
    color: {
      control: 'color',
      description: '初始颜色',
    },
    hoverColor: {
      control: 'color',
      description: '悬停颜色',
    },
    rotation: {
      control: { type: 'range', min: 0, max: 360, step: 15 },
      description: '旋转角度',
    },
  },
};

// 下拉菜单示例
export const Dropdown: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'dropdown-container';

    const code = document.createElement('pre');
    code.className = 'code-block';
    code.innerHTML = `// 创建下拉菜单
const dropdown = document.createElement('div');
dropdown.className = 'dropdown';

// 创建按钮
const button = document.createElement('button');
button.className = 'dropdown-button';
button.textContent = '${args.buttonText}';

// 创建菜单内容
const content = document.createElement('div');
content.className = 'dropdown-content';

// 添加菜单项
${args.menuItems.map(item => `
const item${item.id} = document.createElement('a');
item${item.id}.className = 'dropdown-item';
item${item.id}.textContent = '${item.text}';
item${item.id}.onclick = () => alert('点击了${item.text}');
content.appendChild(item${item.id});`).join('\n')}

// 显示/隐藏菜单
button.onclick = () => {
  content.classList.toggle('show');
};

// 点击外部关闭菜单
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target as Node)) {
    content.classList.remove('show');
  }
});`;

    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
      .dropdown-container {
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 4px;
      }
      .code-block {
        background-color: #fff;
        padding: 15px;
        border-radius: 4px;
        overflow: auto;
      }
      .dropdown {
        position: relative;
        display: inline-block;
        margin-top: 20px;
      }
      .dropdown-button {
        padding: 10px 20px;
        background-color: ${args.buttonColor};
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 160px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        z-index: 1;
      }
      .dropdown-content.show {
        display: block;
      }
      .dropdown-item {
        display: block;
        padding: 12px 16px;
        text-decoration: none;
        color: black;
      }
      .dropdown-item:hover {
        background-color: #f1f1f1;
      }
    `;

    container.appendChild(style);
    container.appendChild(code);

    // 创建演示区域
    const demo = document.createElement('div');
    demo.className = 'dropdown';

    const button = document.createElement('button');
    button.className = 'dropdown-button';
    button.textContent = args.buttonText;

    const content = document.createElement('div');
    content.className = 'dropdown-content';

    args.menuItems.forEach(item => {
      const menuItem = document.createElement('a');
      menuItem.className = 'dropdown-item';
      menuItem.textContent = item.text;
      menuItem.onclick = () => alert(`点击了${item.text}`);
      content.appendChild(menuItem);
    });

    button.onclick = () => {
      content.classList.toggle('show');
    };

    document.addEventListener('click', (e) => {
      if (!demo.contains(e.target as Node)) {
        content.classList.remove('show');
      }
    });

    demo.appendChild(button);
    demo.appendChild(content);
    container.appendChild(demo);
    return container;
  },
  args: {
    buttonText: '下拉菜单',
    buttonColor: '#4a90e2',
    menuItems: [
      { id: 1, text: '选项 1' },
      { id: 2, text: '选项 2' },
      { id: 3, text: '选项 3' },
    ],
  },
  argTypes: {
    buttonText: {
      control: 'text',
      description: '按钮文本',
    },
    buttonColor: {
      control: 'color',
      description: '按钮颜色',
    },
    menuItems: {
      control: 'object',
      description: '菜单项',
    },
  },
};

// 标签页示例
export const Tabs: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'tabs-container';

    const code = document.createElement('pre');
    code.className = 'code-block';
    code.innerHTML = `// 创建标签页容器
const tabsContainer = document.createElement('div');
tabsContainer.className = 'tabs';

// 创建标签按钮
const tabButtons = document.createElement('div');
tabButtons.className = 'tab-buttons';

// 创建内容区域
const tabContents = document.createElement('div');
tabContents.className = 'tab-contents';

// 添加标签和内容
${args.tabs.map((tab, index) => `
// 标签 ${index + 1}
const button${index} = document.createElement('button');
button${index}.className = 'tab-button ${index === 0 ? 'active' : ''}';
button${index}.textContent = '${tab.title}';
button${index}.onclick = () => {
  // 更新按钮样式
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  button${index}.classList.add('active');
  
  // 更新内容
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  content${index}.classList.add('active');
};
tabButtons.appendChild(button${index});

const content${index} = document.createElement('div');
content${index}.className = 'tab-content ${index === 0 ? 'active' : ''}';
content${index}.textContent = '${tab.content}';
tabContents.appendChild(content${index});`).join('\n')}`;

    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
      .tabs-container {
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 4px;
      }
      .code-block {
        background-color: #fff;
        padding: 15px;
        border-radius: 4px;
        overflow: auto;
      }
      .tabs {
        width: 100%;
        margin-top: 20px;
      }
      .tab-buttons {
        display: flex;
        border-bottom: 1px solid #ccc;
      }
      .tab-button {
        padding: 10px 20px;
        border: none;
        background-color: ${args.inactiveColor};
        color: black;
        cursor: pointer;
      }
      .tab-button.active {
        background-color: ${args.activeColor};
        color: white;
      }
      .tab-contents {
        padding: 20px;
        background-color: white;
      }
      .tab-content {
        display: none;
      }
      .tab-content.active {
        display: block;
      }
    `;

    container.appendChild(style);
    container.appendChild(code);

    // 创建演示区域
    const demo = document.createElement('div');
    demo.className = 'tabs';

    const tabButtons = document.createElement('div');
    tabButtons.className = 'tab-buttons';

    const tabContents = document.createElement('div');
    tabContents.className = 'tab-contents';

    args.tabs.forEach((tab, index) => {
      const button = document.createElement('button');
      button.className = `tab-button ${index === 0 ? 'active' : ''}`;
      button.textContent = tab.title;

      const content = document.createElement('div');
      content.className = `tab-content ${index === 0 ? 'active' : ''}`;
      content.textContent = tab.content;

      button.onclick = () => {
        // 更新按钮样式
        demo.querySelectorAll('.tab-button').forEach(btn => {
          btn.classList.remove('active');
        });
        button.classList.add('active');

        // 更新内容
        demo.querySelectorAll('.tab-content').forEach(content => {
          content.classList.remove('active');
        });
        content.classList.add('active');
      };

      tabButtons.appendChild(button);
      tabContents.appendChild(content);
    });

    demo.appendChild(tabButtons);
    demo.appendChild(tabContents);
    container.appendChild(demo);
    return container;
  },
  args: {
    activeColor: '#4a90e2',
    inactiveColor: '#f5f5f5',
    tabs: [
      { title: '标签 1', content: '这是第一个标签的内容' },
      { title: '标签 2', content: '这是第二个标签的内容' },
      { title: '标签 3', content: '这是第三个标签的内容' },
    ],
  },
  argTypes: {
    activeColor: {
      control: 'color',
      description: '活动标签颜色',
    },
    inactiveColor: {
      control: 'color',
      description: '非活动标签颜色',
    },
    tabs: {
      control: 'object',
      description: '标签内容',
    },
  },
}; 