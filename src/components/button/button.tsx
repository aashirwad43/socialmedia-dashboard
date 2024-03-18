interface ButtonProps {
  action: "edit" | "delete";
  handleClick: () => void;
}

function Button({ action, handleClick }: ButtonProps) {
  const label = action === "edit" ? "Edit" : "Delete";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-white ${
        action === "delete"
          ? "bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80"
          : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      } font-medium rounded-lg text-sm p-2 text-center ml-2`}
    >
      {label}
    </button>
  );
}

export default Button;
