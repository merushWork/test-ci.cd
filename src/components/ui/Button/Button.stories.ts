import { Button } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    asChild: false,
    size: 'default',
    variant: 'default',
  },
  argTypes: {
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Ghost: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Button with transparent background',
      },
    },
  },
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};