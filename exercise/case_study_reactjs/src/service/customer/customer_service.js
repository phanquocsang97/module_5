const typeCustomer = ["Member", "Silver", "Gold", "Platinum", "Diamond"];
const gender = ["Men", "Women","Lgbt"];
const customers = [
    {
        id :1,
        name : "Nguyễn Văn A",
        dayOfBirth : "1997-03-10",
        gender : gender[0],
        identity : "012345678",
        phoneNumber : "0901969897",
        email : "vana@gmail.com",
        typeCustomer : typeCustomer[4],
        address : "Huế"
    },
    {
        id :2,
        name : "Nguyễn Văn B",
        dayOfBirth : "1998-03-11",
        gender : gender[0],
        identity : "087654321",
        phoneNumber : "0123456789",
        email : "vanb@gmail.com",
        typeCustomer : typeCustomer[3],
        address : "Đà Nẵng"
    },
    {
        id :3,
        name : "Nguyễn Thị C",
        dayOfBirth : "2001-04-10",
        gender : gender[1],
        identity : "012378945",
        phoneNumber : "0234567891",
        email : "thic@gmail.com",
        typeCustomer : typeCustomer[2],
        address : "Hà Nội"
    },
    {
        id :1,
        name : "Nguyễn Văn D",
        dayOfBirth : "2002-11-11",
        gender : gender[2],
        identity : "098712345",
        phoneNumber : "0345678912",
        email : "vand@gmail.com",
        typeCustomer : typeCustomer[1],
        address : "Sài Gòn"
    }
]
export function getAll() {
    return customers;
}