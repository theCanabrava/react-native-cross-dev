import axios from 'axios';
import paths from './paths';

const mock = axios.create(
{
    baseURL: paths.ROOT,
    headers:
    {
        Authorization: 'Bearer token'
    }
})

export default mock;