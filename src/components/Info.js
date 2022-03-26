import React, { useState } from 'react';
import styled from 'styled-components';
import { BsInfoCircle } from 'react-icons/bs';
import SelectButton from './SelectButton';
import Button from '../components/Button';

const Info = () => {

    const [sellers, setSellers] = useState(false);
    const [buyers, setBuyers] = useState(false);
    const [landlords, setLandlords] = useState(false);
    const [tenants, setTenants] = useState(false);


    const buttonHandler = () => {

        console.log('working');
    }

    return (
        <InfoWrapper>

            <InfoLogo />
            <h2>WHAT SHU CAN DO FOR YOU</h2>
            <ButtonsWrapper >
                <SelectButton onClick={buttonHandler} name='Sellers' active={sellers} />
                <SelectButton name='buyers' active={buyers} />
                <SelectButton name='landlords' active={landlords} />
                <SelectButton name='tenants' active={tenants} />
            </ButtonsWrapper>
            <Button value={'Book appointment'} whereTo={'appointment'} />
        </InfoWrapper>
    )
}

export default Info


const InfoWrapper = styled.div`
width:100%;
height:600px;
background-color:#333 ;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

h2{
    color:white;
}
`;

const InfoLogo = styled(BsInfoCircle)`
color:white;
width:30px;
height:30px;
`;

const ButtonsWrapper = styled.div`
display:flex;

`;