import React from 'react'
import PropTypes from "prop-types"
import Wrapper from "./Icontext.styled"

const Icontext = ({ frontIcon, text, backIcon }) => {
    return (
        <Wrapper>
            <button>
                {frontIcon && <span className="icon">{frontIcon}</span>}
                <span>{text}</span>
                {backIcon && <span className="icon">{backIcon}</span>}
            </button>
        </Wrapper>
    )
}


Icontext.propTypes = {
    frontIcon: PropTypes.object,
    text: PropTypes.string.isRequired,
    backIcon: PropTypes.object
}





export default Icontext