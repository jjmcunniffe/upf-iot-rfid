import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';

const entryAnimation = keyframes`${slideInUp}`;

const Wrapper = styled.li`
    animation: .5s ${entryAnimation};
    background-color: #F1F1F1;
`;

const Product = ({data}) => (
    <Wrapper>
        <div>
            <p>{data.title}</p>
        </div>
    </Wrapper>
);

export default Product;