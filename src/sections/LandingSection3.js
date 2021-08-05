// styled
import styled from "styled-components"

// images
import Join from '../images/join.png';


export default function LandingSection3() {
    return (
        <StyledLandingSection>
            <h1>Enjoy working for a fast paced, rapidly expanding company?</h1>
            <div className="columnWrapper">
                <div className="leftColumn">
                    <div className="line"></div>
                    <h4>Reliable Trucking is always looking for:</h4>
                    <ul>
                        <li>Logistical Proffesionals</li>
                        <li>Truck Drivers</li>
                        <li>Warehouse Associates</li>
                        <li>Customer Service Reps</li>
                    </ul>
                    <a href="#">Apply Today! </a>
                </div>
                <div className="rightColumn">
                    <div className="imageContainer">
                        <img src={Join} alt="" />
                    </div>
                </div>
            </div>
        </StyledLandingSection>
    )
}

const StyledLandingSection = styled.div`
height: 90vh;
background: white;
border-radius: 25px;
margin: 2% 0;
display: flex;
flex-direction: column;
h1 {
    font-size: 3em;
    position: relative;
    margin: 1em auto;
}
.columnWrapper{
display: flex;
justify-content: center;
align-items: center;
height: 100%;
    .rightColumn{
        width: 40%;
        display: flex;
        height: 90%;
        .imageContainer{
            width: 100%;
            background: #EEAC33;
            position: relative;
            border-radius: 12px;
            img{
                width: 80%;
                position: absolute;
                bottom: 0;
                right: 5%;
            }
    }
}
.leftColumn{
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    .line {
        height: 10px;
        width: 70%;
        background-color: #1F4E65;
        border-radius: 12px;
        margin: 2em 0;
    }
    h4 {
        font-size: 2em;
    }
    ul li {
        font-size: 2em;
        margin: 1em 0;
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
