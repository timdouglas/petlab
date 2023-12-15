import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Box,
  Chip,
  Stack,
  Avatar,
} from '@mui/material';
import { useMemo, useState } from 'react';
import ErrorRow from '~/components/product-table/error-row';
import RowSkeleton from '~/components/product-table/skeleton';
import ProductTablePagination from '~/components/product-table/pagination';
import { useGetProductsQuery } from '~/logic/slices/products';
import './product-table.css';
import { applyFilter } from '~/logic/filters';
import { useAppSelector } from '~/logic/hooks/store';
import { selectFilters, selectFiltersEnabled } from '~/logic/slices/filters';

const ProductTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { isLoading, isFetching, isError, data, error } = useGetProductsQuery();
  const filters = useAppSelector(selectFilters);
  const filtersEnabled = useAppSelector(selectFiltersEnabled);

  const filteredData = useMemo(
    () => (filtersEnabled ? applyFilter(data || [], filters) : data || []),
    [data, filters, filtersEnabled]
  );

  // memoised function to handle table render state
  // if we are loading or have an error, show those states, otherwise render the product rows
  const tableContent = useMemo(() => {
    switch (true) {
      case isLoading:
      case isFetching:
        return <RowSkeleton rowsPerPage={rowsPerPage} />;
      case !!(isError && error): {
        console.error(error);
        return <ErrorRow error="An error occurred loading products" />;
      }
      case !data:
      case data?.length === 0:
      case filteredData && filteredData.length === 0:
        return <ErrorRow error="No products found" variant="warning" />;
      default:
        return (
          <TableBody>
            {(rowsPerPage > 0
              ? filteredData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : filteredData
            ).map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: 'center' }}
                  >
                    <Avatar alt={row.title} src={row.image_src} />
                    <Stack spacing={1}>
                      <p className="productTitle">{row.title}</p>
                      <p className="productOption">{row.option_value}</p>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell>{row.vendor}</TableCell>
                <TableCell>
                  <Stack spacing={1} direction="row">
                    {row.tags.map((tag, i) => (
                      <Chip key={i} label={tag} />
                    ))}
                  </Stack>
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  {/* TODO: create a function to handle this */}
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
        );
    }
  }, [
    isLoading,
    isFetching,
    rowsPerPage,
    isError,
    error,
    data,
    filteredData,
    page,
  ]);

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
        {tableContent}
      </Table>
      <TablePagination
        component={Box}
        colSpan={3}
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={ProductTablePagination}
      />
    </TableContainer>
  );
};

export default ProductTable;
