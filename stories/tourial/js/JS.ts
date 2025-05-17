export function createDOMDemoElement(args: {
  buttonText: string;
  elementText: string;
  backgroundColor: string;
  textColor: string;
}) {
  // 创建容器
  const container = document.createElement('div');
  container.className = 'dom-demo-container';

  // 创建按钮组
  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'button-group';

  // 创建添加按钮
  const addButton = document.createElement('button');
  addButton.textContent = args.buttonText;
  addButton.className = 'demo-button';

  // 创建删除按钮
  const removeButton = document.createElement('button');
  removeButton.textContent = '删除元素';
  removeButton.className = 'demo-button';

  // 创建清空按钮
  const clearButton = document.createElement('button');
  clearButton.textContent = '清空所有';
  clearButton.className = 'demo-button';

  // 创建元素容器
  const elementContainer = document.createElement('div');
  elementContainer.className = 'element-container';

  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .dom-demo-container {
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    .button-group {
      margin-bottom: 20px;
    }
    .demo-button {
      margin-right: 10px;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background-color: #4a90e2;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .demo-button:hover {
      background-color: #357abd;
    }
    .element-container {
      min-height: 100px;
      padding: 20px;
      background-color: white;
      border-radius: 4px;
      border: 1px solid #ddd;
    }
    .dynamic-element {
      padding: 10px;
      margin: 5px;
      border-radius: 4px;
      transition: all 0.3s;
    }
  `;

  // 添加元素函数
  const addElement = () => {
    const element = document.createElement('div');
    element.className = 'dynamic-element';
    element.textContent = `${args.elementText} ${elementContainer.children.length + 1}`;
    element.style.backgroundColor = args.backgroundColor;
    element.style.color = args.textColor;
    elementContainer.appendChild(element);
  };

  // 删除元素函数
  const removeElement = () => {
    const lastChild = elementContainer.lastChild;
    if (lastChild) {
      elementContainer.removeChild(lastChild);
    }
  };

  // 清空元素函数
  const clearElements = () => {
    elementContainer.innerHTML = '';
  };

  // 添加事件监听器
  addButton.addEventListener('click', addElement);
  removeButton.addEventListener('click', removeElement);
  clearButton.addEventListener('click', clearElements);

  // 组装界面
  buttonGroup.appendChild(addButton);
  buttonGroup.appendChild(removeButton);
  buttonGroup.appendChild(clearButton);
  container.appendChild(style);
  container.appendChild(buttonGroup);
  container.appendChild(elementContainer);

  return container;
}
