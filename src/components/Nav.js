import styled from "styled-components";

// images
import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <StyledNav>
            <h3>Reliable Trucking</h3>
            <nav>
            <Link to='/'>Home</Link>
                <Link to='/AboutPage'>About</Link>
                <a href="#">Contact</a>
                <a href="#">Apply</a>
            </nav>
        </StyledNav>
    )
}

const StyledNav = styled.div`
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
width: 70%;
margin-left: 10%;
h3{
    font-size: 3em;
    color: white;
}
nav {
    width: 40%;
    display: flex;
    justify-content: space-around;
    a {
        font-size: 1.8em;
        color: white;
        &:hover {
            color: #EEAC33;
            transition: 0.3s;
            transform: scale(1.1);
        }
    }
}
`;
