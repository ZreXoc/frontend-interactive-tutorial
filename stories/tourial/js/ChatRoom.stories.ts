import type { Meta, StoryObj } from '@storybook/html';
import { createChatRoomElement } from './ChatRoom';

const meta = {
  title: '前端入门交互式教程/03.JavaScript基础/02.聊天室交互',
  render: () => createChatRoomElement(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {}; 