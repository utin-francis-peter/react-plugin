import React from "react";

export const Modal = ({
  title,
  body,
  hasCloseBtn,
  hasBgLayer,
  canCustomize,
  customStyles,
}) => {
  return (
    <div
      className={`flex h-96 items-center justify-center ${
        canCustomize && hasBgLayer
          ? customStyles.modalLayerBg
          : hasBgLayer
          ? "bg-gray-300"
          : ""
      } `}>
      <div
        className={`w-2/4 ${
          canCustomize ? customStyles.modalBg : "bg-gray-100"
        }`}>
        <header className="flex items-center justify-between p-3">
          <h6>{title}</h6>
          {hasCloseBtn && (
            <button>
              <i className="fa-solid fa-close"></i>
            </button>
          )}
        </header>

        <body className="mb-10 p-3 text-xl">
          <h4>{body}</h4>
        </body>

        <footer className="flex gap-1 text-white">
          <button
            className={`block w-full  px-3 py-5 text-left ${
              canCustomize
                ? [...Object.values(customStyles.cancelBtnStyles)].join(" ")
                : "bg-gray-600 hover:bg-gray-700"
            }`}>
            Cancel
          </button>
          <button
            className={`block w-full  px-3 text-left  ${
              canCustomize
                ? [...Object.values(customStyles.delBtnStyles)].join(" ")
                : "bg-red-700 hover:bg-red-800"
            }`}>
            Delete
          </button>
        </footer>
      </div>
    </div>
  );
};
