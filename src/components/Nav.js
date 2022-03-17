import React from 'react';
import styled from 'styled-components';

import { FaSearch as SearchIcon, FaPhone as PhoneIcon } from 'react-icons/fa';
import { GiHamburgerMenu as BurgerMenu } from 'react-icons/gi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { sidebarDetails } from '../features/sidebarReducer';
import { useSelector, useDispatch } from 'react-redux';


const Nav = () => {

    const sidebarOpen = useSelector((state) => state.sidebar.value);
    const dispatch = useDispatch();

    const sidebarHandler = () => {
        dispatch(sidebarDetails(!sidebarOpen));
    }

    return (
        <NavMain>
            <NavWrapper>
                <Logo />
                <Menu>

                    <MenuItem ><h4>Property Search</h4><SearchIcon /></MenuItem>
                    <MenuItem><h4> Contact</h4><PhoneIcon /></MenuItem>
                    <MenuItem onClick={sidebarHandler}><h4>Menu</h4>{sidebarOpen ? <CloseIcon /> : <BurgerMenu />}</MenuItem>

                </Menu>
            </NavWrapper>

        </NavMain>
    )
}

export default Nav


const NavMain = styled.div`
width:100vw;
height:50px;
background-color:#333;


display:flex;
align-items:center;
z-index:10;

`;
const NavWrapper = styled.div`
width:100% ;
height:100%;
padding:5px 10px;
display:flex;
align-items:center;
justify-content:space-between;
text-align:center;


`;
const Logo = styled.div`
width:100px;
height:80%;
background-color: red ;

`;
const Menu = styled.div`
width:350px;
height:100%;
display:flex;
align-items:center;
justify-content:space-between;

@media screen and (max-width:768px){
    width:30%;
}

`;
const MenuItem = styled.div`
display:flex;
height:100%;
align-items:center;
justify-content:center;
color:#858E94;
cursor:pointer;
h4{
    margin-right:5px ;
@media screen and (max-width:768px){
    display: none ;
}
}


:hover{
    color:#E0E0E0;
}
`;

const CloseIcon = styled(RiCloseCircleFill)`
width:20px;
height:20px;
`;