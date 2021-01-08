import mock from './client/mock';
import paths from './client/paths';

const Posts =
{  
    getAll: async () => await mock.get(paths.POST.GET),
    getSingle: async id => await mock.get(`${paths.POST.GET}/${id}`),
    create: async post => await mock.post(paths.POST.CREATE, post)
}

export default Posts;