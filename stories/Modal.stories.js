import { Modal } from "../components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  args: {
    title: "Account deletion",
    body: "Are you sure you want to delete this account?",
    hasCloseBtn: false,
    hasBgLayer: false,
  },
};

export const Default = {};

export const hasBgLayer = {
  args: {
    hasBgLayer: true,
  },
};

export const hasCloseBtn = {
  args: {
    hasBgLayer: true,
    hasCloseBtn: true,
  },
};

export const customize = {
  args: {
    canCustomize: true,
    customStyles: {
      modalBg: "bg-gray-100",
      modalLayerBg: "bg-gray-300",
      cancelBtnStyles: {
        bg: "bg-gray-600",
        hover: `hover:bg-gray-700`,
      },
      delBtnStyles: {
        bg: "bg-red-700",
        hover: `hover:bg-red-800`,
      },
    },
  },
};
