import React, { useContext } from "react";

export const initialState = {
  loading: false,
  userToken: "",
  ubicacion: undefined,
};

export const ActionTypes = {
  setLoading: "SET_LOADING",
  setUserToken: "SET_USER_TOKEN",
  setUbicacion: "SET_UBICACION",
};

export const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ActionTypes.setLoading: {
      return { ...state, loading: action.newValue };
    }
    case ActionTypes.setUbicacion: {
      return { ...state, ubicacion: action.newValue };
    }
    case ActionTypes.setUserToken: {
      console.log(action)
      return { ...state, userToken: action.newValue };
    }
    default: {
      return state;
    }
  }
};

export const inicialContext = {
  contextState: initialState,
  setContextState: () => {},
};

const Context = React.createContext(inicialContext);

export function ContextProvider({ children, state = initialState }) {
  const [contextState, setContextState] = React.useReducer(
    reducer,
    state
  );

    return ( <Context.Provider value={{contextState, setContextState}}>
    {children}
  </Context.Provider>)
}

export const useContextState = () => useContext(Context)