
import {useState} from 'react';
import {Button,Modal,Card} from 'react-bootstrap'

function AddPost(){
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        var height;
        height = Math.floor(Math.random()*(400)+100);
        console.log(height);
        var link = "https://picsum.photos/"+height+"/"+height;
      
        return (
          <div className='xyz'>
            <Button variant="secondary" onClick={handleShow} className='add-post-button-styling'>
            <h1>+</h1>
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className='add-post-header'>
                    <Card.Img variant="top" src={link}  className='feed-main-card-img'/>
                    <h4 className='feed-content-user-handle'>#Rithvik_{height}</h4>  
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className='add-post-body'><textarea className='add-post-text-area' placeholder='Want to write something !!!'/></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Post
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
}


export default AddPost