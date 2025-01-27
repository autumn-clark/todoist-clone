import Button from "./Button";

const SideNavMenu = ({ menu }) => {
  return (
    <div>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.id}>
            <Button
              isActive={menuItem.isActive}
              onClick={() => {}}
              label={menuItem.label}
              icon={menuItem.icon}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNavMenu;
