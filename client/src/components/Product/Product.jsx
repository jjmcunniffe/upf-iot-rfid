import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';

const entryAnimation = keyframes`${slideInUp}`;

const Wrapper = styled.li`
    animation: .5s ${entryAnimation};
    background-color: #F1F1F1;
    display: inline-block;
    margin: 5px;
    max-width: 300px;
    width: 100%;
`;

const Product = ({data}) => {
    const { title, description, image, price, currency, inventory } = data;
    const imageUrl = `http://localhost:3001/images/${image}`;
    return (
        <Wrapper>
            <div>
                <img src={imageUrl} width={200} height={200} alt={title}/>
                <h1>{title}</h1>
                <p>{`${price} ${currency}`}</p>
                <p>{`${inventory} available`}</p>
                <p>{description}</p>
            </div>
        </Wrapper>
    );
}

export default Product;