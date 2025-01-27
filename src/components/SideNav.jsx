import SideNavMenu from './SideNavMenu';
import '../global.css'
import '../styles/navbar.css'



const SideNav = ({ isOpen, isShown, showProjects, menu, projects, bottom }) => {
    return (
        <div className={`sideNav ${isOpen ? 'open' : ''} bg-gray-100`}>
            <div className='flex mb-5 justify-between'>
                <button className="">
                    <p className="bg-gray-500 rounded-full w-10 h-10 text-white flex items-center justify-center mr-2">
                        A
                    </p>
                    Ariunaa
                    <i className="material-icons">expand_more</i>
                </button>
                <button className='mr-12'><i className="material-icons-outlined">notifications</i></button>
            </div>
            <SideNavMenu menu={menu} />
            <button className="justify-between">
                My Projects
                <span className='flex'>
                    <div className="">
                        <i className="material-icons hover:text-black">add</i>
                    </div>
                    <div className="" onClick={showProjects}>
                        <i className="material-icons hover:text-black">{isShown ? 'chevron_right' : 'expand_more'}</i>
                    </div>
                </span>
            </button>
            {isShown && (<SideNavMenu menu={projects} />)}
            <div className='absolute bottom-0 w-full'><SideNavMenu menu={bottom} /></div>
        </div>
    )
}

export default SideNav;