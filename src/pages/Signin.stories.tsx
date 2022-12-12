import { Meta, StoryObj } from '@storybook/react';
import { Signin } from "./Signin";

export default {
  title: "Pages/Signin",
  component: Signin,
  args: {
    children: "Create account",
  },
  argTypes: {}
  
} as Meta

export const Default: StoryObj = {}