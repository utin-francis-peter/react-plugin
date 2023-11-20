import React, { useEffect, useRef, useState } from "react";
// import { useClickOutside } from "../helper-fxs/use-click-outside";
import { useDispatch, useSelector } from "react-redux";
import { setShowTokensModal } from "../redux/features/globals/globals.slice";
import {
  setActiveDestinationToken,
  setActiveSourceToken,
} from "../redux/features/tokens/tokens.slice";

const TokenModal = ({
  variant,
  sourceTokens,
  destinationTokens,
  activeSourceToken,
  activeDestinationToken,
  setActiveToken,
  isLoading,
}) => {
  const dispatch = useDispatch();
  const { showTokensModal } = useSelector((state) => state.globals);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSourceTokens, setFilteredSourceTokens] = useState([]);
  const [filteredDestinationTokens, setFilteredDestinationTokens] = useState(
    []
  );
  //
  //   const tokenModalRef = useRef();
  //   useClickOutside(tokenModalRef, () => setShowModal(false));

  useEffect(() => {
    if (searchQuery.length) {
      const payload = sourceTokens?.filter((t) => {
        const nameMatch = t?.name?.toLowerCase()?.match(searchQuery);
        const addressMatch = t?.address?.toLowerCase()?.match(searchQuery);
        return nameMatch || addressMatch;
      });

      setFilteredSourceTokens(payload);
    } else {
      setFilteredSourceTokens(sourceTokens);
    }
  }, [sourceTokens, searchQuery]);

  //   useEffect(() => {
  //     console.log("filtered src tokens: ", filteredSourceTokens);
  //     console.log("============================================");
  //
  //     console.log("filtered dest tokens: ", filteredDestinationTokens);
  //     console.log("============================================");
  //
  //     console.log("active dest token: ", activeDestinationToken);
  //   }, [
  //     filteredSourceTokens,
  //     filteredDestinationTokens,
  //     activeSourceToken,
  //     activeDestinationToken,
  //   ]);

  useEffect(() => {
    if (searchQuery.length) {
      const payload = destinationTokens?.filter((t) => {
        const nameMatch = t?.name?.toLowerCase()?.match(searchQuery);
        const addressMatch = t?.address?.toLowerCase()?.match(searchQuery);
        return nameMatch || addressMatch;
      });

      setFilteredDestinationTokens(payload);
    } else {
      setFilteredDestinationTokens(destinationTokens);
    }
  }, [destinationTokens, searchQuery]);

  return (
    <div>
      {isLoading ? (
        <div
          role="status"
          className="flex max-w-sm animate-pulse items-center gap-1">
          <div className=" h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className=" h-5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : sourceTokens?.length === 0 || destinationTokens?.length === 0 ? (
        <p>Unsupported</p>
      ) : (
        <button
          className="flex items-center justify-between  gap-3 px-1"
          onClick={() => dispatch(setShowTokensModal())}>
          <span className="flex items-center justify-between gap-2">
            <img
              className="rounded-full"
              src={
                variant === "source"
                  ? activeSourceToken?.logoURI
                  : activeDestinationToken?.logoURI
              }
              alt={`logo`}
              width={20}
            />
            {variant === "source"
              ? activeSourceToken?.symbol
              : activeDestinationToken?.symbol}
          </span>
          <i className={`fa-solid fa-chevron-down`}></i>
        </button>
      )}

      {/* tokens modal */}
      {showTokensModal && (
        <div className="absolute left-0 top-0 h-full w-full overflow-y-scroll">
          <div className=" overflow-hidden bg-white text-black">
            <header className="my-3">
              <section className="flex items-center justify-between border-b-2 p-2">
                <h5>Select Token</h5>
                <button
                  onClick={() => dispatch(setShowTokensModal())}
                  className="text-xl">
                  <i className="fa-solid fa-close"></i>
                </button>
              </section>

              <section className="my-1 px-5">
                <form className="flex justify-center ">
                  <input
                    className="mx-2 w-full border border-gray-400 px-2 py-3 focus:outline-0"
                    type="search"
                    placeholder="Search by name or paste address"
                    value={searchQuery}
                    onChange={(e) =>
                      setSearchQuery(e.target.value.toLowerCase())
                    }
                  />
                </form>
              </section>
            </header>

            <main className="min-h-full overflow-y-scroll">
              {/* TODO: figure out why destination variant is overriding source variant in both instances */}
              {/* {variant === "source" && <p>Source Token Modal</p>}
              {variant === "destination" && <p>Dest Token Modal</p>} */}
              {/* {variant === "source" && console.log("source")
                : console.log("destination")} */}
              {variant === "source"
                ? filteredSourceTokens?.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        dispatch(setActiveSourceToken(t.symbol.toLowerCase()));
                        dispatch(setShowTokensModal());
                      }}
                      className="block flex w-full items-center gap-5 p-3 hover:bg-gray-300">
                      <div>
                        <img
                          src={t.logoURI}
                          alt={`${t.name} icon`}
                          width={30}
                        />
                      </div>
                      <div>
                        <h6>
                          {t.name}

                          {activeSourceToken?.name === t.name && (
                            <i className="fa-solid fa-circle-check mx-2 text-green-800"></i>
                          )}
                        </h6>
                        <p className="text-left text-xs">{t.symbol}</p>
                      </div>
                    </button>
                  ))
                : filteredDestinationTokens?.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        dispatch(
                          setActiveDestinationToken(t.symbol.toLowerCase())
                        );
                        dispatch(setShowTokensModal());
                      }}
                      className="block flex w-full items-center gap-5 p-3 hover:bg-gray-300">
                      <div>
                        <img
                          src={t.logoURI}
                          alt={`${t.name} icon`}
                          width={30}
                        />
                      </div>
                      <div>
                        <h6>
                          {t.name}

                          {activeDestinationToken?.name === t.name && (
                            <i className="fa-solid fa-circle-check mx-2 text-green-800"></i>
                          )}
                        </h6>
                        <p className="text-left text-xs">{t.symbol}</p>
                      </div>
                    </button>
                  ))}
              {/* {console.log(variant)} */}
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenModal;
