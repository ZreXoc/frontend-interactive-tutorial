import type { Meta, StoryObj } from '@storybook/html';
import { createBlogElement } from './Blog';

const meta = {
  title: '前端入门交互式教程/02.CSS基础/04.博客样式',
  render: () => createBlogElement(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {}; 