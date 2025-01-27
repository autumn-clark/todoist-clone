import Task from "../components/Task";
import { inbox } from "../config/task";

const Inbox = ({isOpen}) => {
    return (
        <div className='page'>
            <div className='text-3xl font-bold'>Inbox</div>
            <ul className=''>
                {inbox.map((task, index) => (
                    <Task
                        key={index}
                        title={task.title}
                        description={task.description}
                        date={task.date}
                        priority={task.priority} />
                ))}
            </ul>
        </div>
    )
}

export default Inbox;