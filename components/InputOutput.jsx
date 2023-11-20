import { formatAmount } from "../helper-fxs";

const InputOutput = ({
  variant,
  sourceAmount,
  handleSrcAmt,
  routes,
  activeRoute,
  activeSourceToken,
  styles,
}) => {
  return (
    <form>
      {variant === "destination" ? (
        <input
          className={
            styles
              ? Object.values(styles).join(" ")
              : "w-full cursor-not-allowed bg-transparent text-gray-400"
          }
          type="number"
          placeholder="0.0"
          value={
            routes.length
              ? formatAmount(activeRoute?.toAmount, activeSourceToken?.decimals)
              : "0.0"
          }
          disabled
        />
      ) : (
        <input
          className={
            styles ? Object.values(styles).join(" ") : "w-full bg-transparent"
          }
          type="number"
          placeholder="0.0"
          value={sourceAmount}
          onChange={(e) => handleSrcAmt(e)}
        />
      )}
    </form>
  );
};

export default InputOutput;
