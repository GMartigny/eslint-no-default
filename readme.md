# eslint-no-default

This repository is aimed at showing the different behavior of `eslint` when populating default values of custom rules.

To reproduce, clone this repo and run

    npm test

This should output more details in the console like so

    Options:  [] <== Why empty ?
        √ // Any code
    Options:  [ { first: 'Here I am !', second: 'Me too' } ]
        √ // With empty options
    Options:  [ { second: 'What ??', first: 'Here I am !' } ]
        √ // One option

Here, in my opinion, it shows that with the same rule schema, `eslint` doesn't have the same behavior when no options are specified to the rule.
