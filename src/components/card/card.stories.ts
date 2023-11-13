import type { StoryObj, Meta } from '@storybook/html';

import { card } from './index';
import type {CardProps} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/card',
  tags: ['autodocs'],
  render: (args) => {
    return card(args);
  },
  argTypes: {
    img: {description: 'endereço para a imgaem do logo'},
    nome: {description: 'descrição da imagem do logo'},
    cargo: {description: 'descrição da imagem do logo'}
  }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    img: 'https://i.pinimg.com/564x/7c/10/aa/7c10aa6bef0f590e60c2a7b6fe394763.jpg', 
    nome: 'Gabriel',
    cargo: 'Tentativa de Desenvolvedor'
  }
};

