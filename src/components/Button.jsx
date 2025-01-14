const Button = ({ isActive, label, onClick , icon}) =>{
  console.log(label+", "+icon);
  return (
    <button className={`button ${isActive ? 'active' : ''}`} onClick={onClick}>
     <i className="material-icons">{icon}</i> {label}
    </button>
  );
} 
  
  export default Button;
  