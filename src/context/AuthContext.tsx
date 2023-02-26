import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "src/@types/common";
import { getAuthToken } from "src/services/Token";

type StateType = {
    isAuthorized: boolean
    user?: User | null
}

interface authContextType extends StateType {
    removeAuthUser: () => any,
    authorizeUser: (user?: User) => any
}


const AuthContext = createContext<authContextType | undefined>(undefined)

type authProviderProps = {
    children: ReactNode
}
export function AuthProvider({ children }: authProviderProps) {


    const [state, setState] = useState<StateType>({
        isAuthorized: !!getAuthToken()
    })
    const removeAuthUser = () => setState({ isAuthorized: false })
    const authorizeUser = (user?: User) => setState({
        isAuthorized: true,
        user
    })

    useEffect(() => {
        // need to do api call to fetch user details 

    }, [])


    return (
        <AuthContext.Provider value={{
            ...state,
            removeAuthUser,
            authorizeUser
        }}>
            {children}
        </AuthContext.Provider>
    )

}


export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error('Please call useAuth inside Auth Context Provider')
    return context
}