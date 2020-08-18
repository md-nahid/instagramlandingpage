import React from 'react'
import PropTypes from "prop-types"
import Wrapper from "./Button.styled"

const Button = ({ text }) => {
    return (
        <Wrapper>
            <button type="submit">{text}</button>
        </Wrapper>
    )
}



Button.propTypes = {
    text: PropTypes.string.isRequired
}




export default Button
