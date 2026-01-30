// ================= STUDENT DATA =================
var students = [
  {
    id: "SMIU-001",
    name: "Ali Khan",
    semesters: [
      [
        { subject: "Math", marks: 80 },
        { subject: "English", marks: 70 },
        { subject: "Physics", marks: 75 },
        { subject: "CS", marks: 85 },
        { subject: "Pak Studies", marks: 78 }
      ],
      [
        { subject: "Math", marks: 82 },
        { subject: "English", marks: 72 },
        { subject: "Physics", marks: 77 },
        { subject: "CS", marks: 88 },
        { subject: "Islamiat", marks: 80 }
      ],
      [
        { subject: "OOP", marks: 84 },
        { subject: "DBMS", marks: 76 },
        { subject: "OS", marks: 79 },
        { subject: "Stats", marks: 71 },
        { subject: "AI", marks: 83 }
      ],
      [
        { subject: "SE", marks: 81 },
        { subject: "CN", marks: 74 },
        { subject: "ML", marks: 78 },
        { subject: "AI", marks: 86 },
        { subject: "Ethics", marks: 80 }
      ],
      [
        { subject: "Project", marks: 90 },
        { subject: "Cyber", marks: 85 },
        { subject: "Cloud", marks: 82 },
        { subject: "Blockchain", marks: 79 },
        { subject: "Research", marks: 88 }
      ]
    ]
  }
];

// ===== COPY SAME STUDENT TO MAKE 10 STUDENTS (BASIC WAY)
for (var i = 2; i <= 10; i++) {
  var copyStudent = JSON.parse(JSON.stringify(students[0]));
  copyStudent.id = "SMIU-00" + i;
  copyStudent.name = "Student " + i;
  students.push(copyStudent);
}

// ================= SHOW STUDENT CARDS =================
var studentCards = document.getElementById("studentCards");

students.map(function (student, index) {
  studentCards.innerHTML +=
    "<div class='student-card'>" +
    "<h3>" + student.name + "</h3>" +
    "<p>ID: " + student.id + "</p>" +
    "<button onclick='showResult(" + index + ")'>View</button>" +
    "</div>";
});

// ================= SHOW REPORT =================
function showResult(index) {
  var reportBody = document.getElementById("reportBody");
  reportBody.innerHTML = "";

  var student = students[index];

  reportBody.innerHTML +=
    "<h2>" + student.name + "</h2>" +
    "<p>ID: " + student.id + "</p>";

  var grandTotal = 0;
  var grandObtained = 0;
  var finalPercentageSum = 0;

  student.semesters.map(function (semester, semIndex) {
    var semTotal = semester.length * 100;
    var semObtained = 0;

    var tableHTML =
      "<h3>Semester " + (semIndex + 1) + "</h3>" +
      "<table>" +
      "<tr><th>Subject</th><th>Marks</th></tr>";

    semester.map(function (sub) {
      semObtained = semObtained + sub.marks;

      tableHTML +=
        "<tr>" +
        "<td>" + sub.subject + "</td>" +
        "<td>" + sub.marks + "</td>" +
        "</tr>";
    });

    var percentage = (semObtained / semTotal) * 100;
    finalPercentageSum = finalPercentageSum + percentage;

    tableHTML +=
      "<tr><td>Total</td><td>" + semObtained + " / " + semTotal + "</td></tr>" +
      "<tr><td>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>" +
      "</table>";

    reportBody.innerHTML += tableHTML;

    grandTotal = grandTotal + semTotal;
    grandObtained = grandObtained + semObtained;
  });

  var finalPercentage = finalPercentageSum / 5;
  var grade = "Fail";

  if (finalPercentage >= 80) grade = "A";
  else if (finalPercentage >= 70) grade = "B";
  else if (finalPercentage >= 60) grade = "C";
  else if (finalPercentage >= 50) grade = "D";

  reportBody.innerHTML +=
    "<div class='final-result'>" +
    "<h3>Final Result</h3>" +
    "<p>Grand Total: " + grandObtained + " / " + grandTotal + "</p>" +
    "<p>Final Percentage: " + finalPercentage.toFixed(2) + "%</p>" +
    "<p>Grade: " + grade + "</p>" +
    "</div>";

  document.getElementById("reportSection").style.display = "block";
}
document.getElementById("reportSection").style.display = "block";
