import styled from "styled-components"


const Wrapper = styled.div`
        max-width: 350px;
        width: 100%;
        background-color: #ffffff;
        margin: 0 auto;
        margin-top: 12px;
        >.main-form {
            border: 1px solid #dbdbdb;
            padding: 0 30px;
            padding-bottom: 40px;
            >.text-field {
                color: #847b7bb8;
                font-size: 15px;
                font-weight: 600;
                line-height: 20px;
                text-align: center;
                margin-top: 10px;
                margin-bottom: 15px;
            }
            >.policy-text {
                color: #8e8e8e;
                font-size: 12px;
                line-height: 16px;
                text-align: center;
            }
        }
        .getapp {
            text-align: center;
            font-size: 14px;
            margin-top: 10px;
        }
`


export default Wrapper