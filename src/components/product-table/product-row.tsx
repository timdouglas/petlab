import { Avatar, Chip, Stack, TableCell, TableRow } from '@mui/material';
import { Product } from '~/logic/slices/products';
import { applyDiscount } from '~/logic/utils';

const ProductRow = ({ product }: { product: Product }) => (
  <TableRow
    key={product.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Avatar alt={product.title} src={product.image_src} />
        <Stack spacing={1}>
          <p className="productTitle">{product.title}</p>
          <p className="productOption">{product.option_value}</p>
        </Stack>
      </Stack>
    </TableCell>
    <TableCell>{product.vendor}</TableCell>
    <TableCell>
      <Stack spacing={1} direction="row">
        {product.tags.map((tag, i) => (
          <Chip key={i} label={tag} />
        ))}
      </Stack>
    </TableCell>
    <TableCell align="right">{product.price}</TableCell>
    <TableCell align="right">
      {product.subscription
        ? applyDiscount(product.price, product.subscription_discount || 0)
        : '-'}
    </TableCell>
  </TableRow>
);

export default ProductRow;
