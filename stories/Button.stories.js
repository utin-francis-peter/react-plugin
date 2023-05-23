import { Button } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {},
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Disabled = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

export const Small = {
  args: {
    label: "Small Button",
    small: true,
  },
};

export const FullWidth = {
  args: {
    label: "Full Width Button",
    fullWidth: true,
  },
};

export const Loading = {
  args: {
    isLoading: true,
    fullWidth: true,
  },
};
