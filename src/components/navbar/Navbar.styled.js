import styled from "styled-components"

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 20px;
    @media screen and (max-width: 875px) {
        max-width: 400px; 
        width: 100%; 
        margin: 0 auto;
    }
`

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    >li {
        padding: 6px 8px;
        color: #00376b;
        font-size: 12px;
        font-weight: 500;
        &:first-child {
            padding-left: 0;
        }
        >a {
            text-decoration: none;
            color: #00376b;
            font-size: 12px;
            font-weight: 500;
        }
    }
`

export const Navtext = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #8e8e8e;
    >p {
        padding-top: 8px;
        @media screen and (max-width: 875px) {
            padding-top: 0;
        }
    }
`


export default Wrapper