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
import ViewMarks from '../components/ParentLayout/ViewMarks/ViewMarks'
import ProgressParent from '../components/ParentLayout/ProgressParent/ProgressParent'

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
export const menuItemsParent = [
    { content: 'Home ', icon: <AiFillHome />, link: '/homeparent', component: <h1>homeparent</h1> },
    { content: 'View marks', icon: <BsBookmarkDash />, link: '/viewmark', component:<ViewMarks /> },
    { content: 'Academic Progress', icon: <GiEmptyHourglass />, link: '/studentprogress', component: < ProgressParent/> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> }, 
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },

]


export const AllRoutesStudent = [
    { content: 'Home', icon: <AiFillHome />, link: '/', component: <HomePage /> },
    { content: 'Revision Classes', icon: <BsPeople />, link: '/revision' },
    { content: 'Study Resources', icon: <AiOutlineRead />, link: '/resources' },
    { content: 'Your Marks', icon: <BsBookmarkDash />, link: '/your_mark' },
    { content: 'Academic Progress', icon: <GiEmptyHourglass />, link: '/progress' },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },
    { content: 'Profile', icon: <IoSettingsOutline />, link: '/profile', component: <Profile /> },
];
export const AllRoutesParent= [
    { content: 'Home ', icon: <AiFillHome />, link: '/homeparent', component: <h1>homeparent</h1> },
    { content: 'View marks', icon: <BsBookmarkDash />, link: '/viewmark', component:<ViewMarks /> },
    { content: 'Academic Progress', icon: <GiEmptyHourglass />, link: '/studentprogress', component: < ProgressParent/> },
    { content: 'Feedback', icon: <VscFeedback />, link: '/feedback', component: <FeedBack /> },
    { content: 'Contact Us', icon: <FiPhoneCall />, link: '/contact_us', component: <ContactUs /> },
    { content: 'Setting', icon: <IoSettingsOutline />, link: '/setting', component: <Setting /> },
    { content: 'Profile', icon: <IoSettingsOutline />, link: '/profile', component: <Profile /> },
];

export const markStudent=[
    {name:'Html,css,js',mark:15,maxMark:20,time:'15/06/2004',status:'pass'},
    {name:'python',mark:50,maxMark:100,time:'16/06/2004',status:'pass'},
    {name:'java',mark:17,maxMark:20,time:'17/06/2004',status:'fail'},
    {name:'ruby',mark:14,maxMark:20,time:'18/06/2004',status:'fail'},
    {name:'Sass',mark:12,maxMark:20,time:'19/06/2004',status:'pass'},
    {name:'C#',mark:11,maxMark:20,time:'12/06/2004',status:'pass'},

]
export const  ProgressSubject=[
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:100,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Completed'},
    {module:'Html,css',subject:'Exam',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Exam',lesson:'10',file:'how to code ',progress:100,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Completed'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:100,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Completed'},
    {module:'Html,css',subject:'Exam',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Exam',lesson:'10',file:'how to code ',progress:100,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Completed'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:100,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Completed'},
    {module:'Html,css',subject:'Exam',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Exam',lesson:'10',file:'how to code ',progress:100,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Completed'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:100,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Completed'},
    {module:'Html,css',subject:'Exam',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},
    {module:'Html,css',subject:'Exam',lesson:'10',file:'how to code ',progress:100,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Completed'},
    {module:'Html,css',subject:'Math',lesson:'10',file:'how to code ',progress:50,dateStart:'08/01/2023',classStart:'7 AM',dateEnd:'20/02/2023',classEnd:'8 AM',status:'Schedule'},

]





// export const menuItemTeachers = [
//     {content: 'People', icon: <AiFillHome />, link: '/'},
//     {content: 'Revision Classes', icon: <BsPeople />, link: '/reviosion'},
// ]

