let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
// Yêu cầu 1 :

const highCourse = courses.filter(courses => courses.rating >= 4);
highCourse.forEach(courses => {
    console.log(`Title : ${courses.title}, Rating : ${courses.rating}`)
});
//
// // Yêu cầu 2 :

const lowCourse = courses.filter(courses => courses.rating < 4);
const formatCourse = lowCourse.map(courses => `${courses.id} - ${courses.title} - ${courses.rating}`)
formatCourse.forEach(courses => {
    console.log(courses);
})

// Yêu cầu 3 :
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

const newCourse = [...courses, ...addedCourses];
newCourse.forEach(newCourse => {
    console.log(newCourse)
});