const API = 'api'
const POST = 'post'
const PROFILE = 'profile'

const paths = 
{
    ROOT: 'http://192.168.0.11:19000',

    AUTH:
    {
        LOGIN: '/login',
        REFRESH: `/${API}/refresh`
    },

    POST:
    {
        GET: `/${API}/${POST}/get`,
        CREATE: `/${API}/${POST}/create`
    },

    PROFILE:
    {
        GET: `/${API}/${PROFILE}/get`,
        EDIT: `/${API}/${PROFILE}/edit`
    }
}

export default paths;