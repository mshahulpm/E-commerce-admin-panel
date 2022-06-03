export type _TableHead = {
    _key: string,
    label: string,
    component?: ({ data }: any) => JSX.Element,
}