const getInfo = (obj) => {
    if (!obj.hasOwnProperty(`firstName`)){
        obj.firstName = `Quan`;
    }
    if (!obj.hasOwnProperty(`degree`)){
        obj.degree = `NA`;
    }
}
const sv1 = {
    firstName : `John`,
    gender : `male`,
    degree : `Bachelor`,
    english: `English`
}

const sv2 = {
    name : `John`,
    gender: `male`,
    degree : `Bachelor`,
    english: `English`
}

getInfo(sv1);
console.log(sv1)
getInfo(sv2);
console.log(sv2)