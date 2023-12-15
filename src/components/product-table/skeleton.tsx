import { Skeleton, TableBody, TableCell, TableRow } from '@mui/material';

const RowSkeleton = ({ rowsPerPage }: { rowsPerPage: number }) => (
  <TableBody>
    {Array(rowsPerPage)
      .fill('')
      .map((v, i) => (
        <TableRow key={i}>
          <TableCell>
            <Skeleton />
          </TableCell>
          <TableCell>
            <Skeleton />
          </TableCell>
          <TableCell>
            <Skeleton />
          </TableCell>
          <TableCell align="right">
            <Skeleton />
          </TableCell>
          <TableCell align="right">
            <Skeleton />
          </TableCell>
        </TableRow>
      ))}
  </TableBody>
);

export default RowSkeleton;
