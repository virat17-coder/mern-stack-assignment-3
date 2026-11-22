const marks = [78, 45, 32, 90, 65];

console.log("Original Marks:");

marks.forEach((mark) => {
  console.log(mark);
});

const passedStudents = marks.filter((mark) => mark >= 40);
const updatedMarks = marks.map((mark) => mark + 5);

function calculateAverage(studentMarks) {
  const total = studentMarks.reduce((sum, mark) => sum + mark, 0);
  return total / studentMarks.length;
}

const averageMarks = calculateAverage(marks);

console.log("Original Marks:", marks.join(", "));
console.log("Passed Students:", passedStudents.join(", "));
console.log("Updated Marks:", updatedMarks.join(", "));
console.log("Average Marks:", averageMarks);