# Msg Service

The `governance` module provides a message service for interacting with the state of the module.

## Proto Definitions

~~The messages are defined in proto files available to view on [Buf Schema Registry](https://buf.build/chora/governance).~~

<!-- listed alphabetically -->

`MsgUpdateParameters` - Only the configured authority account can update module parameters.

...

`MsgCreateGovernor` - Any account can create (and therefore become) a governor. A governor can receive delegations from any account. If rewards are enabled, a governor can receive rewards that are either minted by the network or withdrawn from an account managed by the network. A governor can manage their own commission rates but only within the parameters defined by the network.

`MsgRetireGovernor` - A governor can retire from their position at any time, forfeiting their voting power and releasing their delegations. If there are any unclaimed rewards remaining in the governor account, the rewards will be automatically transferred from the governor account to the owner account.

`MsgRemoveGovernor` - Any governor account can be removed through network governance, enabling the network to remove a governor by force if necessary. Any unclaimed rewards can be sent to the owner account, sent to the community spending pool, or burned upon removal. 

...

`MsgSubmitProposal` - Any account can submit a governance proposal. A governance proposal will either be executed by the governance module account (given the governance module account is the authority of the network) or pending approval and execution by the authority of the network (if the governance module account is not the authority of the network).

`MsgSubmitProposalDeposit` - Any account can submit a governance proposal deposit. The deposit will be returned once the voting period has ended (unless the result of the proposal was "no with veto").

`MsgWithdrawProposal` - Only the account that submitted the proposal (the "proposer") or the authority account can withdraw a proposal.

...

`MsgSubmitVote` - Any account with voting power can vote on a proposal. Voting power is determined by the module parameters (e.g. voting power can be based on amount staked, in which any account with tokens staked on the network has voting power based on the amount staked, or voting can be restricted to governors, validators, an allowlist, etc).

`MsgUpdateVote` -
