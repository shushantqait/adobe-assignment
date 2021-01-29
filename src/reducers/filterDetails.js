import Actions from "../constants/actions";

export default function filterDetailsReducer(state = {}, action) {
    switch (action.type) {
        case Actions.Filter.GET:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
