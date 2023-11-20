import InputOutput from "../components/InputOutput";

export default {
  title: "Stories/PriceInputOutput",
  component: InputOutput,
  args: {
    styles: {
      border: "border border-red-400",
      padding: "p-3",
    },
  },
};

export const InputVariant = {
  args: {
    variant: "input",
  },
};
export const OutputVariant = {
  args: {
    variant: "output",
    value: 40000,
  },
};
