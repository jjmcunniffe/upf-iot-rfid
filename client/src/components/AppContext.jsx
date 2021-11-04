import React, { createContext, useReducer } from 'react';

const Context = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'setItems': {
          return {items: action.payload}
        }
        default: {
          throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {items: []});
    const value = {state, dispatch};

    return <Context.Provider value = {value}>{children}</Context.Provider>
}
export { Provider };

const Consumer = ({children}) => (
  <Context.Consumer>
    {context => {
      if (context === undefined) {
        throw new Error('Consumer must be used within a Provider')
      }
      return children(context)
    }}
  </Context.Consumer>
);
export {Consumer}

export default Context;