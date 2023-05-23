/** @type { import('@storybook/react').Preview } */
import "../index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
