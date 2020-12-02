const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/rule-with-default');

const tester = new RuleTester();

tester.run("rule-with-default", rule, {
    valid: [
        {
            code: '// Any code',
        },
        {
            code: '// With empty options',
            options: [{}],
        },
        {
            code: '// One option',
            options: [{ second: 'What ??' }],
        }
    ],
    invalid: [
    ]
});
