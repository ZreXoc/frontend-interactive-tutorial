export interface ElementProps {
  content: string;
  elementType?:
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'div'
    | 'span'
    | 'strong'
    | 'em'
    | 'a';
  blockType?: 'div' | 'p' | 'h1' | 'h2' | 'h3';
  inlineType?: 'span' | 'strong' | 'em' | 'a' | 'i';
  href?: string;
  id?: string;
  className?: string;
  backgroundColor?: string;
  color?: string;
  width?: number;
  height?: number;
  padding?: number;
  margin?: number;
  border?: string;
  borderRadius?: number;
  nestedContent?: string;
  nestedElementType?: 'p' | 'span' | 'strong' | 'em' | 'i';
  multiple?: number;
}

/** Primary UI component for user interaction */
export const createElement = (props: ElementProps): HTMLElement => {
  const {
    content,
    elementType,
    blockType,
    inlineType,
    href,
    id,
    className,
    backgroundColor,
    color,
    width,
    height,
    padding,
    margin,
    border,
    borderRadius,
    nestedContent,
    nestedElementType,
    multiple,
  } = props;
  if (multiple) {
    return Array.from({ length: multiple }, (_, i) =>
      createElement({
        ...props,
        content: `[${i + 1}] ${content}`,
        multiple: undefined,
      }),
    ).reduce((parent, node) => {
      parent.appendChild(node);
      return parent;
    }, document.createElement('div'));
  }
  // 确定要创建的元素类型
  const type = elementType || blockType || inlineType || 'p';
  const element = document.createElement(type);

  if (type === 'a' && href) {
    element.setAttribute('href', href);
  }

  if (id) {
    element.setAttribute('id', id);
  }

  if (className) {
    element.setAttribute('class', className);
  }

  // 构建样式字符串
  const styles = [];
  if (backgroundColor) styles.push(`background-color: ${backgroundColor}`);
  if (color) styles.push(`color: ${color}`);
  if (width) styles.push(`width: ${width}px`);
  if (height) styles.push(`height: ${height}px`);
  if (padding) styles.push(`padding: ${padding}px`);
  if (margin) styles.push(`margin: ${margin}px`);
  if (border) styles.push(`border: ${border}`);
  if (borderRadius) styles.push(`border-radius: ${borderRadius}px`);

  if (styles.length > 0) {
    element.setAttribute('style', styles.join('; '));
  }

  if (nestedContent && nestedElementType) {
    const nestedElement = document.createElement(nestedElementType);
    nestedElement.innerText = nestedContent;
    element.innerText = content;
    element.appendChild(nestedElement);
  } else {
    element.innerText = content;
  }

  return element;
};
