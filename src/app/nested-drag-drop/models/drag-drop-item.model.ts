export interface Item {
    uId: string;
    name: string;
    children: Item[];
}

export const Data: Item[] = [
    {
        uId: '1',
        name: 'Parent 1',
        children: [
            {
                uId: '1.1',
                name: 'Parent 1 - 1',
                children: [
                    {
                        uId: '1.1.1',
                        name: 'Parent 1 - 1 -1',
                        children: []
                    }
                ]
            }
        ]
    },
    {
        uId: '2',
        name: 'Parent 2',
        children: [
            {
                uId: '2.1',
                name: 'Parent 2 - 1',
                children: [
                    {
                        uId: '2.1.1',
                        name: 'Parent 3 - 1 -1',
                        children: []
                    }
                ]
            }
        ]
    },
    {
        uId: '3',
        name: 'Parent 3',
        children: []
    }
];
