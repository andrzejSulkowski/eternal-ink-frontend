import type { Meta, StoryObj } from '@storybook/react';
import RetrievedMessage from './RetrievedMessage';
import { fn } from '@storybook/test';
import { Status, TxId } from '@/libs/transaction';

const meta = {
  title: 'Eternal Ink/RetrievedMessage',
  component: RetrievedMessage,
  decorators: [],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof RetrievedMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

// status: Status,
// message: string,
// txId: TxId

export const Filled: Story = {
  args: {
    status: 'engraved',
    message: "Hello, World!",
    txId: "1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX72",
  },
};
export const Empty: Story = {
  args: {},
};