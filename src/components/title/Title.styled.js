import styled from "styled-components"


const Wrapper = styled.div`
    margin-top: 25px;
    margin-bottom: ${props => props.mgBottom ? "25px" : "0"}; 
`

export const Titletext = styled.h2`
    font-size: ${props => props.fontSize ? props.fontSize : "25px"};
    width: 180px;
    height: 53px;
    margin: 0 auto;
    background-image: url(${props => props.bgImg ? props.bgImg : ""});
    background-repeat: no-repeat;
    background-position: 0 -129px;
`


export default Wrapper