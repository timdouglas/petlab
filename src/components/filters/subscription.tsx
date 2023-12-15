import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useAppDispatch, useAppSelector } from '~/logic/hooks/store';
import { selectSubscription, setSubscription } from '~/logic/slices/filters';

const SubscriptionFilter = () => {
  const subscription = useAppSelector(selectSubscription);
  const dispatch = useAppDispatch();

  // TODO: this needs a way of resetting the filter back to null

  return (
    <FormGroup>
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
    </FormGroup>
  );
};

export default SubscriptionFilter;
