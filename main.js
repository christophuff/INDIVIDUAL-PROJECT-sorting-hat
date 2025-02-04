const students = [
  {
    id: 1,
    name: "Amity",
    coven: "Abomination"
  },
  {
    id: 2,
    name: "Gus",
    coven: "Illusions"
  },
  {
    id: 3,
    name: "Willow",
    coven: "Plant"
  },
  {
    id: 4,
    name: "Boscha",
    coven: "Potions"
  },
  {
    id: 5,
    name: "Raine",
    coven: "Bard"
  }, 
  {
    id: 6,
    name: "Prim",
    coven: "Oracle"
  },
  {
    id: 7,
    name: "Hettie",
    coven: "Healing"
  },
  {
    id: 8,
    name: "Mason",
    coven: "Construction"
  },
  {
    id: 9,
    name: "Xane",
    coven: "Beastkeeping"
  },
]

const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}


//SHOW STUDENTS
const cardsOnDom = (array) => {
  let cardString = "";

  array.forEach((student) =>  {
    cardString += `
    <div class="card col-sm-4 ${student.coven.toLowerCase()}">
      <div class="card-header">
        ${student.name}
      </div>
      <div class="card-body">
        <img src="images/${student.coven.toLowerCase()}.jpg" class="card-img-top" alt="${student.coven} logo">
        <h5 class="card-title">Coven: ${student.coven}</h5>
        <button class="btn btn-danger" id="expell--${student.id}">Expell</button>
      </div>
    </div>
   `
  });    
  renderToDom('#first-years-container', cardString);
}

const expelledCard = (array) => {
  let cardString = '';

  array.forEach((expelled) => {
    cardString += `
      <div class="card expelled-card">
        <img src="images/emperor.png" class="card-img-top" alt="emperor's sigil">
        <div class="card-body">
          <p class="card-text">${expelled.name} is now a Wild Witch and is wanted by the Emperor's Coven.</p>
        </div>
      </div>
    `
  })
  renderToDom('#expelled-container', cardString);
}

// cardsOnDom(students);



// EXPELL STUDENTS

const firstYears = document.querySelector('#first-years-container');

firstYears.addEventListener('click', (e) => {
  if (e.target.id.toLowerCase().includes('expell')){
    const [, id] = e.target.id.split("--");
    const index = students.findIndex(item => item.id === Number(id));
    const expelledStudent = students.splice(index, 1);
    cardsOnDom(students);
    expelledCard(expelledStudent);
  }
});


const applyBtn = document.querySelector('#apply-btn');
const heroSection = document.querySelector('#hero');

applyBtn.addEventListener('click', () => {
  heroSection.innerHTML = `

    <h3>Enter Your Name Below And Try Out A New Coven<h3>
    <form class="row">
      <div class="col" id="form-container">
          <input type="text" class="form-control" id="input-student" placeholder="Enter Your Name Here"></input>
          <input type="submit" class="btn btn-primary" id="submit-btn"> 
      </div>
    </form>
  `
  cardsOnDom(students);
});

const newStudent = document.querySelector('#form-container');

