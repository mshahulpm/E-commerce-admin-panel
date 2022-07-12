export type _TableHead = {
    _key: string,
    label: string,
    component?: ({ data }: any) => JSX.Element,
}



export type AcceptedImage = {
    file: File,
    url: string,
}

export type RejectedImage = {
    file: File,
    url: string,
    error: string
}