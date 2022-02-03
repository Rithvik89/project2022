import React,{useState} from "react";
import ImageInCarousal from "./ImageInCarousal";
import ImageView from "../../../Components/ImageView/ImageView";

export default function AddPostDiv(props){
    const [imagesInAddPost1,setImagesInAddPost1]=useState([])
    const [urlOfImage1,setUrlOfImage1]=useState("")

    function addImagesToPost1(event){
        const x=event.target.files;
        const fileArray = x ? Array.from(x) : [];
        var y=[];
        fileArray.map((each)=>(
           y.push(URL.createObjectURL(each))
        ))
        setImagesInAddPost1([...imagesInAddPost1,...y])
      }
      function handleDeleteAImagefromAddPosts1(indexUrlToDelete){
        var x=imagesInAddPost1;
        x.splice(indexUrlToDelete,1)
        setImagesInAddPost1([...x])
      }
    
    return(
        <>
        <div>
            <button onClick={()=>{props.onClose()}}>Close</button>
            <div placeholder='say' className='Add-Post-Scrolled' contentEditable>
            </div>
            {
            imagesInAddPost1.length!==0 &&
                <div className='d-flex flex-row Add-posts-images-container'>
                    {
                        imagesInAddPost1.map((each,index)=>{
                        return(
                            <ImageInCarousal src={each} 
                                onClick={()=>{
                                setUrlOfImage1(each)
                                }}
                                onDelete={()=>{handleDeleteAImagefromAddPosts1(index)}}
                                key={each}
                            />
                            
                        )
                        })
                    }
                    </div>       
            }
            
            <label htmlFor='uploadImagesInAddPostRef1'>
            <span className='Add-Images-In-AddPost-Button'>
                <img alt="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADY0lEQVRoge3YP4yURRzG8Q8LnpFTgTvjKQ13CYV/IlE5LvFPjIVUFkeiRiFiZWGhAQuBwsJOKaS0wkaUK1FbKwstjBpiCBIk53Vq4RkixgDnrcW8K++7O++78y67t5e43+RN3vedeWefZ2d+M78ZRowYMWLE/5kNFWUN7MQ0tmDTmii6wQouYwmXsBqrVGbgNjyNrQORVp8/8CX+bi/YGKncwDPWj3jCHzqFRTTzBY1I5Z3Wl/gW2wRtBWLjenrwWv5jEgexK3s+hwX8UlJ/By7mX8QMbOmXui5M4l3cnns3i/txDL9HvukYGbEhtFazzUFF8S3G8XLJNx3aYgbWil09lhUYpoEqmt2rBIZp4FxF2Q+pjfQ63m/FS3gS/+ALnFGyWpawIATseNv7K/g4tZHYQvZQl2+24h08gjHBzAPCHP2NYCiFK/hamI0mhdThO5zAcsV3hZ6LpRL7Kz4ew9siC0rG95mAOj1Rl4X8Q90Y2K9cPDyK5+oquhnqGJjB3oR6+7C7Nzn1qWPgxcT6G/Aa7u5JUU1SDezQPbjzjOOwEDMDJdXAXtWbnxjTgomBpiYpBjZirsf2H8YhbO7x+66kGHhQPOlKZTfew2MGYCSle+/rw+/chTdwHsdxPaJjj2B2BhPZ+2X8jG+za6W94RQDVfN+HX7F+zrFz+GA+Kx1b3Y9jt9wWttClmJgqq7SCKv4QHFT3hAWxmcT25jCm0IvHMvaTDJwZ7LMcr4SjkbylIk/i5PZ/avCRJDnLSHdPkpaEP+VLDNOE5+2vZtT/s+fFMb+Mj4sqXNEWPGTDLQa7JWfFDfpm1QnjPnfiu2LW5zAWGwIrSgOrbN4vYvIOuzRn7iawXysBy73ofEqZvvY1nysB5aEDcagyJ87tQK2aogeyN1P4BU3MoPZWA9cEs4iB8W23H3d+FrGR7nn7TEDq8JB6iBN3AyFpDK2JyYE8iKuCinxmP6dYDyFO7L77bggcupcwqSwNtyTPS/VTZH7wSeK47qd9rLTFXVPDeNc6LM+tvX5MAyc0ZlW9MKiIRm4LqQCZUzk7sum86aQ2F0rC+JBc0HYNz8RKWsF9mbFgM1zXMhuh0ojE9Ksca0Ku7t1dSi9T0j4uom/iPkhaezKLXhBONT9EX9m13mcwvNZnQ7+BUBUmgyI0lDmAAAAAElFTkSuQmCC"/>
            </span>
            </label>
            <input type="file" multiple id="uploadImagesInAddPostRef1" accept='image/*' style={{display:"none"}} onChange={addImagesToPost1}/>
        </div>
        {urlOfImage1!=="" && <ImageView src={urlOfImage1} CloseThisImage={()=>{
                setUrlOfImage1("")
        }}/>}
      </>
    )
}