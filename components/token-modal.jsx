import React, { useEffect, useState } from "react";

const TokenModal = ({
  variant,
  sourceTokens,
  destinationTokens,
  activeSourceToken,
  activeDestinationToken,
  setActiveToken,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSourceTokens, setFilteredSourceTokens] = useState([]);
  const [filteredDestinationTokens, setFilteredDestinationTokens] = useState(
    []
  );

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
      <button
        className="block flex items-center justify-between  gap-3 px-1"
        onClick={() => setShowModal(!showModal)}>
        <span className="flex items-center justify-between gap-2">
          <img
            className="rounded-full"
            src={
              variant === "source"
                ? activeSourceToken?.icon
                : activeDestinationToken?.icon
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

      {showModal && (
        <>
          {/* modal underlay */}
          <div
            className="fixed left-0 top-0 w-full overflow-hidden"
            onClick={(e) => {
              e.stopPropagation();
              console.log("close modal!");
            }}
            style={{
              height: "100vh",
              background: "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7))",
              backdropFilter: "blur(5px)",
            }}></div>

          {/* modal inner */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white"
            style={{ width: "50vw", height: "80vh" }}>
            <header className="my-3">
              <section className="flex items-center justify-between border-b-2 p-2">
                <h5>Select Token</h5>
                <button onClick={() => setShowModal(false)} className="text-xl">
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

            <main className="h-full overflow-y-scroll">
              {variant === "source"
                ? filteredSourceTokens?.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveToken(variant, t.symbol.toLowerCase());
                        setShowModal(false);
                      }}
                      className="block flex w-full items-center gap-5 p-3 hover:bg-gray-100">
                      <div>
                        <img src={t.icon} alt={`${t.name} icon`} width={30} />
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
                        setActiveToken(variant, t.symbol.toLowerCase());
                        setShowModal(false);
                      }}
                      className="block flex w-full items-center gap-5 p-3 hover:bg-gray-100">
                      <div>
                        <img src={t.icon} alt={`${t.name} icon`} width={30} />
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
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default TokenModal;
