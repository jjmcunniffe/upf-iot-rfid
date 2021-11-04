import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';

import Card from '../Card';
import Image from './components/Image';
import Currency from './components/Currency';
import Info from './components/Info';
import Inventory from './components/Inventory';
import Scanned from './components/Scanned';

/*
font-weight: 600;
    text-transform: uppercase;
*/

const entryAnimation = keyframes`${slideInUp}`;

const Container = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
`;

const Wrapper = styled.li`
    animation: .5s ${entryAnimation};
    display: inline-block;
    margin: 5px;
    width: 300px;
    height: 500px;
`;

const Product = ({data}) => {
    const { title, description, image, price, currency, inventory } = data;
    return (
        <Container>
            <Wrapper>
                <Card>
                    <Image image={image} alt={title} />
                    <Scanned />
                    <Currency currency={currency} price={price} />
                    <Inventory inventory={inventory} />
                    <Info title={title} description={description} />
                </Card>
            </Wrapper>
        </Container>
    );
}

export default Product;