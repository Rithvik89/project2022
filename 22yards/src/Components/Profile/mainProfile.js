import {Card,Container,Button} from 'react-bootstrap'
function Mainprofile(){
    var height;
    height = Math.floor(Math.random()*(400)+100);
    console.log(height);
    var link1 = "https://picsum.photos/"+height+"/"+height;
    height = Math.floor(Math.random()*(400)+100);
    var link2 = "https://picsum.photos/"+height+"/"+height;
    var address = "Dubai,United Arab Emirates";
    var followers = 441;
    return (
        <Container className="profile-main-container">
        <Card className='profile-main-card'>
         <button className="profile-main-card-bg-img-btn">
        <Card.Img className="profile-main-card-bg-img" variant="top" src={link1} />
         </button>
        <button className="profile-main-card-img-btn">
       <Card.Img className="profile-main-card-img" variant="top" src={link2} />
       </button>
       <Card.Body className="profile-main-card-body">
        <h4 >
            Adarsh Reddy
        </h4>
        <div>Software Developer</div>
         <p>
           Some quick example text to build on the card title and make up the bulk of
           the card's content.
         </p>
         <div>{address}</div>
         <span>{followers + " followers"}</span> 
         <span>{followers+200 + " following"}</span>
         <Container className='profile-main-btn-container'>
         <Button className="profile-main-btn1" variant="primary">Follow</Button>
         <Button className="profile-main-btn1" variant="outline-secondary">message</Button>
         <Button className="profile-main-btn1" variant="outline-secondary">more</Button>
         </Container>
       </Card.Body>
     </Card>
       </Container>
    );
}
export default Mainprofile;