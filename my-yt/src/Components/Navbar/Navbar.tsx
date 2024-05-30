import './Navbar.css'
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import {removeUser} from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';


type NavbarProps = {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ setSidebar }) => {
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  }

  const dispatch = useAppDispatch();
  const {isAuth, email} = useAuth();
  
  return (
    <nav className='flex-div'>
     <div className="nav-left flex-div">
      <img className='menu-icon' src={menu_icon} onClick={toggleSidebar} alt="" />
       <Link to= '/'> <img className='logo' src={logo} alt="" /></Link>
     </div>

     
     <div className="nav-middle flex-div">
          <input className='search-box' type="text" placeholder="Search"/>
          <img src={search_icon} alt="" />
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <Link to="/favorites">
          <img src={more_icon} alt="Favorites" />
        </Link>
        <img src={notification_icon}  alt="" />
        {isAuth ? (
          <div>
         <img src={profile_icon} className='user-icon'  alt="" onClick={()=> dispatch(removeUser())} />
        {email}
         </div>
     ) : (
       <Navigate to="/login" />
     )}
      </div>

     </nav>
  )
}


export default Navbar