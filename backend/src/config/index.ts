import * as dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFile = dotenv.config();

if(!envFile){
    throw new Error("Não foi possível carregar o arquivo .env");
}

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    SECRETWORD,
} = process.env;

const config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID
    },
    secretword: SECRETWORD,
}

export default config;