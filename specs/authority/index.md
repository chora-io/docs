# Overview

The `authority` module enables a network to have a dynamic authority account. The authority of the network is an account that has permission to update module parameters.

Depending on how each module is configured in a blockchain application, the authority account can have full control over module parameters (i.e. all modules are configured to use authority) or partial control over module parameters (i.e. only some modules are configured to use authority).

A network could also have multiple authority accounts depending on how the blockchain application is wired up (i.e. the application is configured to run multiple instances of the module and permissions to update module parameters are distributed among the authority accounts).

## Contents

1. [Concepts](01_concepts.md)
2. [Msg Service](02_msg.md)
3. [Query Service](03_query.md)
4. [State](04_state.md)
5. [Events](05_events.md)
