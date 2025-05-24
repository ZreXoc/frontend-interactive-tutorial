import type { Meta, StoryObj } from '@storybook/html';
import { createChatElement } from './Chat';

const meta = {
  title: '前端入门交互式教程/02.CSS基础/02.聊天室样式',
  render: () => createChatElement(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {}; 