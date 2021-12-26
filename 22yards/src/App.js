import './App.css';
import Login from './Components/Login';
import { IoIosNotifications,IoIosLogOut } from "react-icons/io";
import {FaUserCircle} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {GrAddCircle} from "react-icons/gr";

function App() {
  return (
    <div className='app-container'>
       <div className="header">
          <div className="logo-container">
                <img src="https://res.cloudinary.com/dhz8n0ka8/image/upload/v1640024219/logo_aygf3h.png" className="logo"/>
                <div className='icon-container'>
                <input type="search"/>
                <IoIosLogOut className='icon-details'/>
                </div>
          </div>
        </div>
        <div className='middle'>
         <Login/>
       </div>
       <div className="footer-container">
            <div className='footer'>
                <IoIosNotifications className='icon-details-footer'/>
                <FaUserCircle className='icon-details-footer'/>
                <AiFillHome className='icon-details-footer'/>
                <GrAddCircle className='icon-details-footer'/>
            </div>
       </div>
    </div>
  );
}

export default App;
