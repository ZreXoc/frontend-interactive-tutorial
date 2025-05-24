import type { Preview } from '@storybook/html'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      description: {
        component: '这是一个前端入门交互式教程，帮助你学习HTML、CSS和JavaScript的基础知识。',
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          '前端入门交互式教程',
          ['01.HTML基础', '02.CSS基础', '03.JavaScript基础'],
        ],
      },
    },
  },
};

export default preview;