// Этап 1. Основы JavaScript
const students = [
  { id: 1, name: "Анна",    group: "БПИ-23", grades: [90, 85, 95] },
  { id: 2, name: "Иван",    group: "БПИ-23", grades: [55, 60, 58] },
  { id: 3, name: "Мария",   group: "БПИ-24", grades: [88, 92, 87] },
  { id: 4, name: "Пётр",    group: "БПИ-24", grades: [70, 75, 80] },
  { id: 5, name: "Ольга",   group: "БПИ-23", grades: [95, 98, 100] }
];

// Временный расчёт среднего для вывода имён и групп (этап 1)
console.log("=== Этап 1: список студентов ===");
for (const student of students) {
  const tempAvg = student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;
  let status;
  if (tempAvg >= 60) {
    status = "Сдал";
  } else {
    status = "Не сдал";
  }
  console.log(`${student.name} (${student.group}) — ${status}`);
}

// Этап 2. Функции и методы массивов
function calculateAverage(grades) {
  if (!grades || grades.length === 0) return 0;
  return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}

const getStudentStatus = (average) => (average >= 60 ? "Сдал" : "Не сдал");

const getTopStudents = (students) =>
  students
    .filter((s) => calculateAverage(s.grades) >= 85)
    .map((s) => s.name);

const getGroupAverage = (students) => {
  if (students.length === 0) return 0;
  const total = students.reduce((sum, s) => sum + calculateAverage(s.grades), 0);
  return total / students.length;
};

// Этап 3. Современный JavaScript и вывод
console.log("\n=== Этап 3: подробный вывод (шаблонные строки + деструктуризация) ===");
for (const { name, group, grades } of students) {
  const avg = calculateAverage(grades);
  const status = getStudentStatus(avg);
  console.log(`${name} | ${group} | ${avg.toFixed(1)} | ${status}`);
}

console.log(`\nСтуденты со средним баллом от 85: ${getTopStudents(students).join(", ")}`);
console.log(`Средний балл группы: ${getGroupAverage(students).toFixed(1)}`);

// Оператор spread — создаём нового студента с изменённой оценкой, не меняя исходный
console.log("\n=== Оператор spread ===");
const originalStudent = students[0];
const updatedStudent = {
  ...originalStudent,
  grades: [...originalStudent.grades, 100] // добавили оценку
};
console.log("Исходный студент:", originalStudent);
console.log("Обновлённый студент:", updatedStudent);
console.log("Исходный объект не изменился:", originalStudent.grades.length === 3);

// Дополнительное задание
console.log("\n=== Дополнительное задание: новый студент ===");
const newStudent = { id: 6, name: "Сергей", group: "БПИ-24", grades: [80, 84, 90] };
const allStudents = [...students, newStudent];
console.log("Новый список студентов:", allStudents.map((s) => s.name).join(", "));
console.log(`Новый средний балл группы: ${getGroupAverage(allStudents).toFixed(1)}`);
console.log(`Новые студенты с баллом от 85: ${getTopStudents(allStudents).join(", ")}`);
// Использованы: spread для копирования массива, filter + map для отбора и имён,
// reduce для средних значений.