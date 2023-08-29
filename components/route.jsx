import React from "react";
import { secsToMinsConverter } from "../helper-fxs/secs-to-mins";

const Route = ({ loading, routes, activeRoute, activeDestinationToken }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8">
          <img
            className="w-full rounded-full"
            src={activeRoute?.userTxs[0]?.steps[0]?.protocol?.icon}
            alt="bridge logo"
          />
        </div>
        <div className="route-info">
          <h2>
            {activeRoute?.userTxs[0]?.steps[0]?.protocol?.displayName} ~
            <span className="text-gray-400">
              {secsToMinsConverter(activeRoute?.userTxs[0]?.serviceTime)} mins
            </span>
          </h2>

          <div className="flex items-center gap-1 text-gray-400">
            <h2>
              Est. Output:
              <span className="text-white">
                {activeRoute?.toAmount} {activeDestinationToken?.symbol}
              </span>
            </h2>
            <h2>
              Gas Fees:
              <span className="text-white">
                ${activeRoute?.totalGasFeesInUsd.toFixed(3)}
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="route-modal"></div>
    </div>
  );
};

export default Route;
