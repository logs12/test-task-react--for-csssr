import { CHANGE_INTERVAL } from 'constants/CurrentIntervalConstants';

export const changeInterval = valueInterval => ({
    type: CHANGE_INTERVAL,
    payload: valueInterval,
})