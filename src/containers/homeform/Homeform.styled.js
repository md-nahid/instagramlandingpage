import styled from "styled-components"


const Wrapper = styled.div`
    >.homepage {
        display: flex;
        justify-content: center;
        align-items: center;
        >div {
            margin-top: 30px;
            &:first-child {
                margin-right: 10px;
            }
            &:last-child {
                background-color: #ffffff;
                margin-left: 10px;
                @media screen and (max-width: 875px) {
                    margin-left: 0;
                }
                >.gettheapp {
                    text-align: center;
                    margin-top: 15px;
                    margin-bottom: 10px;
                }
                .imgButton {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin-top: 25px;
                }
            }
        }
    }
    .navbar {
        padding: 40px 0;
    }
` 

export const Formbox = styled.div`
    width: 350px;
    padding: 10px 40px;
    border: 1px solid #dbdbdb;
    >.or-border {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 700;
        color: #8c8787;
        >.greyline {
            width: 150px;
            height: 1px;
            background-color: #8c878769;
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
                margin-left: 10px;
            }
        }
    }
    >.forgot-password {
        text-align: center;
        a {
            text-decoration: none;
            font-size: 12px;
            color: #00376b;
        }
    }
    >.gettheapp {
        text-align: center;
        font-size: 16px;
    }

`



export default Wrapper