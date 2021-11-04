import React, { useContext } from "react";
import styled from 'styled-components';

import AppContext from '../AppContext';

const Wrapper = styled.ul`
    display: block;
    margin: 0;
    padding: 0;
`;

const Carousel = () => {
    const { state } = useContext(AppContext);
    const { items } = state;

    return <Wrapper>{items}</Wrapper>;
}

export default Carousel;