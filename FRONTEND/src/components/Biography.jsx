import React from "react";

const Biography =({imageUrl})=>{
    return (
        <div className="container biography">
            <div className="banner">
                <img src={imageUrl} alt="aboutImg" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who We Are</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ratione quos, iste recusandae eius architecto. Quaerat, labore possimus ut error sit temporibus ex odio sapiente illo delectus repellendus. Consequatur recusandae voluptatem delectus, sequi facere perferendis porro quibusdam expedita dolor ratione animi magni possimus et inventore quasi praesentium. Distinctio, eveniet omnis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab officiis voluptatum ipsum, saepe deleniti error assumenda veritatis, quas illo accusamus beatae adipisci sed? Odio ea eos, dolorum aliquam expedita quidem perferendis corrupti sapiente voluptatum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque totam tempore!</p>
                <p>Lorem, ipsum dolor.</p>
            </div>

        </div>
    )
}

export default Biography;