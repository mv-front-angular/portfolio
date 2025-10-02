# Portfolio Backend

Backend Node.js com Express e MongoDB para o portfolio.

## Configuração de Ambiente

### Desenvolvimento Local

1. Copie o arquivo `.env` e configure suas variáveis:
```bash
cp .env .env.local  # opcional
```

2. Configure as variáveis no arquivo `.env`:
```env
# MongoDB Configuration
# Opção 1: URI completa (sem autenticação - desenvolvimento local)
MONGODB_URI=mongodb://localhost:27017/portfolio

# Opção 2: Componentes separados (útil para configuração flexível)
# MONGODB_HOST=localhost
# MONGODB_PORT=27017
# MONGODB_DB_NAME=portfolio
# MONGODB_USERNAME=seu_usuario
# MONGODB_PASSWORD=sua_senha

# Server Configuration
PORT=3000

# CORS Configuration
FRONTEND_URL=http://localhost:4200

# Environment
NODE_ENV=development
```

### Produção

1. Copie o arquivo de exemplo para produção:
```bash
cp .env.production.example .env
```

2. Configure as variáveis para produção:
```env
# MongoDB Configuration - PRODUÇÃO

# Opção 1: URI completa com autenticação
MONGODB_URI=mongodb://usuario:senha@seu-servidor-mongodb:27017/portfolio

# Opção 2: MongoDB Atlas (recomendado)
# MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Opção 3: Componentes separados
# MONGODB_HOST=seu-servidor-mongodb.com
# MONGODB_PORT=27017
# MONGODB_DB_NAME=portfolio
# MONGODB_USERNAME=seu_usuario
# MONGODB_PASSWORD=sua_senha_super_segura

# Server Configuration
PORT=3000

# CORS Configuration
FRONTEND_URL=https://seu-dominio.com

# Environment
NODE_ENV=production
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Produção
npm start

# Importar dados iniciais
node import-db.js
```

## Estrutura das Variáveis

### MongoDB
- **MONGODB_URI**: URL completa de conexão (prioritária se definida)
- **MONGODB_HOST**: Host do servidor MongoDB
- **MONGODB_PORT**: Porta do MongoDB (padrão: 27017)
- **MONGODB_DB_NAME**: Nome do banco de dados
- **MONGODB_USERNAME**: Usuário para autenticação (opcional)
- **MONGODB_PASSWORD**: Senha para autenticação (opcional)

### Servidor
- **PORT**: Porta do servidor (padrão: 3000)
- **FRONTEND_URL**: URL do frontend para configuração CORS
- **NODE_ENV**: Ambiente (development/production)

## Autenticação MongoDB

### Desenvolvimento Local (sem autenticação)
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
```

### Servidor com Usuário/Senha
```env
# Opção 1: URI completa
MONGODB_URI=mongodb://usuario:senha@servidor:27017/portfolio

# Opção 2: Componentes separados
MONGODB_HOST=servidor
MONGODB_USERNAME=usuario
MONGODB_PASSWORD=senha
```

### MongoDB Atlas
```env
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

## APIs Disponíveis

- `GET /api/header` - Dados do cabeçalho
- `GET /api/banner` - Dados do banner
- `GET /api/aboutMe` - Dados sobre mim
- `GET /api/experience` - Dados de experiência
- `GET /api/featureProjects` - Projetos em destaque
- `GET /api/contact` - Dados de contato
