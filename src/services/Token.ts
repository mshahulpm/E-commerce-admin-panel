import cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { TIME } from '../constants/time'


export function setToken(token: string) {

    const decoded: any = decodeToken(token)

    if (decoded) {

        const exp = new Date(((decoded.exp * 1000) - TIME.day))

        cookie.set('Authorization', token, {
            expires: exp
        })
    }
}

export const getAuthToken = () => cookie.get('Authorization')
export const deleteAuthToken = () => cookie.remove('Authorization')



export function decodeToken(token: string) {
    try {
        return jwtDecode(token)
    } catch (error) {
        return false
    }
}
