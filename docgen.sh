#!/usr/bin/env sh

set -e

SPECS_DIR=./specs

CHORA_ADMIN_VERSION=015ffa80b358bd3e140f0ea79749b1fd1d7609c5
CHORA_EXAMPLE_VERSION=015ffa80b358bd3e140f0ea79749b1fd1d7609c5
CHORA_GOVERNOR_VERSION=015ffa80b358bd3e140f0ea79749b1fd1d7609c5
CHORA_PROPOSAL_VERSION=015ffa80b358bd3e140f0ea79749b1fd1d7609c5
CHORA_SUBJECT_VERSION=015ffa80b358bd3e140f0ea79749b1fd1d7609c5
CHORA_TOKEN_VERSION=015ffa80b358bd3e140f0ea79749b1fd1d7609c5
CHORA_VALIDATOR_VERSION=015ffa80b358bd3e140f0ea79749b1fd1d7609c5
CHORA_VESTING_VERSION=015ffa80b358bd3e140f0ea79749b1fd1d7609c5
CHORA_VOUCHER_VERSION=015ffa80b358bd3e140f0ea79749b1fd1d7609c5

CHORA_ADMIN_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_ADMIN_VERSION}/admin/spec
CHORA_EXAMPLE_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_EXAMPLE_VERSION}/example/spec
CHORA_GOVERNOR_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_GOVERNOR_VERSION}/governor/spec
CHORA_PROPOSAL_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_PROPOSAL_VERSION}/governor/spec
CHORA_SUBJECT_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_SUBJECT_VERSION}/subject/spec
CHORA_TOKEN_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_TOKEN_VERSION}/subject/spec
CHORA_VALIDATOR_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_VALIDATOR_VERSION}/validator/spec
CHORA_VESTING_URL=https://raw.githubusercontent.com/chora-io/mods/${CHORA_VESTING_VERSION}/validator/spec
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
gen_module_docs "example" $CHORA_EXAMPLE_URL
gen_module_docs "governor" $CHORA_GOVERNOR_URL
gen_module_docs "proposal" $CHORA_PROPOSAL_URL
gen_module_docs "subject" $CHORA_SUBJECT_URL
gen_module_docs "token" $CHORA_TOKEN_URL
gen_module_docs "validator" $CHORA_VALIDATOR_URL
gen_module_docs "vesting" $CHORA_VESTING_URL
gen_module_docs "voucher" $CHORA_VOUCHER_URL
