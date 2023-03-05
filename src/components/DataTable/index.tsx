import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    SxProps,
    Box,
    Tabs,
    Tab
} from '@mui/material'
import { ReactElement, useEffect, useState } from 'react'
import Scrollbar from 'src/components/Scrollbar'
import Toolbar from './Toolbar'
import TableNoData from './TableNoData'
import TableSkeleton from './TableSkeleton'
import { _TableHead } from 'src/@types/common'



export type DataTableProps = {
    tableHead: _TableHead[],
    dataSource?: (args: {
        search: string,
        limit: number,
        page: number,
        filter?: {
            [key: string]: any
        }
    }) => Promise<{
        docs: any[],
        last_page: number
        limit: number
        offset: number
        page: number
        totalDocs: number
    }>,
    demoData?: any[],
    containerProps?: SxProps,
    Filter?: ({ setFilter }: { setFilter: (filter: any) => void }) => JSX.Element,
    tabNavValues?: {
        label: string,
        value: string
    }[],
}

export default function DataTable({
    tableHead,
    dataSource,
    demoData,
    containerProps,
    Filter,
    tabNavValues
}: DataTableProps) {


    const [data, setData] = useState<any[]>(demoData || [])
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState({
        tabFilter: tabNavValues?.[0]?.value || 'all'
    })

    useEffect(() => {
        if (!dataSource) return
        setLoading(true)
        dataSource({
            search,
            page: page + 1,
            limit,
            filter
        })
            .then((data) => {
                setData(data.docs)
                setCount(data.totalDocs)
                setLoading(false)
            })
            .catch((err) => {
                setError(true)
                setLoading(false)
            })
    }, [page, limit, search, filter])


    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLimit(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            {
                tabNavValues &&
                <Tabs
                    allowScrollButtonsMobile
                    variant="scrollable"
                    scrollButtons="auto"
                    value={filter.tabFilter}
                    onChange={(event, value) => {
                        setFilter((prev) => ({
                            ...prev,
                            tabFilter: value
                        }))
                    }}
                    sx={{ px: 2, bgcolor: 'background.neutral' }}
                >
                    {tabNavValues.map((tab) => (
                        <Tab disableRipple key={tab.value} label={tab.label} value={tab.value} />
                    ))}
                </Tabs>

            }
            <Toolbar
                onSearch={(value) => setSearch(value)}
                Filter={Filter ? <Filter setFilter={setFilter} /> : null}
            />

            {/* {Filter &&
                <Box sx={{ display: 'flex', pb: 1, px: 3 }}>
                    <Filter setFilter={setFilter} />
                </Box>
            } */}
            <Scrollbar>
                <TableContainer sx={{ ...containerProps }} >
                    <Table>
                        <TableHead sx={{ whiteSpace: 'nowrap' }}>
                            <TableRow>
                                {tableHead.map((head) => (
                                    <TableCell key={head._key}>
                                        {head.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                loading ?
                                    <TableSkeleton noOfRows={4} /> :
                                    <>
                                        {
                                            data?.length > 0 ?
                                                data?.map((row, index) => (
                                                    <TableRow key={'id_1' + index}>
                                                        {tableHead.map((head, ind) => (
                                                            <TableCell key={'id_2' + index + ind}>
                                                                {head.component ? head.component({ data: row }) : row[head._key]}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                ))
                                                : <TableNoData isNotFound />
                                        }
                                    </>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Scrollbar>
            <Box sx={{ position: 'relative' }}>
                <TablePagination
                    component={'div'}
                    rowsPerPageOptions={[1, 5, 10]}
                    count={count || demoData?.length || 0}
                    rowsPerPage={limit}
                    page={page}
                    onPageChange={(e, p) => setPage(p)}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </>
    )
}