.PHONY: size
size:
	rm -rf docs
	npm run build
	deno run --allow-read https://deno.land/x/gzip_size@v0.3.0/cli.ts --include-original docs/todoapp.*.js

