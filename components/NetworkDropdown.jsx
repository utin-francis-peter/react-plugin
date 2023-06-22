import { useState } from "react";
import { data } from "../data/data";
import { useEffect } from "react";

const NetworkDropdown = ({ variant }) => {
  // active network
  const [activeNetwork, setActiveNetwork] = useState();
  // help us render section component conditionally
  const [showNetworks, setShowNetworks] = useState(false);

  const handleActiveNetwork = (chainID) => {
    // update active network
    setActiveNetwork(() => data.find((d) => d.chainId === chainID));
    // toggle showNetworks state
    setShowNetworks(!showNetworks);
  };

  useEffect(() => {
    //   if variant is FROM, set active network as Ethereum

    // else if variant is TO, set active network to Polygon

    if (variant === "from") {
      setActiveNetwork(() =>
        data.find((d) => d.name.toLowerCase() === "ethereum")
      );
    } else if (variant === "to") {
      setActiveNetwork(() =>
        data.find((d) => d.name.toLowerCase() === "polygon")
      );
    }
  }, []);
  console.log(activeNetwork);

  return (
    <div>
      {/* active network is rendered in button */}
      <button
        className="flex w-1/5 items-center justify-between border border-red-300 px-2"
        onClick={() => setShowNetworks(!showNetworks)}>
        <span className="flex items-center gap-2">
          <img
            className="rounded-full"
            src={activeNetwork?.icon}
            alt={`${activeNetwork?.name} logo`}
            width={20}
          />
          {activeNetwork?.name}
        </span>
        <i
          className={`fa-solid fa-chevron-${showNetworks ? "up" : "down"}`}></i>
      </button>

      {/* all networks are rendered here */}
      {showNetworks && (
        <section>
          {data
            .filter((d) => d.chainId !== activeNetwork.chainId)
            .map((d, i) => (
              <button
                onClick={() => handleActiveNetwork(d.chainId)}
                key={i}
                className="flex w-1/5 items-center justify-between border border-red-300 px-2">
                <img
                  className="rounded-full"
                  src={d?.icon}
                  alt={`${d?.name} logo`}
                  width={20}
                />
                {d?.name}
              </button>
            ))}
        </section>
      )}
    </div>
  );
};

export default NetworkDropdown;
