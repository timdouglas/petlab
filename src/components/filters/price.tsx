import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '~/logic/hooks/store';
import { selectPrice, setPrice } from '~/logic/slices/filters';

const PriceFilter = () => {
  const price = useAppSelector(selectPrice);
  const dispatch = useAppDispatch();

  return (
    <TextField
      id="price"
      label="Price"
      value={price === -1 ? '' : price}
      onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPrice(Number(ev.target.value)));
      }}
      variant="standard"
      inputProps={{
        type: 'number',
        min: 0,
      }}
    />
  );
};

export default PriceFilter;
