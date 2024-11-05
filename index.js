// run `node index.js` in the terminal

// Sample array of student objects
const students = [
  { name: "Alice", chemistry: 80, biology: 90, dob: "01-01-2000" },
  { name: "Bob", chemistry: 90, biology: 80, dob: "02-02-2000" },
  { name: "Charlie", chemistry: 85, biology: 85, dob: "01-01-2000" },
  { name: "David", chemistry: 80, biology: 90, dob: "03-03-2000" },
  { name: "Eve", chemistry: 90, biology: 80, dob: "02-02-2000" },
];

// Function to sort students based on the given rules
const sortStudents = (students) => {
  return students.sort((a, b) => {
      // Calculate total marks
      const totalA = a.chemistry + a.biology;
      const totalB = b.chemistry + b.biology;

      // First priority: total marks
      if (totalA !== totalB) {
          return totalB - totalA; // Descending order
      }

      // Second priority: biology marks
      if (a.biology !== b.biology) {
          return b.biology - a.biology; // Descending order
      }

      // Third priority: chemistry marks (not strictly necessary based on rules)
      if (a.chemistry !== b.chemistry) {
          return b.chemistry - a.chemistry; // Descending order
      }

      // Fallback: date of birth comparison
      // Convert DOB to Date object for comparison
      const dobA = new Date(a.dob.split('-').reverse().join('-'));
      const dobB = new Date(b.dob.split('-').reverse().join('-'));
      return dobA - dobB; // Ascending order for DOB
  });
};

// Sort the students
const sortedStudents = sortStudents(students);

// Print the sorted array
console.log("Sorted Students:");
sortedStudents.forEach(student => {
  console.log(`${student.name}: Chemistry: ${student.chemistry}, Biology: ${student.biology}, DOB: ${student.dob}`);
});

