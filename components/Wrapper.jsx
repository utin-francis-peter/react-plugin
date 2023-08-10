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
} from "../redux/features/tokens/tokens.slice";

const Wrapper = () => {
  const dispatch = useDispatch();
  const { loading, chainsList, activeSourceChain, activeDestinationChain } =
    useSelector((state) => state.chains);

  console.log("dest id", activeDestinationChain);
  const handleActiveChain = (variant, id) => {
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

  useEffect(() => {
    if (activeSourceChain?.chainId) {
      dispatch(getSourceTokens(activeSourceChain.chainId));
    }
  }, [chainsList, activeSourceChain]);

  useEffect(() => {
    if (activeSourceChain?.chainId && activeDestinationChain?.chainId) {
      console.log(
        "latest",
        activeDestinationChain.chainId,
        activeSourceChain.chainId
      );

      dispatch(
        getDestinationTokens(
          activeSourceChain.chainId,
          activeDestinationChain.chainId
        )
      );
    }
  }, [chainsList, activeSourceChain, activeDestinationChain]);

  return (
    <div>
      <div>
        <p>From</p>
        <NetworkDropdown
          variant="source"
          chainsList={chainsList}
          handleActiveChain={handleActiveChain}
          activeSourceChain={activeSourceChain}
        />
      </div>
      <div>
        <p>To</p>
        <NetworkDropdown
          variant="destination"
          chainsList={chainsList}
          handleActiveChain={handleActiveChain}
          activeDestinationChain={activeDestinationChain}
        />
      </div>

      <div className="mt-5">
        <p>From-token</p>
        <TokenModal />
      </div>

      <div>
        <p>To-token</p>
        <TokenModal />
      </div>
    </div>
  );
};

export default Wrapper;
