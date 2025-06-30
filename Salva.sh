#!/bin/bash

# Ativa salvamento de credenciais
git config --global credential.helper store

# CONFIGURAÇÕES
REPO_URL="https://github.com/Gyorge-Escola/Gyorge-Escola.github.io.git"
CLONE_DIR="."
GIT_NAME="gyorge-escola"
GIT_EMAIL="gyorge.moreira@escola.pr.gov.br"

# CLONAR SE NÃO EXISTIR
if [ ! -d "$CLONE_DIR" ]; then
    git clone "$REPO_URL"
fi

cd "$CLONE_DIR" || exit

# CONFIGURAR GIT (apenas uma vez)
git config user.name "$GIT_NAME"
git config user.email "$GIT_EMAIL"
git config credential.helper store

# LOOP INFINITO A CADA 1 MINUTO
while true; do
    git add .
    
    TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
    git commit -m "Auto commit em $TIMESTAMP" 2>/dev/null

    git push origin main

    echo "Commit feito em $TIMESTAMP"
    sleep 60
done

