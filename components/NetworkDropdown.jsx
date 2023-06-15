import React, { useEffect, useState } from "react";
import { data } from "../data/data";

const NetworkDropdown = ({ variant }) => {
  const [activeChain, setActiveChain] = useState();
  const [showChains, setShowChains] = useState(false);

  const handleActiveNetwork = (id) => {
    setActiveChain(() => data.find((d) => d.chainId === id));
  };

  useEffect(() => {
    if (variant === "from") {
      setActiveChain(() =>
        data.find((d) => d.name.toLowerCase() === "ethereum")
      );
    } else if (variant === "to") {
      setActiveChain(() =>
        data.find((d) => d.name.toLowerCase() === "polygon")
      );
    }
  }, []);

  //TODO: WHY DIDN'T DOMContentLoaded EVENT FIRE????
  //   useEffect(() => {
  //     window.addEventListener("DOMContentLoaded", () => {
  //       //   set active network to eth if variant is FROM, and polygon if variant is TO
  //       console.log("TOP GUY");
  //       switch (variant) {
  //         case "from":
  //           console.log("from block");
  //           setActiveChain(() =>
  //             data.find((d) => d.name.toLowerCase() === "ethereum")
  //           );
  //           break;
  //
  //         default:
  //           console.log("to block");
  //           setActiveChain(() =>
  //             data.find((d) => d.name.toLowerCase() === "polygon")
  //           );
  //           break;
  //       }
  //     });
  //   }, []);
  return (
    <div className="w-1/5">
      <button
        className="block flex w-full items-center justify-between  gap-3 border border-red-300 px-1"
        onClick={() => setShowChains(!showChains)}>
        <span className="flex items-center justify-between gap-2">
          <img
            className="rounded-full"
            src={activeChain?.icon}
            alt={`${activeChain?.icon} logo`}
            width={20}
          />
          {activeChain?.name}
        </span>
        <i className={`fa-solid fa-chevron-${!showChains ? "down" : "up"}`}></i>
      </button>

      {/* all networks dropdown */}
      {showChains && (
        <section className="inline-block bg-gray-500 p-2">
          {data
            .filter((d) => d.chainId !== activeChain.chainId)
            .map((d, i) => (
              <button
                className="block flex w-full items-center gap-3 hover:bg-gray-100"
                key={i}
                onClick={() => {
                  setShowChains(!showChains);
                  handleActiveNetwork(d.chainId);
                }}>
                <img
                  className="rounded-full"
                  src={d.icon}
                  alt={`${d.icon} logo`}
                  width={20}
                />
                {d.name}
              </button>
            ))}
        </section>
      )}
    </div>
  );
};

export default NetworkDropdown;
