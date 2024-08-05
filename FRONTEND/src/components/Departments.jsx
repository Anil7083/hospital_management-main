import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Departments = () => {

    const departmentsArray = [
        {
            name: "Pediatrics",
            imageUrl: "/public/departments/pedia.jpg"
        },
        {
            name: "Orthopedics",
            imageUrl: "/public/departments/ortho.jpg"
        },
        {
            name: "Cardiology",
            imageUrl: "/public/departments/cardio.jpg"
        },
        {
            name: "Neurology",
            imageUrl: "/public/departments/neuro.jpg"
        },
        {
            name: "Oncology",
            imageUrl: "/public/departments/onco.jpg"
        },
        {
            name: "Radiology",
            imageUrl: "/public/departments/radio.jpg"
        },
        {
            name: "Pysical Therapy",
            imageUrl: "/public/departments/therapy.jpg"
        },
        {
            name: "Dermatology",
            imageUrl: "/public/departments/derma.jpg"
        },
        {
            name: "ENT",
            imageUrl: "/public/departments/ent.jpg"
        },
    ]

    const responsive = {
        extraLarge: {
            breakpoint: { max: 3000, min: 1324 },
            items: 4,
            slidesToSlide: 1,
        },
        large: {
            breakpoint: { max: 1324, min: 1005 },
            items: 3,
            slidesToSlide: 1,
        },
        medium: {
            breakpoint: { max: 1005, min: 700 },
            items: 2,
            slidesToSlide: 1,
        },
        small: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
    return (
        <div className="container departments">
            <h2>Departments</h2>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["medium", "small"]}>
                {
                    departmentsArray.map((depart, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="depart-name">{depart.name}</div>
                                <img src={depart.imageUrl} alt="Department" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Departments; 