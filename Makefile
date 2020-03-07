precommit:
	npm audit fix
	npm test
	npm run lint

format:
	npm run lint

test:
	npm test