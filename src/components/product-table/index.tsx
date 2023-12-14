import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@mui/material';
import { useState } from 'react';
import { useGetProductsQuery } from '~/logic/slices/products';

const ProductTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // TODO: add first & last page buttons
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { isLoading, isFetching, isError, data } = useGetProductsQuery();

  // TODO: add actual spinner
  if (isLoading || isFetching) {
    return <p>Loading spinner</p>;
  }

  // TODO: add error handling
  if (isError || !data) {
    return <p>Error</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Vendor</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Subscription price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.title /* TODO: add image etc here */}</TableCell>
              <TableCell>{row.vendor}</TableCell>
              <TableCell>{row.tags}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                {row.subscription
                  ? row.price -
                    row.price *
                      ((typeof row.subscription_discount === 'number'
                        ? row.subscription_discount
                        : 0) /
                        100)
                  : '-'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default ProductTable;
