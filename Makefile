precommit:
	npm audit
	npm test
	npm run lint

format:
	npm run lint

test:
	npm test