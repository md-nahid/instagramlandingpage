import React from 'react'
import PropTypes from "prop-types"
import Wrapper from "./Inputitem.styled"




const Inputitem = ({ labelText, type, id }) => {

    const handleChange = (e) => {
        let Inputitem = e.target.parentElement;
        Inputitem.classList.add("change-input-item");
        if(e.target.value === "") {
            Inputitem.classList.remove("change-input-item")
        }
    }


    return (
        <Wrapper>
            <div>
                <label htmlFor={id}>{labelText}</label>
                <input type={type} className={id} onChange={handleChange} />
            </div>
        </Wrapper>
    )
}




Inputitem.propTypes = {
    labelText: PropTypes.string,
    type: PropTypes.string.isRequired,
    id: PropTypes.string
}



export default Inputitem
