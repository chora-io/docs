# Concepts

## Admin

The admin is the account that has permission to update module parameters. Module parameters define the settings of the module. A simple blockchain application configuration would use the same account as the admin for all of its modules, in which case the admin is "the network admin" (see [admin](../admin/)).

## Governor

Any account can register as a governor. A governor acts as a representative of the network, receiving delegations from other accounts and participating in network governance as a governor. A governor may receive rewards depending their status and the set module parameters.

A governor can be "active" or "inactive" depending on the criteria defined by the module parameters. An "active" governor is a governor that has voting power and may or may not receive rewards whereas as an "inactive" governor is a governor that does not have voting power and does not receive rewards. 

## Delegator

A delegator is an account that delegates voting power to a governor. To delegate voting power to a governor, a delegator must have tokens locked up in the network. A delegator has the option to vote independently, cancelling out their delegated votes. A delegator may also earn rewards and be subject to penalty depending on set parameters and the actions of the governor.
