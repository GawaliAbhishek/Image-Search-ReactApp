import React from "react";
import '../App.css'
 function ImageSection(props){
    
    const Image=`https://source.unsplash.com/300x200/?${props.img}`;
 return(
    <>
    <div className="imge_div">
            <img src={Image} alt="Image not Found "/>
    </div>
    </>
 );
 }
 export default ImageSection;