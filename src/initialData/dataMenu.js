import {AiFillHome, AiOutlineRead } from 'react-icons/ai'
import {BsPeople, BsBookmarkDash} from 'react-icons/bs'
import {GrInProgress} from 'react-icons/gr'
import {GiEmptyHourglass} from 'react-icons/gi'
import {VscFeedback} from 'react-icons/vsc'
import {FiPhoneCall} from 'react-icons/fi'
import {IoSettingsOutline} from 'react-icons/io5'
import HomePage from '../components/StudentLayout/Home/HomePage'


export const menuItemStudents = [
    {content: 'Home', icon: <AiFillHome />,prefix: <AiFillHome />, link: '/', component: <HomePage />},
    {content: 'Revision Classes', icon: <BsPeople />, prefix: <BsPeople />,link: '/revision'},
    {content: 'Study Resources', icon: <AiOutlineRead />, prefix: <AiOutlineRead />,link: '/resources'},
    {content: 'Your Marks', icon: <BsBookmarkDash />, prefix: <BsBookmarkDash />,link: '/your_mark'},
    {content: 'Academic Progress', icon: <GiEmptyHourglass />, prefix: <GiEmptyHourglass />,link: '/progress'},
    {content: 'Feedback', icon: <VscFeedback />, prefix: <VscFeedback />,link: '/feedback'},
    {content: 'Contact Us', icon: <FiPhoneCall />, prefix: <FiPhoneCall />,link: '/contact_us'},
    {content: 'Setting', icon: <IoSettingsOutline />, prefix: <IoSettingsOutline />,link: '/setting'}
];

// export const menuItemTeachers = [
//     {content: 'People', icon: <AiFillHome />, link: '/'},
//     {content: 'Revision Classes', icon: <BsPeople />, link: '/reviosion'},
// ]

