import { types } from './types';
import Posts from '../api/Posts';

export const getPost = () => async dispatch =>
{
    const res = await Posts.getSingle(0);
    dispatch({type: types.GET_POST, payload: res.data.title})
}