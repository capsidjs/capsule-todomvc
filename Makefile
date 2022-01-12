.PHONY: size
size:
	rm -rf docs
	npm run build
	deno run --allow-read https://deno.land/x/gzip_size@v0.2.3/cli.ts --include-original docs/src.*.js

