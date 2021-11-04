import React from 'react';
import styled from 'styled-components';

import Section from './Section';

const ImageSection = styled(Section)`
    position: relative;
    height: 300px;

    img {
        width: auto;
        height: 250px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Image = ({alt, image}) => {
    const imageUrl = `http://localhost:3001/images/${image}`;
    return (
        <ImageSection>
            <img src={imageUrl} alt={alt}/>
        </ImageSection>
    );
}

export default Image;