import React from "react";

const randomImageUrls=[
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.05_PM_2_ye9dzy.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.04_PM_y9zrtn.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.04_PM_1_ygbbod.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.04_PM_2_hd6jex.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641005/WhatsApp_Image_2022-01-31_at_12.27.06_PM_1_ezkriz.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641005/WhatsApp_Image_2022-01-31_at_12.27.03_PM_axg2ig.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641005/WhatsApp_Image_2022-01-31_at_12.27.05_PM_ih3ztp.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641005/WhatsApp_Image_2022-01-31_at_12.27.06_PM_2_rf9fxo.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.05_PM_1_nj00pv.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.06_PM_xu7jue.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.04_PM_2_hd6jex.jpg",
]

export default function SingleNewsCard({news}){
   
    function randNumber(){
        return Math.floor(Math.random()*10);
    }

    return(
        <div className="d-flex mb-3 p-2" style={{border:"1px solid black",width:"100%",backgroundColor:"white"}}>
            <div style={{width:"100%"}}>
                <h6>{news.pubDate}</h6>
                <h4>{news.title}</h4>
                <p style={{cursor:"pointer",textDecoration:"underline"}}
                   onClick={()=>{
                       window.open(news.link,"_blank")
                   }}
                >Read Full Article</p>
            </div>
            <div className="d-flex align-items-center">
                {
                    news.image_url && <img className="news-card-image" src={news.image_url}/>
                }
                {
                    !news.image_url && <img className="news-card-image" src={randomImageUrls[randNumber()]}/>
                }
            </div>
        </div>
    )
}