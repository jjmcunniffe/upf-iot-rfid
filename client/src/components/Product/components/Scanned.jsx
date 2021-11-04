import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import { ReactComponent as RfidIcon } from '../../../rfid.svg';

const ScannedSection = styled(Section)`
    background-color: #C3EFDB;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 10pt;
    padding-bottom: 2px;
    color: #1D6947;

    svg {
        margin-top: 5px;
        margin-right: 5px;
        width: 15px;
        height: 15px;
        fill: #1D6947;
    }
`;

const Scanned = () => (
    <ScannedSection>
        <RfidIcon />Scanned at X
    </ScannedSection>
);

export default Scanned;