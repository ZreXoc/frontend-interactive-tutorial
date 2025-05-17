import type { Meta, StoryObj } from '@storybook/html';
import { createTodoElement } from './Todo';

const meta = {
  title: '前端入门交互式教程/CSS基础/待办事项示例',
  render: () => createTodoElement(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {}; 