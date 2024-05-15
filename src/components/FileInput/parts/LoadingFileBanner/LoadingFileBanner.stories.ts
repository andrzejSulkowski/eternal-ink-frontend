import type { Meta, StoryObj } from "@storybook/react";
import LoadingFileBanner from "@/components/FileInput/parts/LoadingFileBanner/LoadingFileBanner";
import { fn } from "@storybook/test";

const meta = {
  title: "Ethernal Ink/File Input/Parts/Loading File Banner",
  component: LoadingFileBanner,
  decorators: [],
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof LoadingFileBanner>;

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