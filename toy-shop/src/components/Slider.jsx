import React, { useState, useEffect } from "react";
import "../styles/slider.css";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { Campaign } from "../data";

const Slider = () => {
    const [index, setIndex] = useState(0);

    const prevFunc = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(Campaign.length - 1);
        }
    }

    const nextFunc = () => {
        if (index < Campaign.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (index < Campaign.length - 1) {
                setIndex(index + 1);
            } else {
                setIndex(0);
            }
        }, 6000);

        return () => {
            clearTimeout(timer);
        }
    }, [index])


    return (
        <div className="slider-container">
            <FaCircleArrowLeft className="arrow" onClick={prevFunc} />

            {Campaign.map((camp) => (
                <div className={camp.id === index + 1 ? `slider-wrapper show` : `slider-wrapper hide`} key={camp.id}>
                    <img src={camp.pic} alt="pic" />
                    <p> {camp.desc} </p>
                </div>
            ))}


            <FaCircleArrowRight className="arrow" onClick={nextFunc} />
        </div>
    )
}

export default Slider;