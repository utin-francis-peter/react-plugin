import { Search } from "../components/Search";

export default {
  title: "Example/Search",
  component: Search,
  args: {
    disabled: false,
    focused: false,
    placeholder: "Enter search query",
  },
};

export const Default = {
  args: {},
};

export const Focused = {
  args: {
    focused: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
