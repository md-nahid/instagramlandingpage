import React from 'react'
import PropTypes from "prop-types"
import Wrapper, { Titletext } from "./Title.styled"

const Title = ({ fontSize, text, bgImg, mgBottom }) => {
    return (
        <Wrapper mgBottom={mgBottom}>
            <Titletext fontSize={fontSize} bgImg={bgImg} >
                {text && <span>{text}</span>}
            </Titletext>
        </Wrapper>
    )
}


Title.propTypes = {
    fontSize: PropTypes.string,
    text: PropTypes.string,
    bgImg: PropTypes.string,
    mgBottom: PropTypes.bool
}



export default Title
