#!/usr/bin/env sh

set -e

SPECS_DIR=./specs/mods

CHORA_ADMIN_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_CONTENT_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_GOVERNOR_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_PROPOSAL_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_SUBJECT_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_VALIDATOR_VERSION=324de332d86a72672cd3b1eac1e716936519637b
CHORA_VOUCHER_VERSION=324de332d86a72672cd3b1eac1e716936519637b

CHORA_ADMIN_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_ADMIN_VERSION}/admin
CHORA_CONTENT_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_CONTENT_VERSION}/content
CHORA_GOVERNOR_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_GOVERNOR_VERSION}/governor
CHORA_PROPOSAL_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_PROPOSAL_VERSION}/proposal
CHORA_SUBJECT_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_SUBJECT_VERSION}/subject
CHORA_VALIDATOR_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_VALIDATOR_VERSION}/validator
CHORA_VOUCHER_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_VOUCHER_VERSION}/voucher

gen_module_docs() {

  rm -rf "$SPECS_DIR/$1"

  mkdir -p "$SPECS_DIR/$1"

  echo "$1 version $CHORA_MODULES_VERSION"

  curl -o "$SPECS_DIR/$1/index.md"        -sfL "$2/spec/README.md"
  curl -o "$SPECS_DIR/$1/01_concepts.md"  -sfL "$2/spec/01_concepts.md"
  curl -o "$SPECS_DIR/$1/02_msg.md"       -sfL "$2/spec/02_msg.md"
  curl -o "$SPECS_DIR/$1/03_query.md"     -sfL "$2/spec/03_query.md"
  curl -o "$SPECS_DIR/$1/04_state.md"     -sfL "$2/spec/04_state.md"
  curl -o "$SPECS_DIR/$1/05_events.md"    -sfL "$2/spec/05_events.md"

}

gen_module_docs "admin" $CHORA_ADMIN_URL
gen_module_docs "content" $CHORA_CONTENT_URL
gen_module_docs "governor" $CHORA_GOVERNOR_URL
gen_module_docs "proposal" $CHORA_PROPOSAL_URL
gen_module_docs "subject" $CHORA_SUBJECT_URL
gen_module_docs "validator" $CHORA_VALIDATOR_URL
gen_module_docs "voucher" $CHORA_VOUCHER_URL
