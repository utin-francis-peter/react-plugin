import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  });
};
