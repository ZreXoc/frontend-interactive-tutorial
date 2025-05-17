import type { Meta, StoryObj } from '@storybook/html';
import { createChatRoomElement } from './ChatRoom';

const meta = {
  title: '前端入门交互式教程/JavaScript基础/聊天室示例',
  render: () => createChatRoomElement(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {}; 