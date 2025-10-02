import dotenv from 'dotenv';

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

// Função para construir URI do MongoDB com autenticação
function buildMongoUri() {
  const host = process.env.MONGODB_HOST || 'localhost';
  const port = process.env.MONGODB_PORT || '27017';
  const database = process.env.MONGODB_DB_NAME || 'portfolio';
  const username = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;

  if (username && password) {
    // URI com autenticação
    return `mongodb://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${host}:${port}/${database}`;
  } else {
    // URI sem autenticação (desenvolvimento local)
    return `mongodb://${host}:${port}/${database}`;
  }
}

const config = {
  // MongoDB Configuration
  mongodb: {
    uri: process.env.MONGODB_URI || buildMongoUri(),
    dbName: process.env.MONGODB_DB_NAME || 'portfolio'
  },
  
  // Server Configuration
  server: {
    port: process.env.PORT || 3000
  },
  
  // CORS Configuration
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:4200',
    credentials: true
  },
  
  // Environment
  env: process.env.NODE_ENV || 'development'
};

export default config;
