import { Container } from 'react-bootstrap';
import './index.css';
import Mainprofile from './mainProfile';
import {Outlet,Link} from "react-router-dom";
import Posts from '../Posts';
function Profile(){
    return (
         <Container className="profile-mid-section">
              <Mainprofile />
          <Container className='profile-links-container'>
          <Link className="profile-links" to="/Profile/posts">Posts</Link>{" "}
          <Link className="profile-links" to="/Profile/Followers">Followers</Link>
          <Link className="profile-links" to="/Profile/Following">Following</Link>
          <Link className="profile-links" to="/Profile/Following">Following</Link>
          </Container>
          {/* <Posts /> */}
          <Outlet />
         </Container>
    );
}

export default Profile