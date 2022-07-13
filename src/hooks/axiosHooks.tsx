import { AxiosRequestConfig } from "axios";
import { useEffect, useMemo, useState } from "react";
import axios from 'src/services/_axios'


type stateType = {
    loading: boolean
    data: any | null,
    error: any | null
}

const initialState = {
    loading: false,
    data: null,
    error: null
}

export function useAxiosQuery(url: string, args?: AxiosRequestConfig) {

    const [state, setState] = useState<stateType>(initialState)

    const changeState = (newState: Partial<stateType>) => setState({ ...initialState, ...newState })

    useEffect(() => {
        changeState({ loading: true })
        axios({
            url,
            method: 'get',
            ...args
        })
            .then(res => {
                changeState({ data: res.data })
            })
            .catch(error => {
                changeState({ error })
            })
    }, [url, args])

    return useMemo(() => state, [state])
}


export function useLazyAxiosQuery(url: string, args?: AxiosRequestConfig) {

    const [state, setState] = useState<stateType>(initialState)

    const changeState = (newState: Partial<stateType>) => setState({ ...initialState, ...newState })

    const lazyFunction = async () => {
        changeState({ loading: true })
        try {
            const { data } = await axios({
                url,
                method: 'get',
                ...args
            })
            changeState({ data })
            Promise.resolve(data)
        } catch (error) {
            changeState({ error })
            return Promise.reject(error)
        }
    }

    return useMemo(() => ([lazyFunction, state]), [state])
}


type mutationReturnType = [(url: string, arg?: AxiosRequestConfig) => Promise<{ data: any } | { error: any }>, stateType]

export function useAxiosMutation(): mutationReturnType {

    const [state, setState] = useState<stateType>(initialState)

    const changeState = (newState: Partial<stateType>) => setState({ ...initialState, ...newState })

    const mutateFunction = async (url: string, args?: AxiosRequestConfig) => {
        changeState({ loading: true })
        try {
            const { data } = await axios({
                url,
                method: 'post',
                ...args
            })
            changeState({ data })
            return Promise.resolve(data)
        } catch (error) {
            changeState({ error })
            return Promise.reject(error)
        }
    }

    return useMemo(() => ([mutateFunction, state]), [state])
    // return [mutateFunction, state]
}