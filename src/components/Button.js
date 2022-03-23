import React from 'react';
import styled from 'styled-components';


const Button = (props) => {
    return (
        <Wrapper>
            <h3>{props.value}</h3>
        </Wrapper>
    )
}

export default Button;


const Wrapper = styled.div`
/* height:30px; */
min-width:180px;
color:#fff ;
background:#a32035 ;
display:inline-block ;
border:none;
border-radius:4px;
text-transform:uppercase;
padding:5px 32px ;
font-size:12px ;
position:relative;
text-align:center;
z-index:999 ;
cursor:pointer;
letter-spacing:0.05em;
font-weight:700 ;
line-height:1em ;

:before {
    content: '';
    width: 0px;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background: #781827;
    transition: width 400ms cubic-bezier(0.23, 1, 0.32, 1), opacity 400ms;
    z-index: -1;
    border-radius: 4px;
    opacity: 0;
}


`;