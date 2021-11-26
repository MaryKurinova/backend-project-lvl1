install:
	npm ci

brain-games:
	bin/brain-games.js

lint:
	npx eslint .

publish:
	npm publish --dry-run

link:
	npm link



