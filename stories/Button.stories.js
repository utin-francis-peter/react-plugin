import { Button } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: "Building with SDN",
    variant: "primary",
    disabled: false,
    small: false,
    fullWidth: true,
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    disabled: false,
    small: false,
    fullWidth: true,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
    small: false,
    fullWidth: true,
  },
};

export const Small = {
  args: {
    label: "Small Button",
    variant: "primary",
    disabled: false,
    small: true,
    fullWidth: true,
  },
};

export const FullWidth = {
  args: {
    label: "Full Width Button",
    variant: "primary",
    disabled: false,
    small: false,
    fullWidth: true,
  },
};
