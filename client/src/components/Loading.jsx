import React from 'react';
import Loader from "react-loader-spinner";
import styled from 'styled-components';

import Card from './Card';

const Wrapper = styled.div`
    background-color: rgba(10, 35, 24, .2);
    height: 100vh;
    width: 100vw;
`;

const LoadingCard = styled(Card)`
    box-shadow: 0px 5px 37px 11px rgba(10,35,24,0.5);
    height: 250px;
    left: 50%;
    padding: 20px 10px 10px 10px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
`;

const Credit = styled.p`
    color: #268C5E;
    font-size: 10pt;
`;

const Loading = () => (
    <Wrapper>
        <LoadingCard>
            <Loader type="Rings" color="#41CB8D" height={120} width={120} />
            <p>Place an item on the scanner to get started...</p>
            <Credit>RFID Product by Jonathan and Pòl</Credit>
        </LoadingCard>
    </Wrapper>
);

export default Loading;