export function EduButton({ active, onClick, children }) {
  const buttonClasses = active
    ? "text-black bg-purple-200"
    : "text-white bg-transparent";
  return (
    <>
      <button
        onClick={onClick}
        className={`px-6 py-3 w-full sm:w-fit lg:px-8 lg:py-4 rounded-full ${buttonClasses}`}
      >
        <p>{children}</p>
      </button>
    </>
  );
}
