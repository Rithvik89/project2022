import { Routes ,Route , Navigate} from "react-router-dom";
import Feed from './Containers/Feed'
import Networks from './Containers/Networks'
import Profile from './Containers/Profile'
import Logout from './Containers/Logout'
import Notifications from './Containers/Notifications'
import FeedBody from './Containers/Feed/FeedBody';
import LeftFooter from './Containers/Scores';
import RightFooter from './Containers/News';
import Followers from './Containers/Followers';
import Following from './Containers/Following';
import Home from './Containers/Home';
import Posts from './Containers/Posts';

export default function Routings(){
    return(
        <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="/feed/:id" element={<FeedBody/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/profile" element={<Profile/>}>
                <Route path="posts" element={<Posts/>}/> 
                <Route path="followers" element={<Followers/>}/>
                <Route path="Following" element={<Following/>}/>
            </Route>
            <Route path="/newsArticles" element={<RightFooter/>}/>
            <Route path="/scores" element={<LeftFooter/>}/>
            <Route path="/networks" element={<Networks/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    )
}