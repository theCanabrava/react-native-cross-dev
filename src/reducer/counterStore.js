import { types } from "../actions";

const initialState = { count: 0 };

export default (state = initialState, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const addCounter = (state, payload) => ({...state, count: state.count + payload});

const handlers =
{
    hasHandler: key => handlers[key] !== undefined,
    [types.ADD_COUNTER]: addCounter
}