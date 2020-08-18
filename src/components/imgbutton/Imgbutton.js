import React from 'react'
import PropTypes from "prop-types"
import Wrapper from "./Imgbutton.styled"

const Imgbutton = ({ btnimg, altText, btnLink }) => {
    return (
        <Wrapper>
            <a href={btnLink} target="_blank" rel="noopener noreferrer" >
                <img src={btnimg} alt={altText} />
            </a>
        </Wrapper>
    )
}


Imgbutton.propTypes = {
    btnimg: PropTypes.string.isRequired,
    altText: PropTypes.string,
    btnLink: PropTypes.string
}



export default Imgbutton
