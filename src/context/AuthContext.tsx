import { previousDay } from "date-fns";
import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "src/@types/common";
import { deleteAuthToken, getAuthDetails, setToken } from "src/services/Token";

type StateType = {
    isAuthorized: boolean
    user: User | null
}


interface authContextType extends StateType {
    login: (token: string,) => void
    logout: VoidFunction
}


const AuthContext = createContext<authContextType | undefined>(undefined)

type authProviderProps = {
    children: ReactNode
}
export function AuthProvider({ children }: authProviderProps) {

    const navigate = useNavigate()

    const [state, setState] = useState<StateType>(getAuthDetails())

    const login = (token: string,) => {
        setToken(token)
        setState(prev => ({
            ...prev,
            ...getAuthDetails(token)
        }))
        navigate('/')
    }

    const logout = () => {
        deleteAuthToken()
        setState(prev => ({ ...prev, isAuthorized: false, user: null }))
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            logout
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