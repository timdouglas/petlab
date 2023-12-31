import { Paper, Stack } from '@mui/material';
import PriceFilter from '~/components/filters/price';
import SearchFilter from '~/components/filters/search';
import SubscriptionFilter from '~/components/filters/subscription';
import TagsFilter from '~/components/filters/tags';

const Filters = () => {
  return (
    <Paper
      sx={{ height: '85vh', width: '85%', padding: '1rem', background: '#eee' }}
    >
      <h3>Filters</h3>
      <Stack spacing={1} width="80%">
        <SearchFilter />
        <TagsFilter />
        <PriceFilter />
        <SubscriptionFilter />
      </Stack>
    </Paper>
  );
};

export default Filters;
