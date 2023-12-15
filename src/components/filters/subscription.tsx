import { HighlightOff } from '@mui/icons-material';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '~/logic/hooks/store';
import { selectSubscription, setSubscription } from '~/logic/slices/filters';

const SubscriptionFilter = () => {
  const subscription = useAppSelector(selectSubscription);
  const dispatch = useAppDispatch();

  return (
    <FormGroup sx={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={!!subscription}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setSubscription(ev.target.checked));
            }}
          />
        }
        label="Subscription"
      />
      {subscription !== null ? (
        <IconButton
          aria-label="clear"
          onClick={() => {
            dispatch(setSubscription(null));
          }}
        >
          <HighlightOff sx={{ fill: '#666' }} />
        </IconButton>
      ) : null}
    </FormGroup>
  );
};

export default SubscriptionFilter;
