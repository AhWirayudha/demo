import React, { createContext, useReducer } from "react";
import Reducer from './Reducer'


const initialState = {
    pegawai: [
        {
            nik: '1256176271',
            nama: 'Ah Wirayudha',
            sex: 'laki-laki',
            tgl: '23/06/1990',
        }
    ],
    error: null
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;