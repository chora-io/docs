#!/usr/bin/env sh

set -e

yarn build

cd .vuepress/dist

echo 'docs.chora.io' >> CNAME

git init
git add -A
git commit -m 'publish'

git push https://github.com/choraio/docs master:gh-pages -f
