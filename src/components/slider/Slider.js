import React from 'react'
import PropTypes from "prop-types"
import Wrapper from "./Slider.styled"

const Slider = ({ bgImg, firstImg, secondImg, thirdImg, fourthImg, fifthImg }) => {

    React.useEffect(()=> {
        let slideItem = document.querySelectorAll("#slider img");
        let current = document.querySelector(".slide-item-active");
        setInterval(() => {
            current.classList.remove("slide-item-active");
            if(current.nextElementSibling) {
                current.nextElementSibling.classList.add("slide-item-active")
            }else {
                slideItem[0].classList.add('slide-item-active')
            }
        }, 5000);
    }, [])

        

    return (
        <Wrapper id="slider" bgImg={bgImg}>
            <img src={firstImg} alt="first slide" className="slide-item-active" />
            <img src={secondImg} alt="second slide" />
            <img src={thirdImg} alt="third slide" />
            <img src={fourthImg} alt="fourth slide" />
            <img src={fifthImg} alt="fifth slide" />
        </Wrapper>
    )
}


Slider.propTypes = {
    bgImg: PropTypes.string,
    firstImg: PropTypes.string,
    secondImg: PropTypes.string,
    thirdImg: PropTypes.string,
    fourthImg: PropTypes.string,
    fifthImg: PropTypes.string,
}



export default Slider
