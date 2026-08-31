//section1
const isValidScore = (score) => {
  return typeof score === "number" && !isNaN(score) && score >= 0 && score <= 100;
};

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

function calculateWorkshopScore(raw, full = 60, weight = 20) {
  return (raw / full) * weight;
}

const calculateTotal = (workshop, attendance, project, midterm, final) => {
  return workshop + attendance + project + midterm + final;
};

function printTable(data) {
  if (data.length === 0) return;
  const headers = Object.keys(data[0]);
  const colWidths = headers.map((h) =>
    Math.max(h.length, ...data.map((row) => String(row[h]).length))
  );
  const printRow = (row) =>
    "| " + row.map((cell, i) => String(cell).padEnd(colWidths[i])).join(" | ") + " |";
  const separator = "+-" + colWidths.map((w) => "-".repeat(w)).join("-+-") + "-+";

  console.log(separator);
  console.log(printRow(headers));
  console.log(separator);
  data.forEach((row) => console.log(printRow(headers.map((h) => row[h]))));
  console.log(separator);
}

//section2
const students = [
  { name: "som", workshopRaw: 60, attendance: 7, project: 17, midterm: 14, final: 15 },
  { name: "aom", workshopRaw: 40, attendance: 8, project: 18, midterm: 19, final: 30 },
  { name: "kar", workshopRaw: 30, attendance: 9, project: 20, midterm: 12, final: 25 },
];

const results = students.map((s) => {
  const workshopScore = calculateWorkshopScore(s.workshopRaw);
  const total = calculateTotal(workshopScore, s.attendance, s.project, s.midterm, s.final);
  const grade = toGrade(total);

  return {
    "Name": s.name,
    "WS_raw": s.workshopRaw,
    "WS_score": workshopScore.toFixed(2),
    "Attend": s.attendance,
    "Project": s.project,
    "Midterm": s.midterm,
    "Final": s.final,
    "Total": total.toFixed(2),
    "Grade": grade,
  };
});

console.table(results)  

//section3
const scoreA = calculateWorkshopScore(48);
const scoreB = calculateWorkshopScore(48, 60, 20);

console.log("scoreA (ใช้ default):", scoreA);
console.log("scoreB (ใส่ค่าตรงกับ default):", scoreB);
console.log("scoreA === scoreB ?", scoreA === scoreB);

const scoreC = calculateWorkshopScore(48, undefined, 25);
console.log("scoreC (full=undefined, weight=25):", scoreC);