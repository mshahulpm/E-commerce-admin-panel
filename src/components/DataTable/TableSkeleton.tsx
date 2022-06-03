// @mui
import { TableRow, TableCell, Skeleton, Stack, TableRowProps } from '@mui/material';

// ----------------------------------------------------------------------

type props = {
  noOfRows?: number;
}

export default function TableSkeleton({ noOfRows = 1, ...other }: props & TableRowProps) {
  return (
    <>
      {
        Array.from({ length: noOfRows }).map((_, index) => (
          <TableRow {...other} key={'table-loading' + index}>
            <TableCell colSpan={12} >
              <Stack spacing={3} direction="row" alignItems="center">
                <Skeleton
                  variant="rectangular"
                  width={40}
                  height={40}
                  sx={{ borderRadius: 1, flexShrink: 0 }}
                />
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width={160} height={20} />
                <Skeleton variant="text" width={160} height={20} />
                <Skeleton variant="text" width={160} height={20} />
                <Skeleton variant="text" width={160} height={20} />
              </Stack>
            </TableCell>
          </TableRow>
        ))
      }
    </>
  );
}
