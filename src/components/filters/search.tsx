import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '~/logic/hooks/store';
import { selectSearch, setSearch } from '~/logic/slices/filters';

const SearchFilter = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);
  return (
    <TextField
      id="search"
      label="Search"
      value={search}
      onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(ev.target.value));
      }}
      variant="standard"
    />
  );
};

export default SearchFilter;
