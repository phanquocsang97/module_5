const facilities = [
    {
        id: 1,
        name: "OCEAN SUITE",
        area: 85.8,
        cost: 2000000,
        capacity: 2,
        type: "day",
        image: "https://www.monchericruises.vn/wp-content/uploads/2020/09/4-5.jpg"
    },
    {
        id: 2,
        name: "OCEAN STUDIO",
        area: 40.1,
        cost: 1500000,
        capacity: 3,
        type: "day",
        image: "https://www.sooribali.com/img/site_images/soori-bali-accommodation-deluxe-ocean-pool-villa-02-mh.jpg"
    },
    {
        id: 3,
        name: "OCEAN DELUXE",
        area: 43.7,
        cost: 2500000,
        capacity: 2,
        type: "day",
        image: "https://sooribali.com/img/site_images/soori-bali-hotel-accommodations-deluxe-ocean-pool-villa.jpg"
    },
    {
        id: 4,
        name: "GARDEN DELUXE",
        area: 40.1,
        cost: 2700000,
        capacity: 2,
        type: "day",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/29/ad/27/bb/soori-bali-ocean-pool.jpg"
    }
]
export function getAll() {
    return facilities;
}