import '../styles/task.css';

const Task = ({ title, description, date, priority, reminders, labels, location, deadline, extension }) => {
  const priColorStroke = {
    1: "bg-red-500",
    2: "bg-yellow-500",
    3: "bg-blue-500",
    4: "bg-gray-500",
  }[priority] || "bg-gray-300";

  const priColorFill = {
    1: "bg-red-100",
    2: "bg-yellow-100",
    3: "bg-blue-200",
    4: "bg-gray-200",
  }[priority] || "bg-gray-300";

  const priSvgStroke = {
    1: "red",
    2: "yellow",
    3: "blue",
    4: "gray",
  }[priority] || "black";

  const priSvgFill = {
    1: "fill-red-100",
    2: "fill-yellow-100",
    3: "fill-blue-100",
    4: "fill-gray-100",
  }[priority] || "fill-black-100";
  return (
    <li className="flex flex-col list-item">
      <div className='flex items-start'>
        <span className={`${priColorStroke} ease-in duration-150 hover:opacity-0 z-10  w-6 h-6 rounded-full mt-1 ml-1 absolute`}><span className={` ${priColorFill} z-20 ease-in duration-150 hover:opacity-0 bg-red-100 w-5 h-5 rounded-full absolute`}></span></span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={priSvgStroke} width="26" height="26" className={`${priSvgFill} z-0 flex-shrink-0`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <div className=''>
          <div>{title}</div>
          <div className="text-sm text-gray-600">{description}</div>
          <div className="flex items-center text-red-600 text-sm "><i className="material-icons text-red-600 text-sm">event</i>{date}</div>
        </div>
        <div className="flex ml-auto buttons">
                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg></button>
                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg></button>
                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg></button>
                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg></button>
              </div>
      </div>
      <div className="w-full h-px bg-gray-100 drop-shadow-2xl"></div>
    </li>
  )
}

export default Task;