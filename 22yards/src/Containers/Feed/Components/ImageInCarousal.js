import React from "react";

function ImageInCarousal(props){
   return(
       <div className="Add-posts-image">
            <button className="button-To-Delete-Image-From-Add-Post" 
                    onClick={()=>{props.onDelete()}}
            >Delete</button>
            <img src={props.src} style={{height:"100%"}} onClick={()=>{props.onClick()}}/>
       </div>
   )
}

export default ImageInCarousal