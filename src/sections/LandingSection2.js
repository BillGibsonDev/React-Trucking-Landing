// styled
import styled from "styled-components";

// images
import Reliable from '../images/reliable.png'
import Note from '../images/note.png';
import Delivery from '../images/delivery.png';
import Card from '../images/card.png';



export default function LandingSection2() {
    return (
        <StyledLandingSection>
            <h1>Why trust the Reliable Trucking Company?</h1>
            <div className="columnWrapper">
                <div className="leftColumn">
                    <div className="imageContainer">
                        <img src={Reliable} alt="" />
                    </div>
                </div>
                <div className="rightColumn">
                    <article>
                        <img src={Delivery} alt="" />
                        <h4>Timely and trustworthy shipping for nearly 30 years.</h4>
                    </article>
                    <article>
                        <img src={Note} alt="" />
                        <h4>Worryfree shipping with our fully guarenteed and insured trucks and company.</h4>
                    </article>
                    <article>
                        <img src={Card} alt="" />
                        <h4>Highly trained and licensed driving proffesionals.</h4>
                    </article>
                    <a href="#">Let's do Business</a>
                </div>
            </div>
        </StyledLandingSection>
    )
}

const StyledLandingSection = styled.div`
height: 100vh;
background: white;
border-radius: 25px;
margin: 2% 0;
display: flex;
flex-direction: column;
justify-content: center;
h1 {
    font-size: 3em;
    position: relative;
    margin: 1em auto;
}
.columnWrapper{
display: flex;
justify-content: center;
align-items: center;
height: 90%;
    .leftColumn{
        width: 40%;
        display: flex;
        height: 80%;
        .imageContainer{
            width: 80%;
            background: #1F4E65;
            position: relative;
            border-radius: 12px;
            img{
                width: 90%;
                position: absolute;
                bottom: 0;
                right: 5%;
            }
    }
}
.rightColumn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    article{
        display: flex;
        align-items: center;
        width: 100%;
        margin: 2em auto;
        img {
            width: 100px;
        }
        h4 {
            font-size: 2em;
            margin: 0 1em;
        }
    }
}
a {
        margin: 2em 0;
        color: #EEAC33;
        background: #012B3D;
        width: 250px;
        height: 60px;
        align-items: center;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        font-size: 1.8em;
        font-weight: 700;
        &:hover {
            background: #EEAC33;
            color: black;
            transition: 0.3s;
            transform: scale(1.1);
        }
    }
}
`;