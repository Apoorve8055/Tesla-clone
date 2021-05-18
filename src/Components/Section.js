import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({key,title,description,image}) {
    return (
        <Conatiner key={key} BGimg={image}>
        
        
            <TopTextSection>
            <Fade bottom>
            <h1>{title}</h1>
            <p>{description}</p>
            </Fade>
            </TopTextSection>
        
         
   
            <BottomSection>

            <Fade bottom>
            <ButtonGroup>
                <RightButton>custom order</RightButton>
                <LeftButton>existing inventory</LeftButton>
            </ButtonGroup>
            </Fade>
            <DownArrow src="./images/down-arrow.svg"/>

            </BottomSection>
                   
            </Conatiner>
    )
}

export default Section

const Conatiner = styled.div`

width:100vw;
height:100vh;


background:url(./images/${props=>props.BGimg});
background-size: cover;
background-position:center;
background-repeat:no-repeat;

text-align: center;

display:flex;
flex-direction: column;
justify-content:space-between;
`;


const TopTextSection = styled.div`
padding-top:80px;
`; 

const BottomSection = styled.div`
margin-bottom:3px;
`;

const ButtonGroup = styled.div`

display:flex;
justify-content:center;
  


@media all and (max-width: 480px) { 

flex-direction:column;
}

`;

const RightButton = styled.div`


background:#323339;
color:white;
border-radius:100px;
opacity:0.8;

margin:15px;
padding:15px 55px 15px 55px;


cursor:pointer;

text-transform:uppercase;
font-size:13px;

`;

const LeftButton = styled(RightButton)`
background:white;
color:black;
opacity:0.6;
`;

const DownArrow = styled.img`
height:40px;
cursor:pointer;

animation: ArrowBounce 1.5s infinite;

`;