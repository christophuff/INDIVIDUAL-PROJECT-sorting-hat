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
    coven: "Plants"
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
        <h5 class="card-title">Coven:<br>${student.coven}</h5>
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


const myForm = document.querySelector('#my-form');

const createStudent = (e) => {
  e.preventDefault();

  const newStudent = {
    id: students.length + 1,
    name: document.querySelector('#student-name').value,
    coven: students[Math.floor(Math.random() * students.length)].coven,
  }
  students.unshift(newStudent);
  cardsOnDom(students);

  myForm.reset();
}

myForm.addEventListener('submit', createStudent);

const btnFilter = (e) => {
  if (e.target.id.includes('abominationFilter')) {
    const abomination = students.filter(item => item.coven.toLowerCase() === 'abomination');
    cardsOnDom(abomination);
  }
  if (e.target.id.includes('illusionsFilter')) {
    const illusions = students.filter(item => item.coven.toLowerCase() === 'illusions');
    cardsOnDom(illusions);
  }
  if (e.target.id.includes('plantsFilter')) {
    const plants = students.filter(item => item.coven.toLowerCase() === 'plants');
    cardsOnDom(plants);
  }
  if (e.target.id.includes('potionsFilter')) {
    const potions = students.filter(item => item.coven.toLowerCase() === 'potions');
    cardsOnDom(potions);
  }
  if (e.target.id.includes('bardFilter')) {
    const bard = students.filter(item => item.coven.toLowerCase() === 'bard');
    cardsOnDom(bard);
  }
  if (e.target.id.includes('oracleFilter')) {
    const oracle = students.filter(item => item.coven.toLowerCase() === 'oracle');
    cardsOnDom(oracle);
  }
  if (e.target.id.includes('healingFilter')) {
    const healing = students.filter(item => item.coven.toLowerCase() === 'healing');
    cardsOnDom(healing);
  }
  if (e.target.id.includes('constructionFilter')) {
    const construction = students.filter(item => item.coven.toLowerCase() === 'construction');
    cardsOnDom(construction);
  }
  if (e.target.id.includes('beastkeepingFilter')) {
    const beastkeeping = students.filter(item => item.coven.toLowerCase() === 'beastkeeping');
    cardsOnDom(beastkeeping);
  }
  if (e.target.id.includes('clearFilter')) {
    cardsOnDom(students);
  }
}

const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  cardsOnDom(students);

  //button filter
  document.querySelector('#btn-container').addEventListener('click', btnFilter);
}
startApp();
