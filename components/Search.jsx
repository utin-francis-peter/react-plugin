export const Search = ({ disabled, focused, placeholder }) => {
  return (
    <div className="flex items-center">
      <i className="fa-solid fa-search absolute left-7 z-10 text-blue-400"></i>
      <input
        className={`relative h-10 w-full rounded-lg border-2 border-gray-200 pl-8 pr-1 outline-0 ${
          focused ? " focus:border-blue-400" : ""
        }`}
        type="search"
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};
