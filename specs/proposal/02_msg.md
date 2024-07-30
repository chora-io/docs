# Msg Service

The `proposal` module provides a message service for interacting with the state of the module.

## Draft Definitions

`MsgSubmitProposal` - Any account can submit a governor proposal. A governor proposal will either be executed by the governor module account (given the governor module account is the authority of the network) or pending approval and execution by the authority of the network (if the governor module account is not the authority of the network).

`MsgSubmitProposalDeposit` - Any account can submit a governor proposal deposit. The deposit will be returned once the voting period has ended (unless the result of the proposal was "no with veto").

`MsgWithdrawProposal` - Only the account that submitted the proposal (the "proposer") or the authority account can withdraw a proposal.

...

`MsgSubmitVote` - Any account with voting power can vote on a proposal. Voting power is determined by the module parameters (e.g. voting power can be based on amount staked, in which any account with tokens staked on the network has voting power based on the amount staked, or voting can be restricted to governors, validators, an allowlist, etc).

`MsgUpdateVote` - The voter account can update their vote before the voting period has ended.

## Proto Definitions

~~The messages are defined in proto files available to view on [Buf Schema Registry](https://buf.build/chora/proposal).~~

<!-- listed alphabetically -->