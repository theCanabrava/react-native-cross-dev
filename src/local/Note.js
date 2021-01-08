import AsyncStorage from '@react-native-async-storage/async-storage';

const keys =
{
    NOTE: '@note'
}

const Note =
{
    read: async () =>
    {
        try
        {
            const note = await AsyncStorage.getItem(keys.NOTE);
            return note;
        }
        catch
        {
            return null;
        }
    },

    write: async note =>
    {
        try
        {
            if(note !== null) await AsyncStorage.setItem(keys.NOTE, note);
            else AsyncStorage.removeItem(keys.NOTE);
        }
        catch
        {
            return;
        }
    }
}

export default Note;