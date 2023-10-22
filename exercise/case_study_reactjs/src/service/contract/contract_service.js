const contracts = [
    {
        id : 1,
        contractNumber : "HD-0001",
        startDay :"2023-10-10",
        endDay : "2023-11-10",
        deposit : 1000000,
        cost : 1500000
    },
    {
        id : 2,
        contractNumber : "HD-0002",
        startDay :"2023-10-11",
        endDay : "2023-11-11",
        deposit : 1100000,
        cost : 1600000
    },
    {
        id : 3,
        contractNumber : "HD-0003",
        startDay :"2023-10-12",
        endDay : "2023-11-12",
        deposit : 1200000,
        cost : 1700000
    },
    {
        id : 4,
        contractNumber : "HD-0004",
        startDay :"2023-10-13",
        endDay : "2023-11-13",
        deposit : 1300000,
        cost : 1800000
    }
]

export function getAll() {
    return contracts;
}