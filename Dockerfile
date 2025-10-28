FROM node:18-alpine AS build
WORKDIR /app
ENV CI=true

# Copier seulement les package*.json pour tirer les dépendances dans l'image
COPY core/package*.json ./
RUN npm ci --silent

# Copier le reste du projet
COPY core/ .

RUN npm run build -- --configuration production --output-path=dist/out

EXPOSE 4200
# Si vous voulez démarrer le serveur de développement : forcer l'écoute sur 0.0.0.0
CMD ["sh", "-c", "npm run start -- --host 0.0.0.0"]
