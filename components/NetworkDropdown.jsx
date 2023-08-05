import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChains } from "../redux/features/chains/chains.slice";

const NetworkDropdown = ({ variant }) => {
  const dispatch = useDispatch();
  const { loading, chainsList, error } = useSelector((state) => state.chains);

  const [activeChain, setActiveChain] = useState();
  const [showChains, setShowChains] = useState(false);

  const handleActiveNetwork = (id) => {
    setActiveChain(() => chainsList.result?.find((d) => d.chainId === id));
  };

  useEffect(() => {
    dispatch(getChains());
  }, []);

  // setting active network on initial page load
  useEffect(() => {
    if (variant === "from") {
      setActiveChain(() =>
        chainsList.result?.find((d) => d.name.toLowerCase() === "ethereum")
      );
    } else if (variant === "to") {
      setActiveChain(() =>
        chainsList.result?.find((d) => d.name.toLowerCase() === "polygon")
      );
    }
  }, []);

  return (
    <div className="w-2/5">
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
        <section className=" bg-gray-500 p-2">
          {chainsList.result
            ?.filter((d) => d.chainId !== activeChain.chainId)
            .map((d, i) => (
              <button
                className="block flex w-full items-center gap-5 py-1 hover:bg-gray-100"
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
