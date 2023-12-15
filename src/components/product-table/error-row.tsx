import { Alert, TableBody, TableCell, TableRow } from '@mui/material';

const ErrorRow = ({
  error,
  variant = 'error',
}: {
  error: string;
  variant?: 'error' | 'warning';
}) => (
  <TableBody>
    <TableRow>
      <TableCell colSpan={5}>
        <Alert severity={variant}>{error}</Alert>
      </TableCell>
    </TableRow>
  </TableBody>
);

export default ErrorRow;
