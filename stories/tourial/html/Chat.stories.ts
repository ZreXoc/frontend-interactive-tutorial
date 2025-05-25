import type { Meta, StoryObj } from '@storybook/html';
import { createChatElement } from './Chat';

const meta = {
  title: '前端入门交互式教程/01.HTML基础/03.聊天室示例',
  render: () => createChatElement(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {}; 