import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import { ReactComponent as InventoryIcon } from '../../../inventory.svg';

const InventorySection = styled(Section)`
    background-color: #2C634C;
    color: #D8EEE5;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 2px;

    svg {
        margin-top: 5px;
        margin-right: 5px;
        width: 15px;
        height: 15px;
        fill: #D8EEE5;
    }
`;

const Inventory = ({inventory}) => (
    <InventorySection>
        <InventoryIcon />{inventory} Available
    </InventorySection>
);

export default Inventory;