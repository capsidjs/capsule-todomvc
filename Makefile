.PHONY: size
size:
	npm run dist
	deno run --allow-read https://deno.land/x/gzip_size@v0.3.0/cli.ts --include-original docs/todoapp.*.js

.PHONY: fmt
fmt:
	deno fmt --config deno.json

.PHONY: fmt-check
fmt-check:
	deno fmt --config deno.json --check
