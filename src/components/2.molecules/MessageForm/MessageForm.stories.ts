import type { Meta, StoryObj } from "@storybook/react";
import MessageForm from "./MessageForm";
import { fn } from "@storybook/test";
import { MessageProps } from "@/components/1.atoms/Message/Message";


const mockMessages: MessageProps[] = [
  {
    message: "Hello World",
    address: "0x9934567890zzcdef1234567890abcdef12345678",
    variant: "solid"
  },
  {
    message: "For Mum and Dad <3",
    address: "0x2534567890abcdef12t4567890abcdef12345679",
    variant: "solid"
  },
  {
    message: "I love you Peter!",
    address: "0x1274567890abcdef1234567890abcdef12345378",
    variant: "solid"
  },
  {
    message: "Adam is the best!",
    address: "0x1234447890abcdef1234567890abcdef12345678",
    variant: "solid"
  },
  {
    message: "Stinky Pete",
    address: "0x1235567890abcdef1234567890abcdef12345678",
    variant: "solid"
  },
  {
    message: "Johanna + Böörnd",
    address: "0x1234gg7890abcdef1234567890abcdef12345678",
    variant: "solid"
  },
  {
    message: "Hello World2",
    address: "0x1234aa7890abcdef1234567890abcdef12345678",
    variant: "solid"
  },
  {
    message: "Hello World3",
    address: "0x1234567890abcdef1234567890abcdef1z345678",
    variant: "solid"
  },
  {
    message: "Hello World4",
    address: "0x1234567890abcdef1234567890abtdef12345678",
    variant: "solid"
  }
]


const meta = {
  title: "Ethernal Ink/Message Form",
  component: MessageForm,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    messages: { control: 'object'}
  },
  args: { 
    onClose: fn(),
    messages: mockMessages
  },
} satisfies Meta<typeof MessageForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    onClose: fn(),
    messages: mockMessages,
    onSend: (msg: string | File) => console.log(msg)
  },
};

