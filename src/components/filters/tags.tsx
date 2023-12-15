import { Chip, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '~/logic/hooks/store';
import { addTag, removeTag, selectTags } from '~/logic/slices/filters';
import { useGetProductsQuery } from '~/logic/slices/products';

const TagsFilter = () => {
  const { tags } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data }) => {
      const initial: string[] = [];
      const uniqueTags = new Set<string>(
        (data || []).reduce((acc, product) => {
          acc.push(...product.tags);
          return acc;
        }, initial)
      );

      return { tags: Array.from(uniqueTags) };
    },
  });

  const filterTags = useAppSelector(selectTags);
  const dispatch = useAppDispatch();

  return (
    <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
      {tags.map((tag) => {
        const selected = filterTags.indexOf(tag) > -1;
        return (
          <Chip
            label={tag}
            key={tag}
            variant={selected ? 'filled' : 'outlined'}
            onClick={() => {
              if (selected) {
                dispatch(removeTag(tag));
              } else {
                dispatch(addTag(tag));
              }
            }}
          />
        );
      })}
    </Stack>
  );
};

export default TagsFilter;
