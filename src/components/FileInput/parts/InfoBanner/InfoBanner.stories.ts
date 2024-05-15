import type { Meta, StoryObj } from "@storybook/react";
import InfoBanner from "@/components/FileInput/parts/InfoBanner/InfoBanner";
import { fn } from "@storybook/test";

const meta = {
  title: "Ethernal Ink/File Input/Parts/Info Banner",
  component: InfoBanner,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof InfoBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    allowedMimeTypes: ['application/pdf', 'image/jpeg', 'image/jpg']
  },
};