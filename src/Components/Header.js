import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
   
    const [sideBarOpener, setSideBarOpener] = useState(false);
    
    const cars = useSelector(selectCars);

    return (
        <Container>
            <Logo><img src="./images/logo.svg"/></Logo>
           <Nav> 
           {cars && cars.map((car,index) =>
            <a href="#2" spy={true} smooth={true} >{car.title}</a>)} 
           </Nav>
           <Side>
           
           <a href="#" >store</a>
           <a href="#" >TESLA ACCOUNT</a>
           
           <MenuStyledIcon onClick={()=>setSideBarOpener(true)}/>

           </Side>
            <SideMenuWrap show={sideBarOpener}>
            <SideMenu>
            <CloseIconWrapper>
            <CloseIcoN onClick={()=>setSideBarOpener(false)}/>
            </CloseIconWrapper>

            {cars && cars.map((car,index) =>
                <li key={index}><a href="#">{car.title}</a></li>
            )}
            </SideMenu>
            
            </SideMenuWrap>
           </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:50px;

    display:flex;
    align-items: center;
    padding:0 20px;
    position:fixed;
    top:0;
    right:0;
    left:0;

   
    z-index:1;
    justify-content:space-between;
`;

const Logo = styled.div`


`;

const Nav = styled.div`

display:flex;
align-items: center;
justify-content: center;
flex:1;

@media all and (max-width: 480px) { 
    display:none;
}

a{ 
    text-decoration: none;
    font-weight:bold;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}


`;
const Side = styled.div`
display:flex;
align-items: center;
justify-content: center;
a{ 
    text-decoration: none;
    font-weight:bold;
    text-transform:uppercase;
    margin-right:10px;
  

}
`;

const MenuStyledIcon = styled(MenuIcon)`
cursor:pointer;
`;

const SideMenuWrap = styled.div`


width:250px;
background:white;
height:100%;
position:fixed;
top:0;
bottom:0;
right:0;
z-index:10;
list-style:none;
padding:20px;
overflow:auto;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ease; 

&::-webkit-scrollbar {
    width: 0px !important;
    border: 1px solid white;
}

li{
    padding:15px 0;
    border-bottom:1px solid rgb(0,0,0,.2);

    a{
        text-decoration:none;
        font-weight:550;
        font-size: 14px;
    }
}
`;

const SideMenu = styled.div`
    

`;

const CloseIconWrapper = styled.div`
padding:10px;
position: fixed;
top:0;
right:0;
`;
const CloseIcoN = styled(CloseIcon)`
cursor:pointer;
`;