// styled
import styled from "styled-components"

// images
import Team from '../images/team.jpg';


export default function AboutPage() {
    return (
        <StyledAbout>
            <h1>About Us</h1>
            <div className="columnWrapper">
                <div className="leftColumn">
                    <div className="imageContainer">
                        <img src={Team} alt="" />
                    </div>
                </div>
                <div className="rightColumn">
                    <h2>Our Mission</h2>
                    <div className="line"></div>
                    <h3>To flawlessly and consistantly service our customers logistical needs</h3>
                    <h4>Reliable Trucking Company has been serving our hundreds of customers for nearly 30 years</h4>
                    <h4>We take pride in serving your businesses shipping needs. We value each customer and guarentee every shipment under our care.</h4>
                    <a href="#">Lets do Business!</a>
                </div>
            </div>
        </StyledAbout>
    )
}


const StyledAbout = styled.div`
height: 110vh;
background-image: radial-gradient(circle, #012B3D, #04121B);
border-radius: 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin: 2% 0;
h1 {
    margin: 10% auto 0 auto;
    font-size: 5em;
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
}
.columnWrapper{
    display: flex;
    align-items: center;
    width: 90%;
    height: 90%;
    margin: auto;
.rightColumn{
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 80%;
    margin: 1em auto;
        h2 {
            font-size: 4em;
            color: white;
        }
        .line {
            height: 10px;
            width: 90%;
            background-color: #1F4E65;
            border-radius: 12px;
            margin: 2em 0;
        }
        h3 {
            font-size: 1.8em;
            color: #ffffffc1;
            width: 100%;
            margin: 0 0 2em 0;
        }
        h4 {
            font-size: 1.5em;
            color: #ffffffc1;
            width: 100%;
            margin: 10px 0;
        }
    a {
        margin: 1em 0;
        color: black;
        background: #EEAC33;
        width: 260px;
        height: 70px;
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
.leftColumn{
    width: 45%;
    height: 90%;
    margin: auto;
    .imageContainer{
        height: 90%;
        width: 100%;
        background: #1F4E65;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        position: relative;
        img {
            border-radius: 12px;
            width: 90%;
            height: 90%;
            object-fit: cover;
        }
    }
}
}
`;
