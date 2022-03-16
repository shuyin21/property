import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const sidebarOpen = useSelector((state) => state.sidebar.value);

    console.log(sidebarOpen);


    return (
        <SidebarWrapper isOpen={sidebarOpen}>

        </SidebarWrapper>
    )
}

export default Sidebar;


const SidebarWrapper = styled.div`
width:300px;
height:600px;
background-color:#333 ;
position:absolute;
right:0px;
top: ${({ isOpen }) => (isOpen ? '50px' : '-900px')};
z-index:-1 ;
transition: 0.8s ease-in-out;

@media screen and (max-width:500px){
    width:100%;
    height:95%;
}

`;
