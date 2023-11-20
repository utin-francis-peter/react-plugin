/** @type { import('@storybook/react').Preview } */
import "@rainbow-me/rainbowkit/styles.css";
import "../index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { Provider } from "react-redux";
import { store } from "../redux/store";

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

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: "4BZf-QPfszSDY1aTKavb3UOwuyGsNC6e" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "react-plugin",
  projectId: "92683f48d7362e9f4f3c872a953cb8d5",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const decorators = [
  (Story) => (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={darkTheme()}>
        <Provider store={store}>
          <Story />
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  ),
];

export default preview;
