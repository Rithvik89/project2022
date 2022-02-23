import React from "react";

export default function RequestComponent(props){
    var height1;
    height1 = Math.floor(Math.random()*(400)+100);
    var link1 = "https://picsum.photos/"+height1+"/"+height1;
    return(
        <div className="request-component-card" >
            <img
                className='request-card-img'
                src="/22YardsLOGO.png"
            />
            <img
                className='request-card-img'
                src={link1}
            />
            <div className="request-info">
                <h6>UserName</h6>
                <div className="d-flex mt-1">
                    <button className="request-accept-button">Accept</button>
                    <button className="request-reject-button">Decline</button>
                </div>
            </div>
        </div>
    )
}