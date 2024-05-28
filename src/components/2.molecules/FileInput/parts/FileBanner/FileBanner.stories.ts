import type { Meta, StoryObj } from "@storybook/react";
import FileBanner from "@/components/2.molecules/FileInput/parts/FileBanner/FileBanner";
import { fn } from "@storybook/test";

const meta = {
  title: "Eternal Ink/File Input/Parts/File Banner",
  component: FileBanner,
  decorators: [],
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof FileBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: './storybook_resources/axe.png',
    name: 'file.jpg',
    size: { value: 2.4, unit: 'MB' },
    onRemove: fn
  },
};