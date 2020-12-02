module.exports = {
    create: context => {
        console.log('Options: ', context.options);
        return {
        };
    },
    meta: {
        schema: [
            {
                type: 'object',
                properties: {
                    first: {
                        type: 'string',
                        default: 'Here I am !',
                    },
                    second: {
                        type: 'string',
                        default: 'Me too',
                    }
                },
                additionalProperties: false
            },
        ],
    },
};
