import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "src/context/AuthContext"


type props = {
    children: ReactNode
}

export default function AuthGuard({ children }: props) {

    const { isAuthorized } = useAuth()

    if (!isAuthorized) return <Navigate to='/login' />

    return (
        <>
            {children}
        </>
    )
}