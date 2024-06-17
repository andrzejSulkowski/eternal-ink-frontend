import type { Meta, StoryObj } from '@storybook/react';
import RetrievedMessage from './RetrievedMessage';
import { fn } from '@storybook/test';
import { TxId } from '@/libs/transaction';
import { TxStatus } from '@/models';

const meta = {
  title: 'Eternal Ink/molecules/RetrievedMessage',
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
    status: TxStatus.Finalized,
    message: "Hello, World!",
    txId: "1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX72",
  },
};
export const Empty: Story = {
  args: {},
};