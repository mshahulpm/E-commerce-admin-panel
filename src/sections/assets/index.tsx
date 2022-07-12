import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "src/components/Header";
import Iconify from "src/components/Iconify";
import { AssetProvider, useAsset } from "./AssetContext";
import NewAsset from "./NewAsset";


function AssetList() {

    const { setOpen } = useAsset()

    return (
        <>
            <Header
                title="Assets"
                btnText="New Asset"
                btnFn={() => setOpen(true)}
            />

            <NewAsset />
        </>
    )
}


export default function AssetPage() {

    return (
        <AssetProvider>
            <AssetList />
        </AssetProvider>
    )
}