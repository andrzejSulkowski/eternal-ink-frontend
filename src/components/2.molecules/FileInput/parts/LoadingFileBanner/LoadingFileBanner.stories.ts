import type { Meta, StoryObj } from "@storybook/react";
import LoadingFileBanner from "@/components/2.molecules/FileInput/parts/LoadingFileBanner/LoadingFileBanner";
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
    src: './storybook_resources/dwarf.png',
    namePlaceholder: 'Loading your file',
    sizePlaceholder: '> 100 MB'
  },
};