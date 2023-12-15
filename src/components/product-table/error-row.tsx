import { Alert, TableBody, TableRow } from '@mui/material';

const ErrorRow = ({
  error,
  variant = 'error',
}: {
  error: string;
  variant?: 'error' | 'warning';
}) => (
  <TableBody>
    <TableRow>
      <Alert severity={variant}>{error}</Alert>
    </TableRow>
  </TableBody>
);

export default ErrorRow;
