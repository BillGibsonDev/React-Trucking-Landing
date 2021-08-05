// styled
import styled from "styled-components";

// images
import Linkedin from '../images/linkedinWhite.png';
import Twiiter from '../images/twitterWhite.png';
import Facebook from '../images/facebookWhite.png';
import Instagram from '../images/instaWhite.png';
import Github from '../images/githubWhite.png';


export default function Footer() {
    return (
        <StyledFooter>
            <h4>Stay Connected</h4>
            <div className="line"></div>
            <div className="iconContainer">
                <a href="https://linkedin.com"><img src={Linkedin} alt="company linkedin link" /></a>
                <a href="https://facebook.com"><img src={Facebook} alt="company facebook link" /></a>
                <a href="https://twitter.com"><img src={Twiiter} alt="company twitter link" /></a>
                <a href="https://instagram.com"><img src={Instagram} alt="company Instagram link" /></a>
                <a href="https://github.com"><img src={Github} alt="company github link" /></a>
            </div>
            <p>Copyright</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
height: 40vh;
background-image: radial-gradient(circle, #012B3D, #04121B);
border-radius: 25px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h4{
    font-size: 2.5em;
    color: white;
}
.line {
        height: 10px;
        width: 50%;
        background-color: #1F4E65;
        border-radius: 12px;
        margin: 2em 0;
    }
    .iconContainer{
        width: 30%;
        display: flex;
        justify-content: space-around;
        a {
            img{
                width: 50px;
                &:hover {
                    transition: 0.3s;
                    transform: scale(1.1);
                }
            }
        }
    }
    p {
        margin: 16px;
        font-size: 2em;
        color: #ffffffae;
    }
`;
