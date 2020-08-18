import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Wrapper from "./Textcard.styled"

const Textcard = ({ frontLink, text, endLink, endto }) => {
    return (
        <Wrapper>
            <div>
                {frontLink && <Link to="/" className="icon">{frontLink}</Link>}
                <span>{text}</span>
                {endLink && <Link to={endto} className="icon">{endLink}</Link>}
            </div>
        </Wrapper>
    )
}


Textcard.propTypes = {
    frontLink: PropTypes.string,
    text: PropTypes.string.isRequired,
    endLink: PropTypes.string,
    endto: PropTypes.string
}





export default Textcard