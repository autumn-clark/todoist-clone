const Button = ({ isActive, label, onClick, icon }) => {
  const baseClasses = "rounded-md flex ";
  const activeClasses = "w-full text-red-500 bg-red-100 hover:text-red-500 hover:bg-red-100";
  const hoverClasses = "hover:rounded-md hover:flex";

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : ""} ${hoverClasses}`}
      onClick={onClick}
    >
      {icon && <i className={`material-icons ${isActive ? "text-red-500 hover:text-red-500" : ""}` }>{icon}</i>}
      {label}
    </button>
  );
};

export default Button;
