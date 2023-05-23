export const Accordion = ({ title, body, showBody, onClick }) => {
  return (
    <div className={`border p-2 ${!showBody ? "hover:bg-red-400" : ""}`}>
      <header
        className={`flex items-center justify-between rounded p-2 ${
          showBody ? "border-2 border-red-500" : ""
        }`}
        onClick={onClick}>
        <h3>{title}</h3>
        <h3>
          <i className={`fa-solid fa-chevron-${showBody ? "up" : "down"}`}></i>
        </h3>
      </header>
      {showBody && <body className="my-5">{body}</body>}
    </div>
  );
};
