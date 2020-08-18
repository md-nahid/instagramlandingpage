import React from 'react'
import Slider from '../../components/slider/Slider'
import Wrapper, { Formbox } from "./Homeform.styled"
import {AiFillFacebook} from "react-icons/ai"


// importing components
import Title from "../../components/title/Title"
import Inputitem from "../../components/input/Inputitem"
import Button from "../../components/button/Button"
import Icontext from "../../components/icontext/Icontext"
import Textcard from "../../components/textcard/Textcard"
import Imgbutton from "../../components/imgbutton/Imgbutton"
import Navbar from "../../components/navbar/Navbar"


// importing slider images
import BgImg from "../../images/signuppagedblmobile.png"
import FirstImg from "../../images/bambowall.jpg"
import SecondImg from "../../images/bigflower.jpg"
import ThirdImg from "../../images/greenflower.jpg"
import FourthImg from "../../images/messenger.jpg"
import FifthImg from "../../images/mobilebrowser.jpg"
import TitleBgImg from "../../images/instagram.png"
import Googleplay from "../../images/googleplay.png"
import Appstore from "../../images/appstore.png"


const Homeform = () => {
    return (
        <Wrapper>
            <div className="homepage">
                <div>
                <Slider 
                    bgImg={BgImg}
                    firstImg={FirstImg}
                    secondImg={SecondImg}
                    thirdImg={ThirdImg}
                    fourthImg={FourthImg}
                    fifthImg={FifthImg} />
                </div>
                <div>
                    <Formbox>
                        <Title bgImg={TitleBgImg} mgBottom />
                        <Inputitem 
                        type="text"
                        labelText="Phone number, username, or email" />
                        <Inputitem 
                        type="password"
                        labelText="Password"
                        id="pass" />
                        <Button text="Log in" />
                        <div className="or-border">
                            <span className="greyline"></span>
                            <span>OR</span>
                            <span className="greyline"></span>
                        </div>
                        <Icontext
                        frontIcon={<AiFillFacebook />} text="Log in with Facebook" />
                        <div className="forgot-password">
                            <a href="www.google.com">Forgot password?</a>
                        </div>
                    </Formbox>
                    <Textcard 
                    text="Don't have an account?"
                    endLink="Sign up"
                    endto="/signup" />
                    <div className="gettheapp">
                        <p>Get the app.</p>
                    </div>
                    <div className="imgButton">
                        <Imgbutton btnimg={Appstore}
                        btnLink="https://apps.apple.com/app/instagram/id389801252?vt=lo" />
                        <Imgbutton
                        btnLink="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DCB5857FB-A54A-4F7B-B1E9-D6E0E0C15DC3%26utm_content%3Dlo%26utm_medium%3Dbadge"
                        btnimg={Googleplay} />
                    </div>
                </div>
            </div>
            <div className="navbar">
                <Navbar />
            </div>
        </Wrapper>
    )
}

export default Homeform
