const InputOutput = ({ variant, value, handleAmount, styles }) => {
  return (
    <form>
      {variant === "destination" ? (
        <input
          className={
            styles ? Object.values(styles).join(" ") : "w-1/4 bg-transparent"
          }
          type="number"
          value={value}
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
          onChange={(e) => handleAmount(e.target.value)}
        />
      )}
    </form>
  );
};

export default InputOutput;
