import type { StoryObj, Meta } from '@storybook/html';

import { avatar } from './index';
import type {AvatarProps} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/avatar',
  tags: ['autodocs'],
  render: (args) => {
    return avatar(args);
  },
  argTypes: {
    imgSrc: {description: 'endereço para a imgaem do logo'},
    descricao: {description: 'descrição da imagem do logo'}
  }
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    imgSrc: 'https://i.pinimg.com/564x/15/8c/a6/158ca6b2922ffc7b1047ea9acb9324e3.jpg', 
    descricao: 'Octocat from Github '
  }
};

