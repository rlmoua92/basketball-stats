import { SET_DATE } from '../actions/types';

const date = (state = '', action) => {
    switch (action.type) {
        case SET_DATE:
            return action.date;
        default:
            return state;
    }
}

export default date;