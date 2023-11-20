import React, { useRef, useState } from "react";
import { secsToMinsConverter } from "../helper-fxs/secs-to-mins";
import { formatAmount } from "../helper-fxs";
import { useDispatch, useSelector } from "react-redux";
import { setActiveRoute } from "../redux/features/quote/quote.slice";
import { useClickOutside } from "../helper-fxs/use-click-outside";
import { setShowSelectedRouteInfo } from "../redux/features/globals/globals.slice";

const Route = ({
  routes,
  showAllRoute,
  setShowAllRoute,
  activeRoute,
  activeSourceToken,
  activeDestinationToken,
}) => {
  const dispatch = useDispatch();
  const routeRef = useRef();

  const { showSelectedRouteInfo } = useSelector((state) => state.globals);

  useClickOutside(routeRef, () => setShowAllRoute(false));
  return (
    <div>
      {/* a display for active route */}
      <div className="rounded-lg bg-gray-600 p-3">
        <header>
          <button
            className="flex w-full items-center justify-between"
            onClick={() => dispatch(setShowSelectedRouteInfo())}>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8">
                <img
                  className="w-full rounded-full"
                  src={activeRoute?.userTxs[0]?.steps[0]?.protocol?.icon}
                  alt="bridge logo"
                />
              </div>
              <h2>
                {activeRoute?.userTxs[0]?.steps[0]?.protocol?.displayName}

                <span className="ml-1 mr-1">~</span>

                <span className="text-gray-400">
                  {secsToMinsConverter(activeRoute?.userTxs[0]?.serviceTime)}
                  mins
                </span>
              </h2>
            </div>

            <i
              className={`fa-solid fa-chevron-${
                showSelectedRouteInfo ? "up" : "down"
              }
                          }`}></i>
          </button>
        </header>

        {showSelectedRouteInfo && (
          <main className="mt-4">
            <div className="flex justify-between border-b border-gray-700 p-1">
              <p>Estimated Output:</p>
              <h3>
                {Number(
                  formatAmount(
                    activeRoute?.toAmount,
                    activeSourceToken?.decimals
                  )
                ).toFixed(4)}
                <span> USDC</span>
              </h3>
            </div>
            <div className="flex justify-between border-b border-gray-700 p-1">
              <p>Bridge Fee:</p>
              <h3>
                {activeRoute?.userTxs[0]?.steps[0]?.protocolFees?.feesInUsd}{" "}
                <span> USDC</span>
              </h3>
            </div>
            <div className="flex justify-between border-b border-gray-700 p-1">
              <p>Gas Fee:</p>
              <h3>{activeRoute?.totalGasFeesInUsd.toFixed(4)}</h3>
            </div>
            <div className="flex justify-between p-1">
              <p>Minimum Received:</p>
              <h3>
                {Number(
                  formatAmount(
                    activeRoute?.userTxs[0].steps[0].minAmountOut,
                    activeSourceToken?.decimals
                  )
                ).toFixed(4)}
              </h3>
            </div>
          </main>
        )}
      </div>

      {showAllRoute && (
        <div>
          {/* modal inner */}
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-white text-black">
            <header className=" border  border-b-black">
              <div className="flex items-center justify-between p-3">
                <p>Showing {routes?.length} routes</p>
                <button onClick={() => setShowAllRoute(false)}>X</button>
              </div>
            </header>

            <main className="h-full overflow-y-scroll p-3">
              {routes?.map((route, i) => (
                <div
                  key={i}
                  className={` mt-3 flex cursor-pointer items-center gap-3  p-2 ${
                    route.routeId === activeRoute.routeId
                      ? " bg-gray-900 text-white"
                      : "border border-gray-900"
                  }`}
                  onClick={() => {
                    dispatch(setActiveRoute(route.routeId));
                    setShowAllRoute(false);
                  }}>
                  <div className="h-8 w-8">
                    <img
                      className="w-full rounded-full"
                      src={route?.userTxs[0]?.steps[0]?.protocol?.icon}
                      alt="bridge logo"
                    />
                  </div>
                  <div className="route-info">
                    <h2>
                      {route?.userTxs[0]?.steps[0]?.protocol?.displayName} ~
                      <span className="text-gray-400">
                        {secsToMinsConverter(route?.userTxs[0]?.serviceTime)}{" "}
                        mins
                      </span>
                    </h2>

                    <div className="flex items-center gap-1 text-gray-400">
                      <h2>
                        Est. Output:
                        <span>
                          {Number(
                            formatAmount(
                              route?.toAmount,
                              activeSourceToken?.decimals
                            )
                          ).toFixed(3)}
                          {activeDestinationToken?.symbol}
                        </span>
                      </h2>
                      <h2>
                        Gas Fees:
                        <span>
                          ${Number(route?.totalGasFeesInUsd).toFixed(3)}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Route;
