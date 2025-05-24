export interface ListProps {
  type: 'ul' | 'ol';
  items: string[];
  className?: string;
  style?: string;
}

export interface TableProps {
  headers: string[];
  rows: string[][];
  className?: string;
  style?: string;
}

export interface FormGroupProps {
  type: 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio' | 'submit' | 'textarea' | 'select';
  label: string;
  placeholder?: string;
  value?: string;
  checked?: boolean;
  options?: string[];
  rows?: number;
  className?: string;
  style?: string;
}

export interface FormProps {
  groups: FormGroupProps[];
  className?: string;
  style?: string;
}

export interface MediaProps {
  type: 'img' | 'video' | 'audio';
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  style?: string;
}

export interface BlockquoteProps {
  content: string;
  cite?: string;
  className?: string;
  style?: string;
}

export interface CodeProps {
  content: string;
  isPre?: boolean;
  language?: string;
  className?: string;
  style?: string;
}

export const createList = ({ type, items, className, style }: ListProps): HTMLElement => {
  const list = document.createElement(type);
  if (className) list.className = className;
  if (style) list.style.cssText = style;

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  return list;
};

export const createTable = ({ headers, rows, className, style }: TableProps): HTMLElement => {
  const table = document.createElement('table');
  if (className) table.className = className;
  if (style) table.style.cssText = style;

  // 创建表头
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // 创建表体
  const tbody = document.createElement('tbody');
  rows.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table;
};

export const createForm = (props: FormProps): HTMLElement => {
  const form = document.createElement('form');
  if (props.className) form.className = props.className;
  if (props.style) form.style.cssText = props.style;

  props.groups.forEach(group => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    if (group.className) formGroup.className += ` ${group.className}`;
    if (group.style) formGroup.style.cssText = group.style;

    // 创建标签
    const label = document.createElement('label');
    label.textContent = group.label;
    formGroup.appendChild(label);

    // 创建输入元素
    let input: HTMLElement;
    switch (group.type) {
      case 'textarea':
        const textarea = document.createElement('textarea');
        if (group.placeholder) textarea.placeholder = group.placeholder;
        if (group.value) textarea.value = group.value;
        if (group.rows) textarea.rows = group.rows;
        input = textarea;
        break;
      case 'select':
        const select = document.createElement('select');
        if (group.options) {
          group.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
          });
        }
        input = select;
        break;
      case 'radio':
        if (group.options) {
          const radioGroup = document.createElement('div');
          radioGroup.className = 'radio-group';
          group.options.forEach((option, index) => {
            const radioWrapper = document.createElement('div');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = group.label;
            radio.value = option;
            if (index === 0) radio.checked = true;
            
            const radioLabel = document.createElement('label');
            radioLabel.textContent = option;
            
            radioWrapper.appendChild(radio);
            radioWrapper.appendChild(radioLabel);
            radioGroup.appendChild(radioWrapper);
          });
          input = radioGroup;
        } else {
          input = document.createElement('input');
          (input as HTMLInputElement).type = 'radio';
        }
        break;
      case 'checkbox':
        if (group.options) {
          const checkboxGroup = document.createElement('div');
          checkboxGroup.className = 'checkbox-group';
          group.options.forEach(option => {
            const checkboxWrapper = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = option;
            
            const checkboxLabel = document.createElement('label');
            checkboxLabel.textContent = option;
            
            checkboxWrapper.appendChild(checkbox);
            checkboxWrapper.appendChild(checkboxLabel);
            checkboxGroup.appendChild(checkboxWrapper);
          });
          input = checkboxGroup;
        } else {
          input = document.createElement('input');
          (input as HTMLInputElement).type = 'checkbox';
        }
        break;
      default:
        input = document.createElement('input');
        (input as HTMLInputElement).type = group.type;
        if (group.placeholder) (input as HTMLInputElement).placeholder = group.placeholder;
        if (group.value) (input as HTMLInputElement).value = group.value;
        if (group.checked !== undefined) (input as HTMLInputElement).checked = group.checked;
    }

    formGroup.appendChild(input);
    form.appendChild(formGroup);
  });

  return form;
};

export const createMedia = ({ type, src, alt, width, height, controls, autoplay, loop, className, style }: MediaProps): HTMLElement => {
  const element = document.createElement(type);
  element.src = src;
  
  if (type === 'img') {
    const imgElement = element as HTMLImageElement;
    if (alt) imgElement.alt = alt;
    if (width) imgElement.width = width;
    if (height) imgElement.height = height;
  } else if (type === 'video' || type === 'audio') {
    const mediaElement = element as HTMLVideoElement | HTMLAudioElement;
    if (controls !== undefined) mediaElement.controls = controls;
    if (autoplay !== undefined) mediaElement.autoplay = autoplay;
    if (loop !== undefined) mediaElement.loop = loop;
  }
  
  if (className) element.className = className;
  if (style) element.style.cssText = style;

  return element;
};

export const createBlockquote = ({ content, cite, className, style }: BlockquoteProps): HTMLElement => {
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = content;
  
  if (cite) {
    blockquote.setAttribute('cite', cite);
  }
  if (className) blockquote.className = className;
  if (style) blockquote.style.cssText = style;

  return blockquote;
};

export const createCode = ({ content, isPre, language, className, style }: CodeProps): HTMLElement => {
  let element: HTMLElement;
  
  if (isPre) {
    element = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = content;
    if (language) code.className = `language-${language}`;
    element.appendChild(code);
  } else {
    element = document.createElement('code');
    element.textContent = content;
    if (language) element.className = `language-${language}`;
  }
  
  if (className) element.className += ` ${className}`;
  if (style) element.style.cssText = style;

  return element;
};


