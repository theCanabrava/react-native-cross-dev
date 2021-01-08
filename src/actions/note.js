import Note from '../local/Note';
import { types } from './types';

export const write = note =>
{
    Note.write(note);
    return { type: types.WRITE_NOTE, payload: note }
}

export const load = () => async dispatch =>
{
    const note = await Note.read();
    dispatch({ type: types.WRITE_NOTE, payload: note });
}