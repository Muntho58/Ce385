//section1
const students = [
    {id: 1, name: "som", major: "CE", score: 85, contact:{email: "som.j@ex.com", phone: "081-xxx-xxxx"}},
    {id: 2, name: "Bas", major: "IT", score: 73, contact:{email: "Bas.j@ex.com", phone: "062-xxx-xxxx"}},
    {id: 3, name: "sam", major: "CE", score: 90, contact:{email: "sam.j@ex.com", phone: "096-xxx-xxxx"}},
    {id: 4, name: "ar", major: "IT", score: 45, contact:{email: "ar.j@ex.com", phone: "061-xxx-xxxx"}},
    {id: 5, name: "od", major: "CE", score: 65, contact:{email: "od.j@ex.com", phone: "087-xxx-xxxx"}},
    {id: 6, name: "opp", major: "CE", score: 30, contact:{email: "op.j@ex.com", phone: "086-xxx-xxxx"}},
]

//section2
const findById = (student, id) => {
    return student.find(s => s.id === id);
};

const findByMajor = (students, major) => {
    return students.filter(s =>s.major === major );
};

const hasFailingStudent = (students) => {
    return students.some(s => s.score < 50);
};

const getEmail = (students, id) => {
    const student = findById(students, id);
    return student?.contact?.email?? "ไม่พบข้อมูลติดต่อ"
};

//section3

const studentsNocontact = [
    ...students,
    {id: 7, name: "meme", major: "IT", score: 55},
];

console.log("findById(9999):", findById(students, "9999"));
console.log("getEmail(9999):", getEmail(students, "9999"));
console.log("getEmail(7):", getEmail(studentsNocontact,7));
console.log("student เดิมมี 6 คน:", students.length)
console.log("studentNocontact มี 7 คน:", studentsNocontact.length);