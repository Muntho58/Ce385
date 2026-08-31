// //Function 3

// // //1)Function Declaration  - ประกาศแบบตั้งชื่อ
// // function add(a,b) {
// //     return a + b;
// // }

// // //2)Function Expression - เก็บ Funct ในตัวแปร
// // const subtract = function(a,b)   {
// //     return a - b;
// // }

// // //3)Arrow Function - รูปแบบสั้น ใช้น้อยสุดในโคดสมัยใหม่
// // const multiply = (a,b) => a * b;

// // console.log("add(10,3)) =", add(10,3));
// // console.log("subtract(10,3) =", subtract(10,3));
// // console.log("multipy(10,3) =", multiply(10,3));


// function createStudent(name, year = 1, isActive = true) {
//   return { name, year, isActive };   
// }

// console.log("ไม่ส่ง year        =", createStudent("สมชาย"));
// console.log("ส่งครบ            =", createStudent("สมหญิง", 3, false));
// console.log("ส่ง undefined      =", createStudent("มานี", undefined));
// console.log("ส่ง null           =", createStudent("ปิติ", null), " <-- ค่าเริ่มต้นไม่ทำงาน");
// console.log("ส่ง 0              =", createStudent("ชูใจ", 0), " <-- 0 ก็ถือว่าส่งค่ามาแล้ว");

// function sumAll(...numbers) {
//   return numbers.reduce((total, n) => total + n, 0);
// }

// console.log("\nsumAll(10, 20, 30) =", sumAll(10, 20, 30));
// console.log("sumAll()    =", sumAll(), " <-- ค่าเริ่มต้น 0 ทำให้ไม่ error");


// function formatScores(studentName, ...scores) {
//   return `${studentName}: ${scores.join(", ")}`;
// }
// console.log(formatScores("สมชาย", 78, 91, 45));

//object ซ้อนชั้น

// const course = {
//   code: "CE385",
//   instructor: { name: "สนายุ", email: "sanayu.jin@dpu.ac.th" },
//   schedule: { day: "จันทร์", room: "5-701" },
// };

// console.log("course.code        =", course.code);
// console.log("course.instructor.email =", course.instructor.email);
// console.log("course.assitant    =", course.assitant, " <-- undefiend ยังไม่ error");

// try {
//   console.log(course.assistant.name);         
// } catch (error) {
//     console.log("course.assistant.name =", error.name + ": " + error.message);
// }

// console.log("\ncourse.assistant?.name =", course.assistant?.name,"<-- ไม่ error" );
// console.log("?. กับ ?? ใช้คู่กัน     =", course.assistant?.name ?? "ยังไม่มีผู้ช่วยสอน");


//map

const students = [
  { id: "6501", name: "สมชาย",  score: 78 },
  { id: "6502", name: "สมหญิง", score: 91 },
  { id: "6503", name: "มานี",   score: 45 },
  { id: "6504", name: "ปิติ",   score: 66 },
];

function toGrade(score){
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "c";
    return "F";
}

const scores = [78, 91, 45, 66];
const grades = scores.map((score) => toGrade(score));
console.log("scores =", scores);
console.log("grades =", grades);
console.log("ต้นฉบับ =", scores, "<-- map ไม่แก้ต้นฉบับ");

const summary = students.map((student) => ({
  id: student.id,
  name: student.name,
  grade: toGrade(student.score),
}));
console.log("\nแปปลงเป็นรูปแบบที่จะส่งออก API:");
console.log(summary);

const forgot = scores.map((score) => { toGrade(score); });
console.log("\nลืม return =", forgot, " <-- ได้ undefined ทั้งหมด");