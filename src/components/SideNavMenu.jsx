import Button from './Button';

const SideNavMenu = ({ showProjects, isShown }) => {
  const buttons = [
    <Button key={1} isActive={false} onClick={() => { }} label={'Add task'} icon={'add_circle'} />,
    <Button key={2} isActive={false} onClick={() => { }} label={'Search'} icon={'search'} />,
    <Button key={3} isActive={true} onClick={() => { }} label={'Inbox'} icon={'inbox'} />,
    <Button key={4} isActive={false} onClick={() => { }} label={'Today'} icon={'today'} />,
    <Button key={5} isActive={false} onClick={() => { }} label={'Upcoming'} icon={'calendar_month'} />,
    <Button key={6} isActive={false} onClick={() => { }} label={'Filters & Labels'} icon={'grid_view'} />,
  ];
  const projects = [
    <Button key={1} isActive={false} onClick={() => { }} label={'Home'} icon={'tag'} />,
    <Button key={1} isActive={false} onClick={() => { }} label={'Home'} icon={'tag'} />,
  ];
  return (
    <div className="sideNavMenu">
      <ul>
        {buttons.map((button, index) => (
          <li key={index}>
            {button}
          </li>
        ))}
      </ul>
      <button className="projectsBtn">
        My Projects
        <span>
          <div className="iconButton">
            <i className="material-icons">add</i>
          </div>
          <div className="iconButton" onClick={showProjects}>
            <i className="material-icons">{isShown ? 'chevron_right' : 'expand_more'}</i>
          </div>
        </span>
      </button>
      {!isShown && (
        <ul className="project">
          {projects.map((button, index) => (
            <li key={index}>
              {button}
            </li>
          ))}
        </ul>)}
    </div>
  );
}

export default SideNavMenu;
