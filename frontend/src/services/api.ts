import axios from "axios";

async function auth(data: Object, route: string, method: string){
    if (method === 'post'){
        const res = await axios.post('http://192.168.100.6:8080/' + route, data)
            .then(res => {
                return [res.data, res.status];
            }).catch(err => {
                return [err.response.data, err.response.status];
            });

        return res;
    }
}

async function createUser(data: Object, route: string, method: string) {
    if(method === 'post'){
        const res = await axios.post('http://192.168.100.6:8080/' + route, data)
            .then(res => {
                return [res.data, res.status];
            }).catch(err => {
                return [err.response.data, err.response.status];
            });

        return res;
    }
}

export { auth, createUser };