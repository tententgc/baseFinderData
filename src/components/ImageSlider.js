import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

const ImageSlider = () => {
const [current, Setcurrent] = useState(0)
const length = SliderData.length

    return (
        <setion className="slider">
            <FaArrowAltCircleLeft className="left-arrow"/>
            <FaArrowAltCircleRight className="right-arrow"/>
            {SliderData.map((slide, index) => {
                return <img src={slide.image} alt='travel image' />
            })}
        </setion>
    )
}

export default ImageSlider;