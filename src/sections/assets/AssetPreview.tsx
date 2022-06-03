import { Box, Grid } from "@mui/material";
import { LabelStyle } from "src/styles/global";


type props = {
    acceptedFiles: File[],
    rejectedFiles: File[],
    imageWidth: number,
}

export default function AssetPreview({ acceptedFiles, rejectedFiles }: props) {

    return (
        <Box component='div'>
            <Grid container spacing={3} sx={{ p: 3, pt: 0, pb: 2 }} >

                <Grid item xs={12} sm={9}>
                    <LabelStyle>Preview</LabelStyle>

                </Grid>
                <Grid item xs={12} sm={3}>
                    <LabelStyle>Rejected Images</LabelStyle>

                </Grid>

            </Grid>
        </Box>
    )

}