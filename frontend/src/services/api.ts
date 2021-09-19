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

async function fetchDeputado(){
  const { data } = await axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome')
  
  const deputados: {id: string, nome: string, foto: string}[] = [];

  data.dados.forEach((element: any) => {
    deputados.push({
      id: element.id,
      nome: element.nome,
      foto: element.urlFoto,
    })
  });

  return deputados;
}

export { auth, createUser, fetchDeputado};