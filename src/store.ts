import { createContext } from "react";


const initialState = {
    first: 'Richard',
     last: 'Haddad'
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;