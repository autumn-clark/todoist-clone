const SideNav = ({ isOpen, children }) => (
    <div className={`sideNav ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  );
  
  export default SideNav;
  