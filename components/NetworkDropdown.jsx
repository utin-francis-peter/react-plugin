import React, { useEffect, useState } from "react";

const NetworkDropdown = ({
  variant,
  chainsList,
  setActiveChain,
  activeSourceChain,
  activeDestinationChain,
}) => {
  const [showChains, setShowChains] = useState(false);
  let chainList;

  if (chainsList.result?.length) {
    chainList =
      variant === "source"
        ? chainsList.result.filter((d) => d.name.toLowerCase() !== "zora")
        : chainsList.result;
  }

  return (
    <div className="flex gap-1">
      <span>{variant === "source" ? "From" : "To"}</span>
      <button
        className="flex w-full items-center justify-between  gap-1  px-1"
        onClick={() => setShowChains(!showChains)}>
        <span className="flex items-center gap-1">
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
        <div className=" ">
          <section className="absolute  bg-gray-500 p-2">
            {chainList
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
                    setActiveChain(variant, d.chainId);
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
        </div>
      )}
    </div>
  );
};

export default NetworkDropdown;
