import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import { ReactComponent as CurrencyIcon } from '../../../currency.svg';

const CurrencySection = styled(Section)`
    background-color: #78C2A3;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 2px;
    color: #0A2318;

    svg {
        margin-top: 5px;
        margin-right: 5px;
        width: 15px;
        height: 15px;
        fill: #0A2318;
    }
`;

const Currency = ({price, currency}) => (
    <CurrencySection>
        <CurrencyIcon />{`${price} ${currency}`}
    </CurrencySection>
);

export default Currency;