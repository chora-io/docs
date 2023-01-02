#!/usr/bin/env sh

set -e

SPECS_DIR=./specs

CHORA_CONTENT_VERSION=dd0d94b50dd400de46203d81b08a4cad0dc7ecf0
CHORA_GEONODE_VERSION=dd0d94b50dd400de46203d81b08a4cad0dc7ecf0

CHORA_CONTENT_URL=https://raw.githubusercontent.com/choraio/mods/${CHORA_CONTENT_VERSION}/content/spec
CHORA_GEONODE_URL=https://raw.githubusercontent.com/choraio/mods/${CHORA_GEONODE_VERSION}/geonode/spec

gen_module_docs() {

  rm -rf "$SPECS_DIR/$1"

  mkdir -p "$SPECS_DIR/$1"

  echo "$1 version $CHORA_CONTENT_VERSION"

  curl -o "$SPECS_DIR/$1/README.md"       -sfL "$2/README.md"
  curl -o "$SPECS_DIR/$1/01_concepts.md"  -sfL "$2/01_concepts.md"
  curl -o "$SPECS_DIR/$1/02_msg.md"       -sfL "$2/02_msg.md"
  curl -o "$SPECS_DIR/$1/03_query.md"     -sfL "$2/03_query.md"
  curl -o "$SPECS_DIR/$1/04_state.md"     -sfL "$2/04_state.md"
  curl -o "$SPECS_DIR/$1/05_events.md"    -sfL "$2/05_events.md"

}

gen_module_docs "content" $CHORA_CONTENT_URL
gen_module_docs "geonode" $CHORA_GEONODE_URL
