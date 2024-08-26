#!/usr/bin/env sh

set -e

bun run build

cd .vuepress/dist

echo 'docs.chora.io' >> CNAME

git init
git add -A
git commit -m 'publish'

git push https://github.com/chora-io/docs master:gh-pages -f
