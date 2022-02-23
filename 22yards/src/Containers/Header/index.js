import {Navbar,Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useLocation} from 'react-router-dom'
import './index.css'
import {isMobile} from 'react-device-detect'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {LogoutStart} from "../../redux/actions/Auth"

function Header(){
  const [expanded, setExpanded] = useState(false);
  const isUserLoggedIn=useSelector((state)=>state.authReducer.isUserLoggedIn)
  const dispatch=useDispatch();
  
  function userLogOut(){
    dispatch(LogoutStart())
  }
  
  return (
    //   <Navbar expanded={expanded} bg="light" expand="md" className='nav-bar' sticky='top' >
    //   <Container>
    //     <Navbar.Brand >22Yards</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link as={Link} onClick={() => setExpanded(false)} to='/feed'>Feed</Nav.Link>
    //         <Nav.Link as={Link} onClick={() => setExpanded(false)} to='/networks'>Networks</Nav.Link>
    //         <Nav.Link as={Link} onClick={() => setExpanded(false)} to='/notifications'>Notifications</Nav.Link>
    //         <Nav.Link as={Link} onClick={() => setExpanded(false)} to="/newsArticles">News</Nav.Link>
    //         {
    //            isMobile && <Nav.Link as={Link} onClick={() => setExpanded(false)} to="/scores">Scores</Nav.Link>
    //         }
    //         <Nav.Link as={Link} onClick={() => setExpanded(false)} to='/profile'>Profile</Nav.Link>
    //       </Nav>  
    //     </Navbar.Collapse>
    //   </Container>
    //  </Navbar>
    <>
     {
        !isUserLoggedIn &&
         <nav className='nav-bar1'>
            <div className='d-flex align-items-center'>
            <Link to='/' className='nav-bar-item'>
               <img src="https://res.cloudinary.com/du7d2nmbw/image/upload/v1645445493/header1logo_oizjix.jpg" className='logo-navbar1'/>
            </Link>
            </div>
            
         </nav>
     }
     { isUserLoggedIn &&
       <nav className='nav-bar'>
          <img className='btn-in-mobile' onClick={() => setExpanded(!expanded)}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAABmJLR0QA/wD/AP+gvaeTAAAAfUlEQVQ4jWN8Zm7OQA3ARBVThrdBLHAWh7Mzi5QUSZr/PHv2Y+9edIN4k5JYlJVJMuj3nTtwgxhHo58gQAQ2f0kJs7w8SZr/Pnz4saeHCi76//8/nD0aa4QBItZEly4lNYv8uXv3dXQ0ukFfFi1iUVEhzaA7d+Ds0Vijo0EAywMl/MlqbDwAAAAASUVORK5CYII="></img>
          {/* <img className='btn-in-mobile' onClick={() => setExpanded(!expanded)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAAaklEQVRoge3XOwrCUBRF0Y2jM86/TkCch/aSIuIDfboWnP5+qlMAAAAcc6m26j55tmo5svD1C4YdldvzcqcjF/h1S7X2+e+8m7U6D74NAAAv0ZYmjra0R1sCAGAQbWniaEt7tCUAAIC/8wBJyseMLM211AAAAABJRU5ErkJggg=="/> */}
          <div>
                <Link to='/' className='nav-bar-item'>
                  <img src="/LogoWhite.png" className='logo-navbar'/>
                </Link>
          </div>
       <div className='d-flex align-items-center'>
          <ul className='nav-bar-list'>
            <Link to='/' className='nav-bar-item'>
                <li>Home</li>
            </Link>
            <Link to='/feed' className='nav-bar-item'>
                <li >Feed</li>
            </Link>
            <Link to="/networks" className='nav-bar-item'>
                <li>Networks</li>
            </Link>
            <Link to="/notifications" className='nav-bar-item'>
              <li >Notifications</li>
            </Link>
            <Link to="/newsArticles" className='nav-bar-item'>
              <li>News</li>
            </Link >
            {
                isMobile && 
                <Link to="/scores" className='nav-bar-item'>
                  <li>Scores</li>
                </Link>
            }
            <Link to='/profile' className='nav-bar-item'>
                <li>Profile</li>
            </Link>
            
          </ul>
          <img className='nav-bar-seach-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAABmJLR0QA/wD/AP+gvaeTAAADlklEQVRoge2aOUgrQRzG59hsjs3mWKNYKKKCIh4J3o0gdmKhpBALj1IbQRS0UAsbW8UoWHogeNT2WgUJsRM8UAPRhyDKE42amGRfEXkv4Evcncy8fWJ+5ex+/28+ZmYn2R34o6kJfGWQ1h3IFMYBOA5wHFsHRnX5+npxcJCvqgKyHDk6elxejvj9LIyYjIChrS1nYSEWDN6Pjt6PjcWurnI8HkNrKwsv+iMADQbr+PjT2trj8nKiJez1xm5vrRMTYa9XDofp2tEfAd7lQhbL0+pqcuPTygqyWnmnk7od/QBQEOKhkPzyktwoPz/HQyEoitTt6AeIBgJIFLni4uRGrrQUiWL08pK6HYMA5+cRv982NYXs9ncPu902ORn2+aIXF9TtIIudGDkc0vw8zsuL+HwAAL6xMXZzcz8yEr+7o+6FxwoKaNaDkK+uNrS0IJtNV1rKlZRwJSVQr4+enSGzGchy7PaWph3FEYAGg7GjQ+ju5oqK0twWDQRC29svu7u0nqd0AvA1NdbJyfRdTyZ2ff1zdpbK3kxhComDg8lLVgnIYjG1t0MII4eHGbpnFgBCy8iIua8PQEig5WtrsSSFvV4gy8RdyCiAODRk7u0llgMAdBUVEKFM5hL5PsDX1Zn7+4nlvzEPDOgbG4nlhAGgXm+bmQGIxj6IkHV6GvI8oZpMZurqwg4HmfYjODfX1NlJpiUKgLGQ2dT/iNDXBzAmEJIE4GtqcG4ugTANOC+Pr6oiEJIE0Dc3E6gYlSUaAQb/SwAAvMtFoCIJQH3+JEA5OSQqEo0kEag+Bf+zANBoJFB9XlYQCFTZN3Nakw2gNdkAWpMNoDXZAFqTDaA12QBa8/0CQJ2ORT/eUf9RWXUAXFioVqIcTn1x1QGM7e1qJcoxud1qJeoC8E6n0NOj1kM5gtut9t2E4gAcZ3K7pcVFtmsAY8njMbndyt/SKfpCI3k8uvJyZLFk1jsVxB8e3k5P74eHP71T0arXNzRk3CV1IKtVoen32wf+N7IBtEbRIn5aX1deUVdWpk/xZAsfHLydniovpQRFAR6XlpRXlObmUl6LRlWVUgL9KaRL/aFFV1lJ3Y7Bgac0myjRV7D00A/wdnKS6lI09SVi6AcIbW2lvLSzQ92OfoDXvb2/djS0ufm6v0/djvaBJwBA4pxlMIjz87HdDuLxt+PjR48ntLFB3QgwOnL2h8SqjcXYObA92My06wm+/E+JXwlx6IHEhLBfAAAAAElFTkSuQmCC"></img>
          <img className="nav-bar-logout" onClick={userLogOut} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAABmJLR0QA/wD/AP+gvaeTAAAGeklEQVRoge2aW0gUXxzHz8zs7P2qZf7tgvWkaZT5UMg+hAtpN/OaD1L4EGH0kkVsZVtSrelbCVFQZCGbZQklhoUIERQ9ZFBtpgWRVv5Jt13duzs7M/+H1dn5r851xyTw83TO7O+c8/3uzJ7LbxYa27IF/M3Aiy0gWZYMLDZLBhabJQOLjWzhuv7n9Wuq/O/WrQs0igR3AFIo1GVlQlupy8oghSL50ZMyAKem6urq0rq7DVar0LYGqzXt8WNdXR2ckpKUBpHtIEi1c+fyjg5tbS1sMIgc22jU1tamdXZqqqsBLFKJmN+AbPVqw+nT8rw8cUMmAGm1+vp65bZtU3Z79McPoc0F+5Zv3px661aCeuL3b6H9JDSR5+WltrWJ+FKEGVAWFqZcvgzrdNQVMhj0t7eP79sndODxigrf1auEzxeXotOltLaqiooE9SPAgHr3bpPdDsnl1JXpV69iOshAQNCoAAAyHPa3t09UV0/TZlsIRY2Njapdu/j3w9eAPC9Pb7UCCJqpE4T3yhX38eOEx8N/sLkQbre7vt7b2goIYuYSBBlOnpRv2sSzB14GkIwM06VLEIrO1HF88vz5QEcHIEnBkudCkoG7dz02G4hGYxcgFDW1tMhWreLTmocBGDZduAAbjTNVHPecOhV6+lSkXAbC/f2eM2eo+wAbDMbGRj5zK3eEurQUzcmhqt5r18IvXogWykL4+XPf9etUFc3NVe/Zw9mKwwBsMukOH6aPEXA4REvkxN/eTv92dEeOxO88AxwGtAcOUJMm6fdPtbRI89wzQZJTzc3UnAbr9dr9+9lbsBmAFAr6jOZra0tyzuED4Xb7b9+mqqqSEkipZIlnM6AqKoL1+lgZHx8PdnZKIpGTwL17uMsVK8M6ndJiYQlmM6Deu5cqh3p6SAyTRB8nJIaFenriMkpLWYIZDUBaLZqdPdslGXzyRCJ5vAh2d1NTqjwnB9JqmSIZDcg3bqSmYezTJ/znT2klsoOPjWGfP89UYFi+YQNTJLMB2mIeef9eOm18iXz4MK+YBBgNoFlZ8/b1x8DevYuLoR7mOTAakGVkUGV8ZEQqWfyJjo5SZSQ9nSmM0QD9oEh4vVLJ4g8xNRUXYzIxhTHPQirVvH39MYjJSaoM08QkwHgmJgkCQpDZzgimMBaSzQXRBiWZ9y+Md4AMhagyxPwFLByQRhMXw3ziYzRAf+7hZcukksUfODU1LoZ2dE4MY/oAp2U4ZGvWSCWLP7LMzLiY79+ZwhgNRGlTJ8s0vHDQF6Io8zzOaACjLV6K/HypZPGHPmjE6WQKYzQwPTBAnV3Q9euRFSskFMcJkp4evwMkGRkYYIpk/hF7PNjg4GwULDTflCSq4mJqKxlxOulrQgJs5wF66kFdWRlPqywwEIqqKyriMnp7WYJZDTx7Rq0GSFqaikeOQBLUpaXI8uWxMhkMhvv6WILZDBBeb/DRI6qqq6vjzBEkD2wwaA8epKqBri6WRQBwZiX8Dgd1E2C93nDiRPIS2TFYrdQ+kgwEAh0d7PEcBgiXy3fzJlVVWiz0p1NyNFVVysJCquq7cYNwu9mbcGfmAvfvY8PDVNVw7JjSbBYtkQWl2aw/epSqYoODgQcPOFvxyI1Go5MNDfHtFIIY7XbJPSjNZqPdDmb3v4TP57HZAI5zNkSO80gCE15v9OtXlcUSm5shmUxlsRBeb3yhSA5NVZXRZqNnvz0NDdjHj3za8jIAAIiOjhIul9JsnnlFAMPKggJ07drI27dkOCxSOACwyWQ8e1ZTUxNPRJPkVFNTuL+fZw98DQAAsOFhYmJCWVBADSZbt05dUgLC4eiXL0IPPZBcrikvNzU30zdtAMenmpqCtKwWdz9C/7GlNJuNjY0JmSbc5Qo+fBjq7cV//eLsAUlPVxUXqysrkf8fM0i/33Pu3PTLl4L0CDYAAEBWrjRdvDjPHpsgsKGh6TdvsKGh6MgIMTERW0MglQpJS0PWrEGzsxX5+WhW1tw3F9jgoMdmE5E+E2MAAAAQRFNZqTt0iH7wEwcZCgUcDv+dO+Jyr2INAAAAgFNStDU16vJycYdmMhQKdnX5HY5ksvZJGYgB63TK7dvVO3agOTnx15gskGTE6Qz19ob7+tj3OXyQwAAFbDTK8/PlubmyzEwkIwM2GiG1GgBABoPE5CQ+Nhb99i3idEYGBlj290KR0sCi8Nf/Y2vJwGKzZGCxWTKw2PwHV9xMo/lbQhwAAAAASUVORK5CYII="></img>
       </div>
       {
          expanded &&
        <ul className='nav-bar-list-mobile'>
          <Link to='/home' className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Home</li>
         </Link>
         <Link to='/feed' className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Feed</li>
         </Link>
         <Link to="/networks" className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Networks</li>
         </Link>
         <Link to="/notifications" className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
           <li className='nav-bar-item-mobile'>Notifications</li>
         </Link>
         <Link to="/newsArticles" className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
           <li className='nav-bar-item-mobile'>News</li>
         </Link >
          <Link to="/scores" className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Scores</li>
          </Link>
         <Link to='/profile' className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Profile</li>
         </Link>
         <li className='nav-bar-item-mobile' onClick={userLogOut}>LogOut</li>
       </ul>
       }
       </nav>
     }
    </>
  )
}

export default Header


