import { types } from "../actions";

const initialState = { value: '' };

export default (state = initialState, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const writeNote = (state, payload) => ({...state, value: payload});

const handlers =
{
    hasHandler: key => handlers[key] !== undefined,
    [types.WRITE_NOTE]: writeNote
}