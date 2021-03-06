import React, { Fragment, useContext, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import { createGlobalStyle } from 'styled-components';

import Carousel from './components/Carousel/Carousel';
import Loading from './components/Loading';
import AppContext from './components/AppContext';
import Product from './components/Product/Product';

const address = "http://localhost:3001";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ecf6f2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232c634c' fill-opacity='0.15'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    font-family: 'Noto Sans', sans-serif;
  }
`;

const App = () => {
  const { state, dispatch } = useContext(AppContext);
  const { items } = state;
  const socket = socketIOClient(address);

  useEffect(() => {
    const onTagFound = data => {
        if (items.length > 2) {
            items.shift();
        }

        // Each item requires a unique key.
        const itemKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        if (data !== null) {
          // Stop duplicates from being pushed to the stack.
          if (items.length > 0) {
            const current = items[0].props.data.sku;
            if (current === data.sku) {
              return;
            }
          }

          dispatch({
            type: "setItems",
            payload: [...items, (<Product key={itemKey} data={data} />)]
          });
        }
    }

    // Register the listener.
    socket.on("TagFound", onTagFound);

    // On cleanup, remove the attached listener.
    return () => socket.off("TagFound", onTagFound);

  }, [socket, items, dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      {items.length === 0 ? <Loading /> : <Carousel />}
    </Fragment>
  );
}

export default App;
