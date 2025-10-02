#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Iniciando servidor em modo produção...');

// Verifica se existe .env para produção
if (!fs.existsSync('.env')) {
  console.log('📋 Copiando configuração de produção...');
  if (fs.existsSync('.env.production.example')) {
    fs.copyFileSync('.env.production.example', '.env');
    console.log('✅ Arquivo .env criado baseado no .env.production.example');
  } else {
    console.error('❌ Arquivo .env.production.example não encontrado!');
    process.exit(1);
  }
}

// Define NODE_ENV como production
process.env.NODE_ENV = 'production';

console.log('🌐 Configurações:');
console.log('  - Ambiente: production');
console.log('  - Arquivo: .env');
console.log('');

try {
  // Inicia o servidor
  execSync('node index.js', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Erro ao iniciar servidor:', error.message);
  process.exit(1);
}
