import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RequestComponent from "../RequestComponent/RequestComponent";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export default function RequestsCarousal(){
    return(
        <>
           {/* <Carousel
            // centerMode={true}
            responsive={responsive}
           > */}
            <div className="d-flex scroll" style={{border:"1px solid black"}}>
                <RequestComponent text="1"/>
                <RequestComponent text="2"/>
                <RequestComponent text="3"/>
                <RequestComponent text="4"/>
                <RequestComponent text="5"/>
            </div>
            {/* </Carousel> */}
        </>
    )
}