DOCKER_COMPOSE = docker compose -p portfolio -f docker-base/docker-compose.yml


help: ## Affiche l'aide (cibles avec description)
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

run: ## Démarrer les services (détaché)
	@echo "Starting Docker Compose services..."
	$(DOCKER_COMPOSE) up -d

down: ## Arrêter et supprimer les services et volumes
	@echo "Stopping and removing Docker Compose services..."
	$(DOCKER_COMPOSE) down -v

restart: ## Redémarrer un service: make restart service=<nom_du_service>
	@if [ -z "$(service)" ]; then \
		echo "Please specify a service to restart, e.g., make restart service=web"; \
	else \
		$(DOCKER_COMPOSE) restart $(service); \
	fi

install: ## Construire / installer les images (alias build)
	@echo "Building images..."
	$(DOCKER_COMPOSE) build

stop: ## Stopper les conteneurs
	@echo "Stopping containers..."
	$(DOCKER_COMPOSE) stop

logs: ## Suivre les logs (tail par défaut 100)
	$(DOCKER_COMPOSE) logs --tail=100 -f

ps: ## Lister les conteneurs
	$(DOCKER_COMPOSE) ps

cli: ## Ouvrir un shell dans un conteneur: make cli SERVICE=<service> (défaut: web)
	$(DOCKER_COMPOSE) exec app sh
