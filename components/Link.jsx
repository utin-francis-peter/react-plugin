export const Link = ({
  label,
  variant,
  hasIcon,
  icon,
  isHovered,
  isVisited,
  isActive,
  isDisabled,
}) => {
  return (
    <a
      className={`flex items-center gap-1 text-blue-400 ${
        variant === "inline" ? "underline" : "no-underline"
      } ${
        isHovered
          ? "text-blue-100"
          : isVisited
          ? "text-blue-600"
          : isActive
          ? "text-blue-800"
          : isDisabled
          ? "text-gray-200"
          : ""
      }`}>
      {label}
      {hasIcon && <i className={`fa-solid fa-${icon}`}></i>}
    </a>
  );
};
