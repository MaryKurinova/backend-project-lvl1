install:
	npm ci

brain-games:
	bin/brain-games.js

brain-even:
	node bin/brain-even.js

lint:
	npx eslint .

asciinema:
	asciinema rec

publish:
	npm publish --dry-run

link:
	npm link



