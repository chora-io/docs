#!/usr/bin/env sh

set -e

SPECS_DIR=./specs/mods

CHORA_ADMIN_VERSION=cde4282e6ded511da449f3e908a3fbd4c2ea8601
CHORA_AGENT_VERSION=cde4282e6ded511da449f3e908a3fbd4c2ea8601
CHORA_CONTENT_VERSION=cde4282e6ded511da449f3e908a3fbd4c2ea8601
CHORA_GOVERNOR_VERSION=cde4282e6ded511da449f3e908a3fbd4c2ea8601
CHORA_PROPOSAL_VERSION=cde4282e6ded511da449f3e908a3fbd4c2ea8601
CHORA_VALIDATOR_VERSION=cde4282e6ded511da449f3e908a3fbd4c2ea8601
CHORA_VOUCHER_VERSION=cde4282e6ded511da449f3e908a3fbd4c2ea8601

CHORA_ADMIN_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_ADMIN_VERSION}/admin/spec
CHORA_AGENT_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_AGENT_VERSION}/agent/spec
CHORA_CONTENT_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_CONTENT_VERSION}/content/spec
CHORA_GOVERNOR_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_GOVERNOR_VERSION}/governor/spec
CHORA_PROPOSAL_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_PROPOSAL_VERSION}/proposal/spec
CHORA_VALIDATOR_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_VALIDATOR_VERSION}/validator/spec
CHORA_VOUCHER_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_VOUCHER_VERSION}/voucher/spec

gen_module_docs() {

  rm -rf "$SPECS_DIR/$1"

  mkdir -p "$SPECS_DIR/$1"

  echo "$1 version $CHORA_MODULES_VERSION"

  curl -o "$SPECS_DIR/$1/index.md"        -sfL "$2/README.md"
  curl -o "$SPECS_DIR/$1/01_concepts.md"  -sfL "$2/01_concepts.md"
  curl -o "$SPECS_DIR/$1/02_msg.md"       -sfL "$2/02_msg.md"
  curl -o "$SPECS_DIR/$1/03_query.md"     -sfL "$2/03_query.md"
  curl -o "$SPECS_DIR/$1/04_state.md"     -sfL "$2/04_state.md"
  curl -o "$SPECS_DIR/$1/05_events.md"    -sfL "$2/05_events.md"

}

gen_module_docs "admin" $CHORA_ADMIN_URL
gen_module_docs "agent" $CHORA_AGENT_URL
gen_module_docs "content" $CHORA_CONTENT_URL
gen_module_docs "governor" $CHORA_GOVERNOR_URL
gen_module_docs "proposal" $CHORA_PROPOSAL_URL
gen_module_docs "validator" $CHORA_VALIDATOR_URL
gen_module_docs "voucher" $CHORA_VOUCHER_URL
