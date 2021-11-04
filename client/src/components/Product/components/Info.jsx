import React from 'react';
import styled from 'styled-components';

import Section from './Section';

const InfoSection = styled(Section)`
    padding: 10px;
    max-width: 280px;

    h1 {
        color: #2C634C;
    }
`;

const Info = ({title, description}) => (
    <InfoSection>
        <h1>{title}</h1>
        <p>{description}</p>
    </InfoSection>
);

export default Info;