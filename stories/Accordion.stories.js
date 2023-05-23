import { Accordion } from "../components/Accordion";

export default {
  title: "Example/Accordion",
  component: Accordion,
  args: {
    title: "Accordion Title",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio laboriosam dolorem mollitia quae repellendus, incidunt explicabo vitae magnam consectetur. Ad consequatur laboriosam nemo eos deserunt obcaecati hic quasi aut ab nostrum animi nisi, maiores labore fuga fugiat, dolorum repellendus.",
  },
};

export const Collapsed = {
  args: {
    showBody: false,
  },
};

export const Expanded = {
  args: {
    showBody: true,
  },
};
