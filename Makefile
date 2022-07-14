.DEFAULT_GOAL:=help
SHELL:=/bin/bash

.PHONY: init build test start
init: ## Initialize the repository
	yarn install
	yarn run build

build: ## Build the application
	yarn run build

test: ## Run tests for the application
	yarn test

start: ## Start the server
	yarn start

.PHONY: help
help: ## Display this help message
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)