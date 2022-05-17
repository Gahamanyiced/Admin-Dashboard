import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContenxt =createContext(INITIAL_STATE)
export const DarkModeContenxtProvider =({children})=>{
    const[state,dispatch] = useReducer(DarkModeReducer,INITIAL_STATE)

    return(
        <DarkModeContenxt.Provider value={{darkMode: state.darkMode,dispatch}}>
            {children}
        </DarkModeContenxt.Provider>
    )
}