#!/usr/bin/env sh

set -e

go install github.com/raviqqe/gherkin2markdown@latest

SPECS_DIR=./specs/mods

CHORA_ADMIN_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_CONTENT_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_GOVERNOR_VERSION=324de332d86a72672cd3b1eac1e716936519637b
#CHORA_PROPOSAL_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_SUBJECT_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_VALIDATOR_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_VOUCHER_VERSION=324de332d86a72672cd3b1eac1e716936519637b

gen_module_feature_docs() {

  echo "$1 version $CHORA_MODULES_VERSION"

  curl -o "$SPECS_DIR/$1/keeper.json" -sfL "https://api.github.com/repos/chora-io/mods/contents/$1/keeper"
  curl -o "$SPECS_DIR/$1/types.json" -sfL "https://api.github.com/repos/chora-io/mods/contents/$1/types/$2"

  keeper_features=$(jq -c '.[]|select(.path | endswith(".feature")).path' "$SPECS_DIR/$1/keeper.json")
  types_features=$(jq -c '.[]|select(.path | endswith(".feature")).path' "$SPECS_DIR/$1/types.json")

  for f in $keeper_features; do
    path="$SPECS_DIR/$1/keeper_$(echo "$f" | tr -d '"' | cut -d "/" -f 3)"
    curl -o "$path" -sfL "https://raw.githubusercontent.com/chora-io/mods/$3/$(echo $f | tr -d '"')"
  done

  for f in $types_features; do
    path="$SPECS_DIR/$1/types_$(echo "$f" | tr -d '"' | cut -d "/" -f 4)"
    curl -o "$path" -sfL "https://raw.githubusercontent.com/chora-io/mods/$3/$(echo $f | tr -d '"')"
  done

  readme="# Table of Contents\n\nThe following features describe the \`keeper\` and \`types\` of the module.\n\n"

  readme="${readme}## Keeper\n\n"

  for file in $(find $SPECS_DIR/"$1" -path -prune -o -name 'keeper_*.feature' | sort -t '\0' -n); do
    filename=$(echo "$file" | cut -d "." -f 2 | cut -d "/" -f 5)
    formatted=$(echo "$filename" | sed "s/_/ /g" | sed "s/keeper//g")
    readme="${readme}- [$formatted](./$filename.md)\n"
    "$GOBIN/gherkin2markdown" "$file" > "$SPECS_DIR/$1/$filename.md"
  done

  readme="${readme}\n\n## Types\n\n"

  for file in $(find $SPECS_DIR/"$1" -path -prune -o -name 'types_*.feature' | sort -t '\0' -n); do
    filename=$(echo "$file" | cut -d "." -f 2 | cut -d "/" -f 5)
    formatted=$(echo "$filename" | sed "s/_/ /g" | sed "s/types//g")
    readme="${readme}- [$formatted](./$filename.md)\n"
    "$GOBIN/gherkin2markdown" "$file" > "$SPECS_DIR/$1/$filename.md"
  done

  echo "$readme" > "$SPECS_DIR/$1/features.md"
}

gen_module_feature_docs "admin" "v1" $CHORA_ADMIN_VERSION
gen_module_feature_docs "content" "v1" $CHORA_CONTENT_VERSION
gen_module_feature_docs "governor" "v1" $CHORA_GOVERNOR_VERSION
#gen_module_feature_docs "proposal" "v1" $CHORA_PROPOSAL_VERSION
gen_module_feature_docs "subject" "v1" $CHORA_SUBJECT_VERSION
gen_module_feature_docs "validator" "v1" $CHORA_VALIDATOR_VERSION
gen_module_feature_docs "voucher" "v1" $CHORA_VOUCHER_VERSION
