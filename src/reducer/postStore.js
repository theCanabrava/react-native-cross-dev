import { types } from "../actions";

const initialState = { title: '' };

export default (state = initialState, action) =>
{
    if(handlers.hasHandler(action.type)) return handlers[action.type](state, action.payload);
    else return state;
}

const addPost = (state, payload) => ({...state, title: payload});

const handlers =
{
    hasHandler: key => handlers[key] !== undefined,
    [types.GET_POST]: addPost
}