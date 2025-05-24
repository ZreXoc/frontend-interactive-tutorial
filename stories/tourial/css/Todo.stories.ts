import type { Meta, StoryObj } from '@storybook/html';
import { createTodoElement } from './Todo';

const meta = {
  title: '前端入门交互式教程/02.CSS基础/03.待办事项样式',
  render: () => createTodoElement(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {}; 