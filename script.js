const students = [
    { roll:"SMIT-101", name:"Ali Khan", semesters:[[70,75,72,68,74],[65,67,70,66,69],[78,80,82,79,77],[70,72,74,71,73],[80,82,84,83,81]] },
    { roll:"SMIT-102", name:"Ahmed Raza", semesters:[[45,50,48,52,49],[55,57,58,56,54],[60,62,61,63,64],[65,66,68,67,69],[70,72,71,73,74]] },
    { roll:"SMIT-103", name:"Hassan Ali", semesters:[[80,82,84,83,81],[78,79,77,80,82],[85,86,88,87,84],[82,83,81,84,85],[88,90,89,87,86]] },
    { roll:"SMIT-104", name:"Usman Tariq", semesters:[[60,62,61,63,64],[58,57,59,56,55],[65,66,68,67,69],[70,72,71,73,74],[68,67,69,66,65]] },
    { roll:"SMIT-105", name:"Bilal Ahmed", semesters:[[35,40,45,42,38],[50,52,54,53,51],[55,57,56,58,59],[60,62,61,63,64],[65,66,68,67,69]] },
    { roll:"SMIT-106", name:"Saad Khan", semesters:[[72,74,76,75,73],[70,71,69,68,72],[78,79,80,77,76],[75,74,73,72,71],[80,82,81,83,84]] },
    { roll:"SMIT-107", name:"Zain Abbas", semesters:[[65,67,66,68,69],[60,62,61,63,64],[70,72,71,73,74],[68,69,67,66,65],[72,74,73,75,76]] },
    { roll:"SMIT-108", name:"Ahsan Malik", semesters:[[55,57,56,58,59],[60,62,61,63,64],[65,66,68,67,69],[70,72,71,73,74],[75,77,76,78,79]] },
    { roll:"SMIT-109", name:"Fahad Noor", semesters:[[48,50,49,51,52],[55,56,54,53,57],[60,62,61,63,64],[65,67,66,68,69],[70,72,71,73,74]] },
    { roll:"SMIT-110", name:"Imran Sheikh", semesters:[[82,84,83,81,80],[78,79,77,80,82],[85,87,88,86,84],[82,83,81,84,85],[88,90,89,87,86]] }
];

function searchResult(){
    const roll = document.getElementById("rollInput").value.trim();
    const result = document.getElementById("result");

    const student = students.find(s => s.roll === roll);

    if(!student){
        result.classList.remove("hidden");
        result.innerHTML = "<h3 style='color:red'>Record not found</h3>";
        return;
    }

    let totalMarks = 0, totalSubjects = 0, pass = true;

    const semesterHTML = student.semesters
        .map((sem, index) => {
            const semTotal = sem.reduce((a,b)=>a+b,0);
            sem.map(m => { if(m<40) pass=false; });
            totalMarks += semTotal;
            totalSubjects += sem.length;
            const percentage = (semTotal/(sem.length*100))*100;

            return `
                <div class="semester">
                    <h4>Semester ${index+1}</h4>
                    <p>Marks: ${sem.join(", ")}</p>
                    <p>Percentage: ${percentage.toFixed(2)}%</p>
                </div>
            `;
        })
        .join("");

    const finalPercentage = (totalMarks/(totalSubjects*100))*100;
    const grade = finalPercentage>=80?"A":finalPercentage>=70?"B":finalPercentage>=60?"C":finalPercentage>=50?"D":"F";

    result.classList.remove("hidden");
    result.innerHTML = `
        <h2>${student.name}</h2>
        <p><strong>Roll:</strong> ${student.roll}</p>

        ${semesterHTML}

        <hr>
        <h3>Total Percentage: ${finalPercentage.toFixed(2)}%</h3>
        <h3>Grade: ${grade}</h3>
        <h3 class="${pass?'pass':'fail'}">${pass?'PASS':'FAIL'}</h3>
    `;
}
