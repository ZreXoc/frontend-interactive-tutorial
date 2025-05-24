import type { Meta, StoryObj } from '@storybook/html';
import { createChatElement } from './Chat';

const meta = {
  title: '前端入门交互式教程/01.HTML基础/03.页面结构',
  render: () => createChatElement(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {}; 