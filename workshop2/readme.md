1. เขียนฟังก์ชันคำนวณคะแนนรายวิชา โดยแต่ละฟังก์ชันทำเรื่องเดียวและ คืนค่า
isValidScore(score) เช็คคะแนนว่าเป็นตัวเลขที่อยู่ในช่วง 0-100 หรือไม่
GRADE_RULES + toGrande(score) แปลงคะแนนรวมเป็นเกรด A,B+,B, ... , F 
โดยไล่เช็คจากเกณคะแนนต่ำสุดลงมา ถ้าคะแนนไม่ถูกต้องจะคืนข้อความแจ้งเตือนแทน
calculateWorkshopScore(raw, full=60, weight=20) แปลงคะแนน workshopRaw เ
ต็ม60 default ให้เป็นคะแนนเทียบสัดส่วนเต็ม 20 คะแนน 
calculateTotal() รวมคะแนน
console.table(results)  แสดงผมลัพธ์ข้อมูลเป็นตาราง
การใช้งาน 
array นร.3คน คำนวณคะแนนทั้งหมด หาเกรด แสดงผลด้วย console.table()
การทดสอบ
เทียบผลลัพธ์เมื่อเรียกฟังก์ชันแบบไม่ใส่ค่า default กับใส่ค่าตรงกับ default (ควรได้ผลเท่ากัน) และทดสอบกรณีใส่ undefined ให้พารามิเตอร์ตัวแรกเพื่อยืนยันว่า JS จะใช้ค่า default แทนโดยอัตโนมัติ

2.ร้างโครงสร้างข้อมูลทะเบียนนักศึกษา และฟังก์ชันสำหรับค้นหาและเพิ่มข้อมูล
students — array ของ object นักเรียน แต่ละคนมี id, name, major, score, และ contact (object ซ้อนที่เก็บ email/phone)
findById(student, id) — ค้นหานักเรียนจาก id ด้วย .find() คืนค่า object นักเรียนตัวแรกที่ตรงกัน หรือ undefined ถ้าไม่พบ
findByMajor(students, major) — กรองนักเรียนตามสาขา (major) ด้วย .filter() คืนค่าเป็น array
hasFailingStudent(students) — เช็คว่ามีนักเรียนคนไหนคะแนนต่ำกว่า 50 หรือไม่ ด้วย .some() คืนค่า true/false
getEmail(students, id) — ค้นหา email ของนักเรียนจาก id โดยใช้ optional chaining (?.) ป้องกัน error กรณีไม่มี contact และใช้ nullish coalescing (??) เพื่อคืนข้อความ "ไม่พบข้อมูลติดต่อ" แทนถ้าไม่เจอ
findById(students, "9999") — ใส่ id เป็น string "9999" แต่ข้อมูลจริงเก็บเป็น number ทำให้ === ไม่ match และคืน undefined (สาธิตพลาดพลั้งเรื่อง type ที่พบบ่อย)
getEmail(studentsNocontact, 7) — นักเรียนคนที่ 7 ("meme") ไม่มี field contact เลย แต่โค้ดไม่ error เพราะ optional chaining ป้องกันไว้ และคืนข้อความ fallback แทน
Spread operator (...students) — สร้าง studentsNocontact เป็น array ใหม่โดยไม่แก้ไข students เดิม (immutability) ยืนยันด้วยการเช็คความยาว array ทั้งสอง (6 vs 7 คน)

3. ใช้ map / filter / reduce สรุปข้อมูลจากทะเบียนนักศึกษา (ใช้ข้อมูลชุดเดียวกับข้อ 2 ได้)
getPassedStudents(students) — กรอง (filter) เอาเฉพาะนักเรียนที่คะแนน ≥ 50
getNames(students) — แปลง (map) array นักเรียนให้เหลือเฉพาะชื่อ
getTotalScore(students) — รวมคะแนนทั้งหมดด้วย reduce
getAverageScore(students) — คำนวณคะแนนเฉลี่ยจาก getTotalScore หารด้วยจำนวนคน (เช็คกรณี array ว่างเพื่อป้องกันหารด้วย 0) ปัดทศนิยม 2 ตำแหน่ง
countByGrade(students) — ใช้ reduce นับจำนวนนักเรียนแยกตามเกรด โดยสร้าง object ใหม่ทุกรอบด้วย spread (...counts) เพื่อไม่แก้ไข accumulator เดิมตรงๆ (immutable pattern) ผลลัพธ์เช่น {A: 2, C: 1, F: 1, ...}
getTopStudent(students) — ใช้ reduce หานักเรียนคะแนนสูงสุด โดยเริ่มจาก null แล้วเทียบทีละคน
จุดสำคัญ 
averagePassCE — สาธิตการ เชื่อม method ต่อกัน (chaining): กรองเฉพาะสาขา CE ที่ผ่าน (≥50) → ดึงคะแนนออกมา → หาค่าเฉลี่ยด้วย reduce แบบพิเศษ (หารด้วยความยาว array ทีละตัวในแต่ละรอบ แทนที่จะบวกรวมแล้วหารทีเดียว ผลลัพธ์เท่ากันแต่เขียนคนละแบบ)