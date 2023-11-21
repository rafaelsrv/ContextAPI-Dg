import React, { createContext, PropsWithChildren, useMemo } from "react";
import { AuthContextType, AuthType } from "./types";
import { v4 as uuidv4 } from 'uuid'

const AuthContext = createContext<AuthContextType | null>(null);



const AuthProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {

    const authenticatedUser = useMemo((): AuthType => ({
        user: {
            id: uuidv4(),
            name: 'Luis',
            email: 'rafael@email.com'
        },
        token: uuidv4()
    }), [])

    return <AuthContext.Provider value={{authenticatedUser}}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider};
