const studs = [
  { r:"SMIU-01", n:"Ali Khan", m:[[70,75,72,68,74],[65,67,70,66,69],[78,80,82,79,77],[70,72,74,71,73],[80,82,84,83,81]] },
  { r:"SMIU-02", n:"Ahmed Raza", m:[[55,58,57,56,59],[60,62,61,63,64],[65,66,68,67,69],[70,72,71,73,74],[75,77,76,78,79]] },
  { r:"SMIU-03", n:"Hassan Ali", m:[[80,82,84,83,81],[78,79,77,80,82],[85,86,88,87,84],[82,83,81,84,85],[88,90,89,87,86]] },
  { r:"SMIU-04", n:"Usman Tariq", m:[[60,62,61,63,64],[58,57,59,56,55],[65,66,68,67,69],[70,72,71,73,74],[68,67,69,66,65]] },
  { r:"SMIU-05", n:"Bilal Ahmed", m:[[45,48,47,46,39],[50,52,54,53,51],[55,57,56,58,59],[60,62,61,63,64],[65,66,68,67,69]] },
  { r:"SMIU-06", n:"Saad Khan", m:[[72,74,76,75,73],[70,71,69,68,72],[78,79,80,77,76],[75,74,73,72,71],[80,82,81,83,84]] },
  { r:"SMIU-07", n:"Zain Abbas", m:[[65,67,66,68,69],[60,62,61,63,64],[70,72,71,73,74],[68,39,67,66,65],[72,74,73,75,76]] },
  { r:"SMIU-08", n:"Ahsan Malik", m:[[55,57,56,58,59],[60,62,61,63,64],[65,66,68,67,69],[70,72,71,73,74],[75,77,76,78,79]] },
  { r:"SMIU-09", n:"Fahad Noor", m:[[48,50,49,51,52],[55,56,54,53,57],[60,62,61,63,64],[65,67,66,68,69],[70,72,71,73,74]] },
  { r:"SMIU-10", n:"Imran Sheikh", m:[[82,84,83,81,80],[78,79,77,80,82],[85,87,88,86,84],[82,83,81,84,85],[88,90,89,87,86]] },
  { r:"SMIU-11", n:"Ayesha Khan", m:[[70,75,72,68,74],[65,67,70,66,39],[78,80,82,79,77],[70,72,74,71,73],[80,82,84,83,81]] },
  { r:"SMIU-12", n:"Fatima Ali", m:[[55,58,57,56,59],[60,62,61,63,64],[30,28,35,29,32],[70,72,71,73,74],[75,77,76,78,79]] },
  { r:"SMIU-13", n:"Hina Malik", m:[[80,82,84,83,81],[78,79,77,80,82],[85,86,88,87,84],[82,83,81,84,85],[88,90,89,87,86]] },
  { r:"SMIU-14", n:"Sana Raza", m:[[60,62,61,63,64],[58,57,59,56,55],[65,66,68,67,69],[70,72,71,73,74],[38,37,36,35,34]] },
  { r:"SMIU-15", n:"Maria Noor", m:[[45,48,47,46,49],[50,52,54,53,51],[55,57,56,58,59],[60,62,61,63,64],[65,66,68,67,69]] },
  { r:"SMIU-16", n:"Zoya Khan", m:[[72,74,76,75,73],[70,71,69,68,72],[78,79,80,77,76],[75,74,73,72,71],[80,82,81,83,84]] },
  { r:"SMIU-17", n:"Noor Fatima", m:[[65,67,66,68,69],[60,62,61,63,64],[70,72,71,73,74],[68,69,67,66,65],[72,74,73,75,76]] },
  { r:"SMIU-18", n:"Zahra Abbas", m:[[55,57,56,38,59],[60,62,61,63,64],[65,66,68,67,69],[70,72,71,73,74],[75,77,76,78,79]] },
  { r:"SMIU-19", n:"Mahnoor Malik", m:[[48,50,49,51,52],[55,56,54,53,57],[60,62,61,63,64],[65,67,66,68,69],[70,72,71,73,74]] },
  { r:"SMIU-20", n:"Hira Sheikh", m:[[82,84,83,81,80],[78,79,77,80,82],[85,87,88,86,84],[82,83,81,84,85],[88,90,89,87,86]] }
];

// GENERATE CARDS
const cardsDiv = document.getElementById("cardsDiv");
studs.map(st => {
  let c = document.createElement("div");
  c.className = "card";
  c.innerHTML = `<h3>${st.n}</h3><p>${st.r}</p><button onclick="showCard('${st.r}')">View</button>`;
  cardsDiv.appendChild(c);
});

// SHOW REPORT CARD
function showCard(r) {
  let s = studs.find(st => st.r===r);
  if(!s) return;

  let totalGrand=0, obtGrand=0, pass=true;

  s.m.map((sem,i)=>{
    let semTot=0;
    sem.map((mk,j)=>{
      document.querySelector(`.s${i+1}sub${j+1}`).textContent = mk;
      semTot+=mk;
      if(mk<40) pass=false;
    });
    let semPerc = ((semTot/(sem.length*100))*100).toFixed(2);
    document.querySelector(`.s${i+1}total`).textContent = sem.length*100;
    document.querySelector(`.s${i+1}obt`).textContent = semTot;
    document.querySelector(`.s${i+1}perc`).textContent = semPerc;

    totalGrand += sem.length*100;
    obtGrand += semTot;
  });

  let finalPerc = ((obtGrand/totalGrand)*100).toFixed(2);
  let grade="F";
  if(finalPerc>=80) grade="A";
  else if(finalPerc>=70) grade="B";
  else if(finalPerc>=60) grade="C";
  else if(finalPerc>=50) grade="D";

  document.getElementById("finalSummary").innerHTML = `Final %: ${finalPerc}%<br>Grade: ${grade}<br>Status: ${pass?'PASS':'FAIL'}`;
  document.getElementById("modalBox").style.display = "block";
}

// CLOSE MODAL
function closeCard() {
  document.getElementById("modalBox").style.display = "none";
}