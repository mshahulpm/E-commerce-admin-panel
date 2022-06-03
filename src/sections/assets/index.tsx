import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "src/components/Header";
import Iconify from "src/components/Iconify";
import NewAsset from "./NewAsset";



export default function AssetList() {


    return (
        <>
            <Header
                title="Assets"
                btnText="New Asset"
            />

            <NewAsset />
        </>
    )
}