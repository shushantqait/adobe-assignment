import Actions from "../constants/actions";

export default function cardDetailsReducer(state = {}, action) {
    switch (action.type) {
        case Actions.Card.GET:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
