import styled from "styled-components"


const Wrapper = styled.div`
    width: 420px;
    height: 618px;
    background-image: url(${props => props.bgImg ? props.bgImg : ""});
    background-size: 454px 618px;
    background-repeat: no-repeat;
    position: relative;
    @media screen and (max-width: 875px) {
        display: none;
    }
    >img {
        width: 240px;
        height: 427px;
        position: absolute;
        top: 99px;
        left: 151px;
        opacity: 0;
        transition: opacity 3s;
    }
    >.slide-item-active {
        opacity: 1;
    }
`



export default Wrapper