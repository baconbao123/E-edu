import { AiFillHome, AiOutlineRead } from 'react-icons/ai'
import { BsPeople, BsBookmarkDash } from 'react-icons/bs'
import { GrInProgress } from 'react-icons/gr'
import { GiEmptyHourglass } from 'react-icons/gi'
import { VscFeedback } from 'react-icons/vsc'
import { FiPhoneCall } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import HomePage from '../components/StudentLayout/Home/HomePage'
import FeedBack from '../common/FeedBack/FeedBack';
import ContactUs from '../common/ContactUs/ContactUs';
import Setting from '../common/Setting/Setting';
import Profile from '../common/Profile/Profile'
import { Route } from 'react-router-dom'
export const menuItemStudents = [
    { content: 'Home', icon: <AiFillHome />, link: '/', component: <HomePage /> },
    { content: 'Revision Classes', icon: <BsPeople />, link: '/revision' },
    { content: 'Study Resources', icon: <AiOutlineRead />, link: '/resources' },
    { content: 'Your Marks', icon: <BsBookmarkDash />, link: '/your_mark' },
    { content: 'Academic Progress', icon: <GiEmptyHourglass />, link: '/progress' },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },
  
];
export const AllRoutes = [
    { content: 'Home', icon: <AiFillHome />, link: '/', component: <HomePage /> },
    { content: 'Revision Classes', icon: <BsPeople />, link: '/revision' },
    { content: 'Study Resources', icon: <AiOutlineRead />, link: '/resources' },
    { content: 'Your Marks', icon: <BsBookmarkDash />, link: '/your_mark' },
    { content: 'Academic Progress', icon: <GiEmptyHourglass />, link: '/progress' },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },
    { content: 'Profile', icon: <IoSettingsOutline />, link: '/profile', component: <Profile/> },
];



// export const menuItemTeachers = [
//     {content: 'People', icon: <AiFillHome />, link: '/'},
//     {content: 'Revision Classes', icon: <BsPeople />, link: '/reviosion'},
// ]

