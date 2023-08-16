import { useEffect, useState } from "react";
import NetworkDropdown from "./NetworkDropdown";
import TokenModal from "./token-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveDestinationChain,
  setActiveSourceChain,
} from "../redux/features/chains/chains.slice";
import { getChains } from "../redux/features/chains/chains.slice";
import {
  getDestinationTokens,
  getSourceTokens,
  setActiveDestinationToken,
  setActiveSourceToken,
} from "../redux/features/tokens/tokens.slice";
import InputOutput from "./InputOutput";

const Wrapper = () => {
  // const [dispatchedDefSrcTkn, setDispatched] = useState(false);

  const dispatch = useDispatch();
  const { loading, chainsList, activeSourceChain, activeDestinationChain } =
    useSelector((state) => state.chains);
  const {
    sourceTokens,
    destinationTokens,
    activeSourceToken,
    activeDestinationToken,
  } = useSelector((state) => state.tokens);

  // chains section
  const setActiveChain = (variant, id) => {
    switch (variant) {
      case "source":
        dispatch(setActiveSourceChain(id));
        break;
      case "destination":
        dispatch(setActiveDestinationChain(id));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(getChains());
  }, []);

  useEffect(() => {
    if (chainsList.result?.length !== 0) {
      dispatch(setActiveSourceChain(1));
      dispatch(setActiveDestinationChain(137));
    }
  }, [chainsList]);

  // tokens section
  const setActiveToken = (variant, symbol) => {
    // the function updates activeSourceToken/activeDestinationToken whenever a token is selected from the tokensList based on the activeSourceChain/activeDestinationChain
    switch (variant) {
      case "source":
        dispatch(setActiveSourceToken(symbol));
        break;
      case "destination":
        dispatch(setActiveDestinationToken(symbol));
        break;
      default:
        break;
    }
  };

  const setActiveTokenParam = (tokenList, variant) => {
    // take in either source or destination tokenlist and dispatch the symbol

    // modify the function to set the active source token to USDC if supported, and active destination token to its native token if supported. ONLY IF activeSourceChain ID and activeDestinationChain ID are the same

    const usdcToken = tokenList.find(
      (token) => token.symbol.toLowerCase() === "usdc"
    );
    const nativeToken = tokenList.find((token) =>
      // TODO: make the check more efficient!!
      // TODO: figure out a better property for making the native token check
      token.address.startsWith("0xeeeeeeeeeeeeeeeeeeeeee")
    );
    const firstToken = tokenList[0];
    console.log(firstToken);

    if (activeSourceChain?.chainId === activeDestinationChain?.chainId) {
      console.log("active and destination chain are the same");

      switch (variant) {
        case "source":
          dispatch(
            setActiveSourceToken(
              usdcToken.symbol?.toLowerCase() ||
                firstToken.symbol?.toLowerCase()
            )
          );
          break;
        case "destination":
          dispatch(
            setActiveDestinationToken(
              nativeToken.symbol?.toLowerCase() ||
                firstToken.symbol?.toLowerCase()
            )
          );
          break;
        default:
          break;
      }
    } else {
      console.log("active and destination chain are not the same");

      switch (variant) {
        case "source":
          dispatch(
            setActiveSourceToken(
              usdcToken.symbol?.toLowerCase() ||
                nativeToken.symbol?.toLowerCase() ||
                firstToken.symbol?.toLowerCase()
            )
          );
          break;
        case "destination":
          dispatch(
            setActiveDestinationToken(
              usdcToken.symbol?.toLowerCase() ||
                nativeToken.symbol?.toLowerCase() ||
                firstToken.symbol?.toLowerCase()
            )
          );
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (activeSourceChain?.chainId) {
      dispatch(getSourceTokens(activeSourceChain.chainId));
    }
  }, [activeSourceChain]);

  useEffect(() => {
    if (activeSourceChain?.chainId && activeDestinationChain?.chainId) {
      dispatch(
        getDestinationTokens({
          sourceId: activeSourceChain.chainId,
          destinationId: activeDestinationChain.chainId,
        })
      );
    }
  }, [activeDestinationChain]);

  useEffect(() => {
    if (sourceTokens?.length) {
      setActiveTokenParam(sourceTokens, "source");
      //       const symbol = setActiveTokenParam(
      //         sourceTokens,
      //         activeSourceChain,
      //         activeDestinationChain
      //       );
      //       console.log("source symbol", symbol);
      //
      //       if (typeof symbol === "object") {
      //         dispatch(setActiveSourceToken(symbol.activeSourceSymbol));
      //       } else {
      //         dispatch(setActiveSourceToken(symbol));
      //       }
    }
  }, [activeSourceChain, sourceTokens]);

  useEffect(() => {
    if (destinationTokens?.length) {
      setActiveTokenParam(destinationTokens, "destination");

      //       const symbol = setActiveTokenParam(
      //         destinationTokens,
      //         activeSourceChain,
      //         activeDestinationChain
      //       );
      //       console.log("dest symbol", symbol);
      //
      //       if (typeof symbol === "object") {
      //         dispatch(setActiveDestinationToken(symbol.activeDestinationSymbol));
      //       } else {
      //         dispatch(setActiveDestinationToken(symbol));
      //       }
    }
  }, [activeDestinationChain, destinationTokens]);

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="w-1/3 border bg-gray-900 p-4">
        <section className=" mb-5 bg-gray-600">
          <section className="flex items-center justify-between border-b border-b-gray-50 p-2">
            <div>
              <NetworkDropdown
                variant="source"
                chainsList={chainsList}
                setActiveChain={setActiveChain}
                activeSourceChain={activeSourceChain}
              />
            </div>
            <div>Bal</div>
          </section>

          <section className="flex items-center justify-between p-2">
            <div>
              <InputOutput variant={"source"} />
            </div>
            <div>
              <TokenModal
                variant="source"
                sourceTokens={sourceTokens}
                activeSourceToken={activeSourceToken}
                setActiveToken={setActiveToken}
              />
            </div>
          </section>
        </section>

        <section className="bg-gray-600">
          <section className="flex items-center justify-between border-b border-b-gray-50 p-2">
            <div>
              <NetworkDropdown
                variant="destination"
                chainsList={chainsList}
                setActiveChain={setActiveChain}
                activeDestinationChain={activeDestinationChain}
              />
            </div>
            <div>Bal</div>
          </section>

          <section className="flex items-center justify-between p-2">
            <div>
              <InputOutput variant={"destination"} />
            </div>
            <div>
              <TokenModal
                variant="destination"
                destinationTokens={destinationTokens}
                activeDestinationToken={activeDestinationToken}
                setActiveToken={setActiveToken}
              />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Wrapper;
