import { CHANGE_INTERVAL } from 'constants/CurrentIntervalConstants';

export const initialStateCurrentInterval = {
    currentInterval: 0,
}

export const currentIntervalReducer = (
    state = initialStateCurrentInterval,
    action,
) => {
    switch(action.type) {
        case CHANGE_INTERVAL:
            return {
                ...state,
                currentInterval: action.payload,
            };
        default:
            return state;
    }
  }
