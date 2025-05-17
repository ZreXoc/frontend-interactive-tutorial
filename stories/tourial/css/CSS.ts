export interface CSSProps {
  id: string;
  content: string;
  selector?: 'id' | 'class' | 'element' | 'universal' | 'descendant' | 'child' | 'adjacent' | 'sibling';
  selectorName?: string;
  styles: {
    fontSize?: number;
    color?: string;
    backgroundColor?: string;
    width?: number;
    height?: number;
    padding?: number;
    margin?: number;
    border?: string;
    borderRadius?: number;
    display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'grid';
    position?: 'static' | 'relative' | 'absolute' | 'fixed';
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    fontWeight?: 'normal' | 'bold' | 'lighter' | 'bolder';
    textDecoration?: 'none' | 'underline' | 'line-through' | 'overline';
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    gap?: string;
    // Flexbox属性
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    // Grid属性
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
  };
  multiple?: number;
  showDOM?: boolean;
}

export interface FlexProps {
  id: string;
  content: string;
  styles: {
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap?: string;
    width?: number;
    height?: number;
    backgroundColor?: string;
    padding?: number;
  };
  multiple?: number;
}

export interface GridProps {
  id: string;
  content: string;
  styles: {
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gap?: string;
    width?: number;
    height?: number;
    backgroundColor?: string;
    padding?: number;
  };
  multiple?: number;
}

export const createCSSElement = (props: CSSProps): HTMLElement => {
  const { id, content, selector, selectorName, styles, multiple, showDOM } = props;

  // 创建容器元素
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.border = '1px solid #eee';
  container.style.margin = '10px';
  container.style.borderRadius = '4px';

  // 创建CSS代码展示区域
  const codeContainer = document.createElement('pre');
  codeContainer.style.backgroundColor = '#f5f5f5';
  codeContainer.style.padding = '10px';
  codeContainer.style.borderRadius = '4px';
  codeContainer.style.marginBottom = '10px';
  codeContainer.style.overflow = 'auto';

  // 生成选择器文本
  let selectorText = '';
  switch (selector) {
    case 'id':
      selectorText = `#${id} #${selectorName || 'example'}`;
      break;
    case 'class':
      selectorText = `#${id} .${selectorName || 'my-class'}`;
      break;
    case 'element':
      selectorText = `#${id} ${selectorName || 'div'}`;
      break;
    case 'universal':
      selectorText = `#${id} *`;
      break;
    case 'descendant':
      selectorText = `#${id} div ${selectorName || 'span'}`;
      break;
    case 'child':
      selectorText = `#${id} div > ${selectorName || 'span'}`;
      break;
    case 'adjacent':
      selectorText = `#${id} div + ${selectorName || 'span'}`;
      break;
    case 'sibling':
      selectorText = `#${id} div ~ ${selectorName || 'span'}`;
      break;
    default:
      selectorText = `#${id}`;
  }

  // 生成CSS代码
  const cssCode = `${selectorText} {
${Object.entries(styles)
  .filter(([_, value]) => value !== undefined)
  .map(([key, value]) => `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}${typeof value === 'number' ? 'px' : ''};`)
  .join('\n')}
}`;

  codeContainer.textContent = cssCode;
  container.appendChild(codeContainer);

  // 创建style标签
  const styleElement = document.createElement('style');
  styleElement.textContent = cssCode;
  container.appendChild(styleElement);

  // 创建示例DOM结构
  if (showDOM) {
    const createExampleDOM = () => {
      const wrapper = document.createElement('div');
      if (multiple == undefined) {
        wrapper.id = id;
      }
      wrapper.style.padding = '10px';
      wrapper.style.border = '1px dashed #ccc';
      wrapper.style.marginBottom = '10px';

      // 创建复杂的DOM结构
      const div1 = document.createElement('div');
      div1.textContent = '父元素 1';

      const span1 = document.createElement('span');
      span1.textContent = '子元素 1';

      const span2 = document.createElement('span');
      span2.textContent = '子元素 2';

      const div2 = document.createElement('div');
      div2.textContent = '父元素 2';

      const span3 = document.createElement('span');
      span3.textContent = '子元素 3';

      // 根据选择器类型设置类名和ID
      if (selector === 'id') {
        span1.id = selectorName || 'example';
      } else if (selector === 'class') {
        span1.className = selectorName || 'my-class';
      } else if (selector === 'element') {
        // 不设置类名或ID，使用元素选择器
      } else if (selector === 'descendant') {
        div1.className = 'parent';
        span1.className = selectorName || 'my-class';
      } else if (selector === 'child') {
        div1.className = 'parent';
        span1.className = selectorName || 'my-class';
      } else if (selector === 'adjacent') {
        div1.className = 'parent';
        span1.className = selectorName || 'my-class';
      } else if (selector === 'sibling') {
        div1.className = 'parent';
        span1.className = selectorName || 'my-class';
      }

      // 组装DOM结构
      div1.appendChild(span1);
      div1.appendChild(span2);
      div2.appendChild(span3);
      wrapper.appendChild(div1);
      wrapper.appendChild(div2);

      return wrapper;
    }

    container.appendChild(createExampleDOM());
  } else {
    // 创建示例元素
    const createExampleElement = () => {
      const element = document.createElement('div');
      if (multiple == undefined) {
        element.id = id;
      }
      element.className = 'my-class';
      element.textContent = content;
      return element;
    };

    // 创建多个示例元素
    if (multiple) {
      const wrapper = document.createElement('div');
      wrapper.id = id;
      wrapper.style.display = 'flex';
      wrapper.style.gap = '10px';
      wrapper.style.flexWrap = 'wrap';
      
      for (let i = 0; i < multiple; i++) {
        const element = createExampleElement();
        element.textContent = `[${i + 1}] ${content}`;
        wrapper.appendChild(element);
      }
      container.appendChild(wrapper);
    } else {
      container.appendChild(createExampleElement());
    }
  }

  return container;
};

export const createFlexElement = (props: FlexProps): HTMLElement => {
  const { id, content, styles, multiple } = props;

  // 创建容器元素
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.border = '1px solid #eee';
  container.style.margin = '10px';
  container.style.borderRadius = '4px';

  // 创建CSS代码展示区域
  const codeContainer = document.createElement('pre');
  codeContainer.style.backgroundColor = '#f5f5f5';
  codeContainer.style.padding = '10px';
  codeContainer.style.borderRadius = '4px';
  codeContainer.style.marginBottom = '10px';
  codeContainer.style.overflow = 'auto';

  // 生成CSS代码
  const cssCode = `#${id} {
  display: flex;
${Object.entries(styles)
  .filter(([_, value]) => value !== undefined)
  .map(([key, value]) => `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}${typeof value === 'number' ? 'px' : ''};`)
  .join('\n')}
}

#${id} > div {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}`;

  codeContainer.textContent = cssCode;
  container.appendChild(codeContainer);

  // 创建style标签
  const styleElement = document.createElement('style');
  styleElement.textContent = cssCode;
  container.appendChild(styleElement);

  // 创建flex容器
  const flexContainer = document.createElement('div');
  flexContainer.id = id;
  Object.entries(styles).forEach(([key, value]) => {
    if (value !== undefined) {
      flexContainer.style[key.replace(/([A-Z])/g, '-$1').toLowerCase()] = 
        typeof value === 'number' ? `${value}px` : value;
    }
  });

  // 创建flex项目
  const count = multiple || 1;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('div');
    item.textContent = `[${i + 1}] ${content}`;
    flexContainer.appendChild(item);
  }

  container.appendChild(flexContainer);
  return container;
};

export const createGridElement = (props: GridProps): HTMLElement => {
  const { id, content, styles, multiple } = props;

  // 创建容器元素
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.border = '1px solid #eee';
  container.style.margin = '10px';
  container.style.borderRadius = '4px';

  // 创建CSS代码展示区域
  const codeContainer = document.createElement('pre');
  codeContainer.style.backgroundColor = '#f5f5f5';
  codeContainer.style.padding = '10px';
  codeContainer.style.borderRadius = '4px';
  codeContainer.style.marginBottom = '10px';
  codeContainer.style.overflow = 'auto';

  // 生成CSS代码
  const cssCode = `#${id} {
  display: grid;
${Object.entries(styles)
  .filter(([_, value]) => value !== undefined)
  .map(([key, value]) => `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}${typeof value === 'number' ? 'px' : ''};`)
  .join('\n')}
}

#${id} > div {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}`;

  codeContainer.textContent = cssCode;
  container.appendChild(codeContainer);

  // 创建style标签
  const styleElement = document.createElement('style');
  styleElement.textContent = cssCode;
  container.appendChild(styleElement);

  // 创建grid容器
  const gridContainer = document.createElement('div');
  gridContainer.id = id;
  Object.entries(styles).forEach(([key, value]) => {
    if (value !== undefined) {
      gridContainer.style[key.replace(/([A-Z])/g, '-$1').toLowerCase()] = 
        typeof value === 'number' ? `${value}px` : value;
    }
  });

  // 创建grid项目
  const count = multiple || 1;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('div');
    item.textContent = `[${i + 1}] ${content}`;
    gridContainer.appendChild(item);
  }

  container.appendChild(gridContainer);
  return container;
};