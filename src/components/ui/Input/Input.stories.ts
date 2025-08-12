import { Input } from '@/components/ui';
import { within, userEvent, expect, fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
    onBlur: fn(),
    onFocus: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleInput: Story = {
  args: {
    placeholder: 'Name',
  },
};

export const TestInput: Story = {
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByTestId('input');

    await userEvent.type(input, 'Input for Storybook tests');
    await expect(input).toHaveStyle('font-size: 14px;');
  },
  args: {
    placeholder: 'Test input',
  },
};