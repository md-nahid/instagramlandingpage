import React from 'react'
import Signupform  from "../containers/Signupform/Signupform"


// importing images
import Instagram from "../images/instagram.png"


const Signup = () => {
    return (
        <div>
            <Signupform bgImg={Instagram} />
        </div>
    )
}

export default Signup
