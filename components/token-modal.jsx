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
            className="fixed left-0 top-0 w-full"
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
            style={{ width: "50vw", height: "80vh" }}>
            <header className=" flex items-center justify-between border-b-2 px-5">
              <h5>Select Token</h5>
              <button className="rounded-full">
                <i className="fa-solid fa-close"></i>
              </button>
            </header>

            <main>
              <section className=" px-5">
                <form className="flex justify-center ">
                  <input
                    className="w-4/5 border border-gray-400 px-2 py-3 focus:outline-0"
                    type="search"
                    placeholder="Search by name or paste address"
                  />
                </form>
                <div></div>
              </section>

              <section className=" overflow-hidden">
                {fromToken.map((t, i) => (
                  <button
                    key={i}
                    className="flex w-full justify-between px-2 py-3">
                    <div className="flex items-center gap-2">
                      <img src={t.icon} alt={`${t.name} icon`} width={20} />
                      <span>
                        <h6>{t.name}</h6>
                        <p>{t.symbol}</p>
                      </span>
                    </div>
                    <div></div>
                  </button>
                ))}
              </section>
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default TokenModal;
