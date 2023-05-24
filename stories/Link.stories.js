import { Link } from "../components/Link";

export default {
  title: "Example/Link",
  component: Link,
  args: {
    label: "upload",
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
    icon: "upload",
  },
};

export const Inline = {
  args: {
    variant: "inline",
  },
};
