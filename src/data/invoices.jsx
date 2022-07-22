const invoiceListMock = [
    {
        id: 'inv_1',
        description: 'piedipiper',
        amount: {
            usd: 10,
            clp: 8000,
        },
        type: 'received',
    },
    {
        id: 'inv_2',
        description: 'piedipiper',
        amount: {
            usd: 5,
            clp: 4000,
        },
        type: 'received',
    },
    {
        id: 'inv_3',
        description: 'octopus',
        amount: {
            usd: 50,
            clp: 32000,
        },
        type: 'received',
    }];

const creditNotesListMock = [
    {
        id: 'inv_4',
        description: 'piedipiper',
        amount: {
            usd: 5,
            clp: 4000,
        },
        type: 'credit-note',
        reference: 'inv_1'
    },
    {
        id: 'inv_5',
        description: 'piedipiper',
        amount: {
            usd: 1,
            clp: 800,
        },
        type: 'credit-note',
        reference: 'inv_1'
    },
    {
        id: 'inv_6',
        description: 'piedipiper',
        amount: {
            usd: 2,
            clp: 1600,
        },
        type: 'credit-note',
        reference: 'inv_1'
    },
    {
        id: 'inv_4',
        description: 'piedipiper',
        amount: {
            usd: 5,
            clp: 4000,
        },
        type: 'credit-note',
        reference: 'inv_3'
    },
    {
        id: 'inv_5',
        description: 'piedipiper',
        amount: {
            usd: 1,
            clp: 800,
        },
        type: 'credit-note',
        reference: 'inv_2'
    },
    {
        id: 'inv_6',
        description: 'piedipiper',
        amount: {
            usd: 2,
            clp: 1600,
        },
        type: 'credit-note',
        reference: 'inv_2'
    },
];

export {invoiceListMock, creditNotesListMock}