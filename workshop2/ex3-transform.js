const isValidScore = (score) => {
  return typeof score === "number" && !isNaN(score) && score >= 0 && score <= 100;
};

const students = [
    {id: "1", name: "som", major: "CE", score: 85, contact:{email: "som.j@ex.com", phone: "081-xxx-xxxx"}},
    {id: "2", name: "Bas", major: "IT", score: 73, contact:{email: "Bas.j@ex.com", phone: "062-xxx-xxxx"}},
    {id: "3", name: "sam", major: "CE", score: 90, contact:{email: "sam.j@ex.com", phone: "096-xxx-xxxx"}},
    {id: "4", name: "ar", major: "IT", score: 45, contact:{email: "ar.j@ex.com", phone: "061-xxx-xxxx"}},
    {id: "5", name: "od", major: "CE", score: 65, contact:{email: "od.j@ex.com", phone: "087-xxx-xxxx"}},
    {id: "6", name: "opp", major: "CE", score: 30, contact:{email: "op.j@ex.com", phone: "086-xxx-xxxx"}},
]


const GRADE_RULES = [
  { min: 80, grade: "A" },
  { min: 75, grade: "B+" },
  { min: 70, grade: "B" },
  { min: 65, grade: "C+" },
  { min: 60, grade: "C" },
  { min: 55, grade: "D+" },
  { min: 50, grade: "D" },
  { min: 0,  grade: "F" },
];

const toGrade = (score) => {
  if (!isValidScore(score)) {
    return "คะแนนต้องอยู่ที่ 0 - 100";
  }
  const rule = GRADE_RULES.find((r) => score >= r.min);
  return rule.grade;
};

//section1

//filter
const getPassedStudents = (students) => {
     return students.filter(s => s.score >= 50);
}

//map
const getNames = (students) => {
    return students.map(s => s.name);
};

//reduce
const getTotalScore = (students) => {
    return students.reduce((sum, s) => sum + s.score, 0);
};

const getAverageScore = (students) => {
    if (students.length === 0)
        return 0;
    const total = getTotalScore(students);
    return Number((total / students.length).toFixed(2));
};

const countByGrade = (students) => {
  return students.reduce((counts, s) => {
    const grade = toGrade(s.score);
    return {
      ...counts,
      [grade]: (counts[grade] ?? 0) + 1,
    };
  }, {});   
};

const getTopStudent = (students) => {
  return students.reduce((top, current) => {
    if (top === null) return current;              
    return current.score > top.score ? current : top;
  }, null);   
};

//section2
const averagePassCE = students
    .filter((s) => s.major === "CE" && s.score >= 50)
    .map((s) => s.score)
    .reduce((sum, score, _, arr) => sum + score / arr.length, 0)

 
    console.log("คะแนนเฉลี่ย CE ที่ผ่าน:", Number(averagePassCE.toFixed(2)));


    //section3
    console.log("getName:", getNames(students));
    console.log("getPassedStudents:", getPassedStudents(students));
    console.log("getTotalScore:", getTotalScore(students));
    console.log("getAverageScore:", getAverageScore(students));
    console.log("countByGrade:", countByGrade(students));
    console.log("getTopStudent:", getTopStudent(students));
