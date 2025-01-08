import './styles.css'

function App() {

  return (
    <div className="sideNav">
      <div className="sideNavTop">
        <div className='sideNavTopMenu'>
          <button>A Name v</button>
          <button>bell</button>
        </div>
        <div className="sideNavMenu">
          <li>
            <ul>Add task</ul>
            <ul>Search</ul>
            <ul>Today</ul>
            <ul>Upcoming</ul>
            <ul>Filters & Labels</ul>
            <ul>My Projects</ul>
            <ul>#Home</ul>
          </li>
        </div>
      </div>
      <div className="sideNavBottom">
        <li>
          <ul>Add a team</ul>
          <ul>Browse templates</ul>
        </li>
      </div>
    </div>
  )
}

export default App
