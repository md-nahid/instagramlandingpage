import React from 'react'
import Wrapper from "./Signupfrom.styled"
import PropTypes from "prop-types"
import Title from "../../components/title/Title"
import Inputitem from "../../components/input/Inputitem"
import Button from "../../components/button/Button"
import Textcard from "../../components/textcard/Textcard"




const Signupform = ({ bgImg }) => {
    return (
        <Wrapper>
            <div className="main-form">
                <Title bgImg={bgImg} />
                <div className="text-field">
                    <h3>Sign up to see photos and videos from your friends.</h3>
                </div>
                <Inputitem type="text" labelText="Mobile Number or Email" />
                <Inputitem type="text" labelText="Full Name" id="pass" />
                <Inputitem type="text" labelText="Username" id="pass" />
                <Inputitem type="password" labelText="Password" id="pass" />
                <Button text="Next" />
                <div className="policy-text">
                    <p>By signing up, you agree to our <strong>Terms</strong> . Learn how</p><p>we collect, use and share your data in our <strong>Data</strong></p><p><strong> Policy</strong> and how we use cookies and similar technology in our <strong>Cookies Policy .</strong></p>
                </div>
            </div>
            <Textcard text="Have an account?" endLink="Log in" endto="/" />
            <div className="getapp">
                <span>Get the app.</span>
            </div>
        </Wrapper>
    )
}


Signupform.propTypes = {
    bgImg: PropTypes.string,
}




export default Signupform
