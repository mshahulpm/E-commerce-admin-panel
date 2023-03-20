import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Grid, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AcceptedImage } from "src/@types/common";
import { FormProvider, RHFTextField } from "src/components/hook-form";
import FileUpload from "src/components/uploads/FileUpload";
import { CREATE_PRODUCT_MUTATION } from "src/graphql/mutation";
import { CreateProductInput } from "src/graphql/types";
import { omitEmpty } from "src/utils/common";
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { config } from "src/constants";



export const product_schema = yup.object().shape({
    name: yup.string().required('please provide a name'),
    price: yup.lazy(
        (value) => (value === '' ?
            yup.string() :
            yup.number().min(0, 'invalid').typeError('invalid')
        )),
    discount: yup.lazy(
        (value) => (value === '' ?
            yup.string() :
            yup.number().min(0, 'invalid').typeError('invalid')
        )),
})



export default function ProductForm() {

    const [createProductMutation] = useMutation(CREATE_PRODUCT_MUTATION)

    const [loading, setLoading] = useState(false)
    const [files, setFiles] = useState<AcceptedImage[]>([])
    const methods = useForm<CreateProductInput>({
        resolver: yupResolver(product_schema)
    })


    async function onSubmit(data: CreateProductInput) {

        setLoading(true)

        try {
            if (files.length) {
                let formData = new FormData()
                files.forEach(file => {
                    formData.append('products', file.file)
                })

                const res = await axios.post(config.FILE_SERVER + '/upload', formData)

                data.images = (res.data.images as Array<any>).map(img => img.image)
                data.thumbnail = res.data.images[0][100]
            }
            await createProductMutation({
                variables: {
                    createProductInput: omitEmpty(data)
                }
            })
            toast.success('Product Added')
            methods.reset({})
        } catch (error: any) {
            toast.error(error?.response?.data?.message || error.message)
        }

        setLoading(false)

    }

    return (
        <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)} >
            <Grid container spacing={3} sx={{ py: 2 }}>
                <Grid item xs={12} sm={8}>
                    <Stack spacing={2}>
                        <RHFTextField name="name" label='Product Name' />
                        <RHFTextField
                            multiline
                            rows={4}
                            name="description" label='Product Description' />

                        <FileUpload
                            config={{}}
                            handleAcceptedFiles={setFiles}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Stack spacing={2}>
                        <RHFTextField name="price" label='Price' />
                        <RHFTextField name="discount" label='Discount' />
                        <RHFTextField name="sku" label='SKU' />
                    </Stack>
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                        loading={loading}
                    >
                        Submit
                    </LoadingButton>
                </Grid>
            </Grid>
        </FormProvider>
    )
}