import { GET_URL_DETAILS } from '../actions/type'

const initialState = {
    items: [],
    item: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_URL_DETAILS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}