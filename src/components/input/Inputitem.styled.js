import styled from "styled-components"


const Wrapper = styled.div`
margin-bottom: 7px;
    >div {
        position: relative;
        background-color: #fafafa;
        >label {
            font-size: 12px;
            color: #8e8e8e;
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            transition: transform 0.1s ease;
        }
        >input {
            width: 100%;
            border: 1px solid #80808033;
            border-radius: 3px;
            outline: none !important;
            padding: 10px 13px;
            font-size: 16px;
            background-color: #fafafa;
        }
    }
    .change-input-item {
        label {
            transform: scale(0.833) translate(-20px, -20px);
        }
        label[for=pass] {
            transform: scale(0.833) translate( -7px, -20px);
        }
        input {
            padding-top: 16px;
            padding-bottom: 6px;
            font-size: 14px;
        }
    }
`


export default Wrapper
