const ProjectsDropdown = ({ showProjects, isShown }) => (
    <div><button className="projectsBtn">
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
      <li className="projects">
        <ul><i className="material-icons">tag</i>Home</ul>
      </li>
    )}
    </div>
  );
  
  export default ProjectsDropdown;
  