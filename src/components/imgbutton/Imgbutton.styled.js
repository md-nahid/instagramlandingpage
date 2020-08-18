import styled from "styled-components"


const Wrapper = styled.div`
    max-width: 140px;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    margin: 0 4px;
    >a {
        display: block;
        width: inherit;
        height: inherit;
        >img {
            width: 100%;
            height: 100%;
        }
    }
`


export default Wrapper