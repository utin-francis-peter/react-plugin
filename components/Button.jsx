export const Button = ({
  label = "Building with SDN",
  onClick,
  variant = "primary",
  loading,
  fullWidth = false,
  small = false,
  disabled = false,
}) => {
  const variantClasses = `${
    variant === "secondary"
      ? "bg-gray-600 hover:bg-gray-700"
      : "bg-gray-900 hover:bg-black"
  }`;
  const smallClasses = `${small ? "text-sm py-2 px-3" : "text-base p-4"}`;
  const fullWidthClasses = `${fullWidth ? "w-full" : "w-auto"}`;

  return (
    <button
      className={`rounded text-white disabled:bg-gray-600 ${variantClasses} ${fullWidthClasses} ${smallClasses}`}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  );
};
