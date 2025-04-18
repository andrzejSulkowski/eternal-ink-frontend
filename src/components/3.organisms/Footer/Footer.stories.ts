import type { Meta, StoryObj } from "@storybook/react";
import type { EIRoute } from "@/types/index";
import Footer from "./Footer";
import Github from "@/components/Svgs/Github";
import LinkedIn from "@/components/Svgs/LinkedIn";
import Web from "@/components/Svgs/Web";
import { fn } from "@storybook/test";

const routes: EIRoute[] = [
  {
    href: "/cookies",
    name: "Cookie Preferences",
  },
  {
    href: "/privacy",
    name: "Privacy Policy",
  },
];

const meta = {
  title: "Eternal Ink/organisms/Footer",
  component: Footer,
  decorators: [],
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    routes: routes,
    socials: [
      { href: "https://github.com/andrzejSulkowski", cmp: Github },
      {
        href: "https://www.linkedin.com/in/andrzej-sulkowski-600b89208/",
        cmp: LinkedIn,
      },
      { href: "https://www.andrzej-sulkowski.com/", cmp: Web },
    ],
  },
};
