import React, { createContext, ReactNode, useContext, useState } from "react";


type assetContextType = {
    open: boolean,
    setOpen: (open: boolean) => void
}

const AssetContext = createContext<assetContextType | undefined>(undefined)


type assetProviderType = {
    children: ReactNode,
}

const AssetProvider = ({ children }: assetProviderType) => {

    const [state, setState] = useState({
        open: false
    })

    const setOpen = (open: boolean) => setState({ ...state, open })

    return (
        <AssetContext.Provider value={{
            ...state,
            setOpen
        }} >
            {children}
        </AssetContext.Provider>
    )
}


const useAsset = () => {
    const asset = useContext(AssetContext)
    if (!asset) throw new Error('Asset context can only be used in AssetContext')
    return asset
}


export { useAsset, AssetProvider }