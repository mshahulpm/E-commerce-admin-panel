import cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { User } from 'src/@types/common'
import { _time } from '../constants/time'


export function setToken(token: string) {

    const decoded: any = decodeToken(token)

    if (decoded) {

        const exp = new Date(((decoded.exp * 1000) - _time.day))

        cookie.set('Authorization', token, {
            expires: exp
        })
    }
}

export const getAuthToken = () => cookie.get('Authorization')
export const deleteAuthToken = () => cookie.remove('Authorization')

export function getAuthDetails(token?: string) {

    token = token || cookie.get('Authorization')
    const decode = decodeToken(token as string) as User
    if (decode) {
        return {
            isAuthorized: true,
            user: decode
        }
    } else {
        return {
            isAuthorized: false,
            user: null
        }
    }
}


export function decodeToken(token: string) {
    try {
        return jwtDecode(token)
    } catch (error) {
        return false
    }
}
