import { LoadingButton } from "@mui/lab";
import { Box, Button, Dialog, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, styled, Typography, InputLabel, Grid } from "@mui/material";
import React, { useState } from "react";
import { AcceptedImage, RejectedImage } from "src/@types/common";
import { LabelStyle, RowStyle } from "src/styles/global";
import { validateImage } from "src/utils/common";
import { fData } from "src/utils/formatNumber";
import { useAsset } from "./AssetContext";
import AssetPreview from "./AssetPreview";
import { IMAGE_CONFIG } from "./utils";

const Input = styled('input')({
    display: 'none',
})


type image_type = 'product' | 'category' | 'banner'

export default function NewAsset() {

    const { open, setOpen } = useAsset()

    const [imageType, setImageType] = useState<image_type>('product')
    const config = IMAGE_CONFIG[imageType]

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
                setAccepted([...rejectedImages, ...rejected])
            }
        })
    }

    // function to remove images 
    function removeImage(index: number) {
        setAccepted(acceptedImages.filter((_, ind) => ind !== index))
    }

    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth="md"
            PaperProps={{
                style: {
                    borderRadius: "4px"
                }
            }}
        >
            <Box sx={{ p: 2 }}>
                <RowStyle>
                    <Typography variant='h5'>Upload Images</Typography>
                    <Button color='error' variant='contained' sx={{ ml: 'auto' }} onClick={() => setOpen(false)} >X</Button>
                </RowStyle>

                <Grid container spacing={3} sx={{ p: 3, pb: 0 }}>
                    <Grid item xs={12} sm={4}>

                        <FormControl>
                            <LabelStyle id="demo-radio-buttons-group-label">Choose Image Type</LabelStyle>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="product"
                                name="radio-buttons-group"
                                onChange={(e) => setImageType(e.target.value as image_type)}
                                value={imageType}
                            >
                                <FormControlLabel value="product" control={<Radio />} label="Product" />
                                <FormControlLabel value="category" control={<Radio />} label="Category" />
                                <FormControlLabel value="banner" control={<Radio />} label="Banner" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <LabelStyle id="demo-radio-buttons-group-label">Click to upload</LabelStyle>
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
                                Allowed *.jpeg, *.jpg, *.png, max size of {fData(config.size)} <br />
                                with dimension of {config.width}x{config.height}px
                            </Typography>
                            <Typography>
                            </Typography>
                        </InputLabel>
                    </Grid>
                </Grid>

                <AssetPreview
                    acceptedFiles={acceptedImages}
                    rejectedFiles={rejectedImages}
                    onRemove={removeImage}
                />
                <RowStyle>
                    <LoadingButton sx={{ ml: 'auto', mr: 2 }} variant='contained'>Submit</LoadingButton>
                </RowStyle>
            </Box>
        </Dialog>
    )
}