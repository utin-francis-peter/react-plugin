const InputOutput = ({ variant, value, handleAmount, styles }) => {
  return (
    <form>
      {variant === "output" ? (
        <input
          className={Object.values(styles).join(" ")}
          type="number"
          value={value}
          disabled
        />
      ) : (
        <input
          className={Object.values(styles).join(" ")}
          type="number"
          placeholder="Enter amount to swap/bridge"
          onChange={(e) => handleAmount(e.target.value)}
        />
      )}
    </form>
  );
};

export default InputOutput;
