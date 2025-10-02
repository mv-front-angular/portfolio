# 🚀 Guia de Deploy - Portfolio

## 📋 Configurações Realizadas

### Frontend (Angular)
- ✅ **Desenvolvimento**: `http://localhost:3000/api`
- ✅ **Produção**: `https://seu-backend-servidor.com/api` (atualize com sua URL real)

### Backend (Node.js + MongoDB)
- ✅ **CORS configurado** para GitHub Pages
- ✅ **Variáveis de ambiente** configuradas
- ✅ **Scripts de produção** criados

## 🔧 Configuração para Produção

### 1. MongoDB (Escolha uma opção)

#### Opção A: MongoDB Atlas (Recomendado)
1. Crie uma conta em [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Crie um cluster gratuito
3. Configure usuário e senha
4. Adicione IP do seu servidor às regras de acesso
5. Copie a connection string

#### Opção B: MongoDB Self-hosted
1. Instale MongoDB no seu servidor
2. Configure autenticação se necessário

### 2. Backend - Configuração de Ambiente

```bash
cd backend
cp ../production-env-example.txt .env
```

Edite o arquivo `.env` com suas configurações reais:

```env
# Production Environment Configuration
NODE_ENV=production
PORT=3000

# MongoDB Atlas
MONGODB_URI=mongodb+srv://SEU_USUARIO:SUA_SENHA@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
MONGODB_DB_NAME=portfolio
MONGODB_USERNAME=seu_usuario
MONGODB_PASSWORD=sua_senha

# Frontend URL
FRONTEND_URL=https://mv-front-angular.github.io
```

### 3. Frontend - Atualizar URL da API

Edite `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://SUA-URL-DO-BACKEND.com/api' // Substitua pela URL real
};
```

## 🚀 Deploy

### Backend
1. **Importe os dados para produção:**
   ```bash
   cd backend
   npm run setup:prod  # Copia configurações
   ./import-data.sh    # Importa dados para MongoDB
   ```

2. **Inicie em produção:**
   ```bash
   npm run prod
   ```

### Frontend
1. **Build de produção:**
   ```bash
   ng build --prod
   ```

2. **Deploy no GitHub Pages:**
   ```bash
   npm run deploy
   ```

## 🔄 Fluxo de Desenvolvimento

### Local (Desenvolvimento)
- **Frontend**: `http://localhost:4200`
- **Backend**: `http://localhost:3000/api`
- **MongoDB**: `mongodb://localhost:27017/portfolio`

### Produção
- **Frontend**: `https://mv-front-angular.github.io/portfolio/`
- **Backend**: `https://sua-url-backend.com/api`
- **MongoDB**: MongoDB Atlas ou servidor próprio

## 📝 Scripts Disponíveis

### Backend
```bash
npm run dev      # Desenvolvimento com nodemon
npm run start    # Produção simples
npm run prod     # Produção com configurações automáticas
npm run setup:prod # Copia arquivo de configuração
```

### Frontend
```bash
ng serve         # Desenvolvimento
ng build --prod  # Build de produção
npm run deploy   # Deploy no GitHub Pages
```

## ⚠️ Importante

1. **Nunca commite** arquivos `.env` com credenciais reais
2. **Atualize** a URL da API no `environment.prod.ts`
3. **Configure** as variáveis de ambiente no servidor de produção
4. **Teste** a conexão antes do deploy final

## 🔍 Verificação

Após o deploy, verifique:
- ✅ Frontend carregando em `https://mv-front-angular.github.io/portfolio/`
- ✅ API respondendo corretamente
- ✅ CORS permitindo requests do GitHub Pages
- ✅ MongoDB conectado e dados disponíveis
