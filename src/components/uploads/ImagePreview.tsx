import { Alert, Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { AcceptedImage, RejectedImage } from "src/@types/common";
import { LabelStyle, RowStyle } from "src/styles/global";


type props = {
    acceptedFiles: AcceptedImage[],
    rejectedFiles: RejectedImage[],
    onRemove: (index: number) => void
}

export default function ImagePreview({ acceptedFiles, rejectedFiles, onRemove }: props) {

    return (
        <Box component='div'>

            {!!acceptedFiles.length && <LabelStyle>Preview</LabelStyle>}
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    acceptedFiles.map((file, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative'
                            }}
                        >
                            <Box
                                component='img'
                                sx={{
                                    mr: 1, mb: 1
                                }}
                                src={file.url} width={'100px'} />
                            <IconButton
                                onClick={() => onRemove(index)}
                                size='small'
                                sx={{
                                    position: 'absolute',
                                    top: -10,
                                    right: 0,
                                    zIndex: 5000,
                                    minWidth: 0,
                                    minHeight: 0,
                                    fontWeight: 700,
                                    color: 'white',
                                    background: "#f52c2c",
                                    px: .7,
                                    fontSize: '.8rem',
                                    '&:hover': {
                                        color: 'white',
                                        background: '#f53b3b'
                                    }
                                }}
                            >X</IconButton>
                        </Box>

                    ))
                }
            </Box>
            {!!rejectedFiles?.length && <LabelStyle>Rejected Images</LabelStyle>}
            {
                rejectedFiles.map((file, index) => (
                    <RowStyle key={index}
                        sx={{
                            background: '#edbebe',
                            p: 1, borderRadius:
                                '4px', maxHeight: '50px',
                            border: '1px solid #b52424'
                        }} >
                        <img src={file.url} width={'60px'} />
                        <Typography color='#660b0b' sx={{ m: 1, mt: .5 }} >{file.error}</Typography>
                    </RowStyle>
                ))
            }
        </Box>
    )

}