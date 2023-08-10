import React, { useEffect, useState } from "react";
import { fromToken } from "../data/data";

const TokenModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeToken, setActiveToken] = useState();

  useEffect(() => {
    setActiveToken(() =>
      fromToken.find((token) => token.symbol.toLowerCase() === "usdc")
    );
  }, []);
  return (
    <div>
      <button
        className="block flex items-center justify-between  gap-3 border border-red-300 px-1"
        onClick={() => setShowModal(!showModal)}>
        <span className="flex items-center justify-between gap-2">
          <img
            className="rounded-full"
            src={activeToken?.icon}
            alt={`${activeToken?.icon} logo`}
            width={20}
          />
          {activeToken?.symbol}
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
                  />
                </form>
              </section>
            </header>

            <main className="h-full overflow-y-scroll">
              {fromToken.map((t, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveToken(t);
                    setShowModal(false);
                  }}
                  className="block flex w-full items-center gap-5 p-3 hover:bg-gray-100">
                  <div>
                    <img src={t.icon} alt={`${t.name} icon`} width={30} />
                  </div>
                  <div>
                    <h6>
                      {t.name}

                      {activeToken.name === t.name && (
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
