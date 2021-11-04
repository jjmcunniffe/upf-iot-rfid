import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import styled from 'styled-components';

import Product from '../Product/Product';

const address = "http://localhost:3001";

const Wrapper = styled.ul`
    width: 1000px;
    height: 200px;
`;

const Carousel = () => {
    const [items, setItems] = useState([]);
    const socket = socketIOClient(address);

    useEffect(() => {
        const onTagFound = data => {
            if (items.length > 5) {
                items.shift();
            }

            // Each item requires a unique key.
            const itemKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            setItems(items => [...items, (<Product key={itemKey} data={data} />)]);
        }

        // Register the listener.
        socket.on("TagFound", onTagFound);

        // On cleanup, remove the attached listener.
        return () => socket.off("TagFound", onTagFound);

    }, [socket, items]);

    return <Wrapper>{items}</Wrapper>;
}

export default Carousel;