import React, { useEffect, useState } from "react";

const NetworkDropdown = ({
  variant,
  chainsList,
  handleActiveChain,
  activeSourceChain,
  activeDestinationChain,
}) => {
  const [showChains, setShowChains] = useState(false);

  return (
    <div className="w-2/5">
      <button
        className="block flex w-full items-center justify-between  gap-3 border border-red-300 px-1"
        onClick={() => setShowChains(!showChains)}>
        <span className="flex items-center justify-between gap-2">
          <img
            className="rounded-full"
            src={
              variant === "source"
                ? activeSourceChain?.icon
                : activeDestinationChain?.icon
            }
            alt="logo"
            width={20}
          />
          {variant === "source"
            ? activeSourceChain?.name
            : activeDestinationChain?.name}
        </span>
        <i className={`fa-solid fa-chevron-${!showChains ? "down" : "up"}`}></i>
      </button>

      {/* all networks dropdown */}
      {showChains && (
        <section className=" bg-gray-500 p-2">
          {chainsList.result
            ?.filter(
              (d) =>
                d.chainId !== activeSourceChain?.chainId ||
                d.chainId !== activeDestinationChain?.chainId
            )
            .map((d, i) => (
              <button
                className="block flex w-full items-center gap-5 py-1 hover:bg-gray-100"
                key={i}
                onClick={() => {
                  setShowChains(!showChains);
                  handleActiveChain(variant, d.chainId);
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
