import { Box, InputLabel, styled, Typography } from "@mui/material";
import { useState } from "react";
import { AcceptedImage, ImageConfig, RejectedImage } from "src/@types/common";
import { LabelStyle } from "src/styles/global";
import { validateImage } from "src/utils/common";
import { fData } from "src/utils/formatNumber";
import ImagePreview from "./ImagePreview";


const Input = styled('input')({
    display: 'none',
})

type props = {
    config?: ImageConfig,
    handleAcceptedFiles: (files: AcceptedImage[]) => any

}


export default function FileUpload({
    config,
    handleAcceptedFiles
}: props) {


    const [acceptedImages, setAccepted] = useState<AcceptedImage[]>([])
    const [rejectedImages, setRejected] = useState<RejectedImage[]>([])


    // function to handle to image select
    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {

        const files = e.target.files || []
        validateImage({
            files: Array.from(files),
            imageConfig: config,
            callBack: (accepted: AcceptedImage[], rejected: RejectedImage[]) => {
                setAccepted([...acceptedImages, ...accepted])
                handleAcceptedFiles([...acceptedImages, ...accepted])
                setRejected([...rejectedImages, ...rejected])
            }
        })
    }

    function onFileRemove(i: number) {
        setAccepted(prev => {
            let newFiles = prev.filter((fl, index) => index !== i)
            handleAcceptedFiles(newFiles)
            return newFiles
        })
    }

    return (
        <>
            <Box >
                <InputLabel
                    sx={{
                        // display: "inline-block",
                        backgroundImage: "linear-gradient(to right, #f0f9ff, #f0f9ff)",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        // height: "100%",
                        borderRadius: "4px",
                        border: "1px solid #e0e0e0",
                        textAlign: "center",
                        cursor: "pointer",
                        my: 2,
                    }}
                    htmlFor="upload-image">
                    {/* png , jpg ,jpeg */}
                    <Input
                        accept="image/jpeg, image/jpg, image/png"
                        id="upload-image" type="file" multiple
                        onChange={handleImageChange}
                    />
                    <Box
                        component='img'
                        sx={{
                            maxWidth: "80px",
                            textAlign: "center",
                            margin: "auto",
                            marginTop: "10px",
                        }}
                        src='/static/illustrations/upload.png' />

                    <Typography sx={{ mb: 2 }} variant='body2'>
                        Allowed *.jpeg, *.jpg, *.png,  {config?.size && 'max size of' + fData(config?.size)} <br />
                        {
                            config?.height && config.width &&
                            'with dimension of' + config?.width + 'x' + config?.height + 'px'}
                    </Typography>
                    <Typography>
                    </Typography>
                </InputLabel>
                <ImagePreview
                    acceptedFiles={acceptedImages}
                    rejectedFiles={rejectedImages}
                    onRemove={onFileRemove}
                />
            </Box>

        </>
    )

};
