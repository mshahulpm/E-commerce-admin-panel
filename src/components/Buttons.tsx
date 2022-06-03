import { Button, ButtonProps } from "@mui/material";




export const Button1 = (props: ButtonProps) => {

    const { sx, ...rest } = props;

    return (
        <Button
            sx={{
                minWidth: 0,
                minHeight: 0,
                p: 1,
                ...sx
            }}
            {...rest} />
    )
}