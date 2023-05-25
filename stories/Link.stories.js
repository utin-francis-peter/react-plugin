import { Link } from "../components/Link";

export default {
  title: "Example/Link",
  component: Link,
  args: {
    label: "visit",
    navPath: "https://github.com/utin-francis-peter/react-plugin",
    isHovered: false,
    isVisited: false,
    isActive: false,
    isDisabled: false,
    hasIcon: false,
  },
};

export const Standalone = {
  args: {
    variant: "standalone",
    hasIcon: true,
    icon: "arrow-up-right-from-square",
  },
};

export const Inline = {
  args: {
    variant: "inline",
  },
};
