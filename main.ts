#!/usr/bin/env -S deno run --allow-all
import "npm:zx@7.1.1/globals";

await $`echo "Hello, world!"`.pipe($`wc -c`);
