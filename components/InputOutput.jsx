const InputOutput = ({ variant, sourceAmount, handleSrcAmt, styles }) => {
  return (
    <form>
      {variant === "destination" ? (
        <input
          className={
            styles ? Object.values(styles).join(" ") : "w-1/4 bg-transparent"
          }
          type="number"
          placeholder="0.0"
          disabled
        />
      ) : (
        <input
          className={
            styles ? Object.values(styles).join(" ") : "w-1/4 bg-transparent"
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
