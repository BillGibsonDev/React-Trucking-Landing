import styled from "styled-components"

// images
import Truck from '../images/truck.jpg';

// sections
import LandingSection2 from "../sections/LandingSection2";
import LandingSection3 from "../sections/LandingSection3";

export default function LandingPage() {
    return (
        <>
        <StyledLanding>
            <div className="leftColumn">
                <div className="titleText">
                    <h2>Shipping done the<br /><span>Reliable</span>way</h2>
                    <div className="line"></div>
                    <h4>Reliable Trucking is dedicated to timely and dependable shipping for our customers. </h4>
                </div>
                <a href="#">Learn More</a>
            </div>
            <div className="rightColumn">
                <img src={Truck} alt="" />
                <p>Dependably serving hundreds of companies across the nation. Let Reliable Trucking ease the stress of logistics and shipping for your company.</p>
            </div>
        </StyledLanding>
        <LandingSection2 />
        <LandingSection3 />
        </>
    )
}

const StyledLanding = styled.div`
height: 100vh;
background-image: radial-gradient(circle, #012B3D, #04121B);
border-radius: 25px;
display: flex;
align-items: center;
justify-content: center;
.leftColumn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    .titleText{
        display: flex;
        flex-direction: column;
        h2 {
            font-size: 4em;
            color: white;
            span{
                color: #EEAC33;
                margin-right: 20px;
            }
        }
        .line {
            height: 10px;
            width: 70%;
            background-color: #1F4E65;
            border-radius: 12px;
            margin: 2em 0;
        }
        h4 {
            font-size: 1.5em;
            color: #ffffffc1;
            width: 80%;
        }
    }
    a {
        margin: 2em 0;
        color: black;
        background: #EEAC33;
        width: 200px;
        height: 60px;
        align-items: center;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        font-size: 1.8em;
        font-weight: 700;
        &:hover {
            background: white;
            transition: 0.3s;
            transform: scale(1.1);
        }
    }
}
.rightColumn{
    width: 40%;
    height: 50%;
img {
    border-radius: 12px;
    width: 100%;
    height: 80%;
    }
    p {
        font-size: 1.5em;
        color: white;
    }
}

`;
