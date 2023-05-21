export const Button = ({
  label,
  onClick,
  variant,
  size,
  loading,
  fullWidth,
}) => {
  return <button className="p-4 bg-red-800 text-white rounded">{label}</button>;
};
