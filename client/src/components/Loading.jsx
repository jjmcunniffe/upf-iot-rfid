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
    height: 300px;
    left: 50%;
    padding: 20px 10px 10px 10px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
`;

const Loading = () => (
    <Wrapper>
        <LoadingCard>
            <Loader type="Rings" color="#41CB8D" height={120} width={120} />
        </LoadingCard>
    </Wrapper>
);

export default Loading;