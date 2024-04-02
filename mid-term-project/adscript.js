// Function to start the game
function startGame() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('game-page').style.display = 'block';
    displayScenario(0);
  }
  
// Initialize variables to store user choices
let choices = {};

// Define scenarios and options
const scenarios = [
  {
    scenario: "You're tasked with leading a group on a quest. Do you:",
    image:"https://i.pinimg.com/564x/5d/59/af/5d59afe836c3c553f4cf136121fc0a73.jpg",
    options: {
      a: "Collaborate with the group, encouraging everyone's input and fostering teamwork ",
      b: "Take charge, giving clear orders and directions "
    }
  },
  {
    scenario: "You encounter two characters engaged in a heated argument. Do you:",
    image: "https://i.pinimg.com/564x/2e/db/6c/2edb6c4da9ff311c42849f5adccf9b94.jpg",
    options: {
      a: "Intervene directly to assert authority and resolve the conflict ",
      b: "Listen empathetically to both sides and facilitate a compromise "
    }
  },
  
  {
    scenario: "Faced with a complex problem, do you:",
    image:"https://i.pinimg.com/564x/91/1b/60/911b60e0343a4fdacfa1b473503cbf58.jpg",
    options: {
      a: " Analyze the situation logically and devise a strategic plan",
      b: " Trust your intuition and consider the emotional implications of your decisions"
    }
  },
  {
    scenario: "Feeling drained and exhausted, do you:",
    image:"https://i.pinimg.com/564x/cf/e0/10/cfe010aa7d80055c7c7a77b1b46b887d.jpg",
    options: {
      a: " Push through, focusing on achieving goals and objectives",
      b: " Take time to rest and nurture yourself, prioritizing self-care and well-being "
    }
  },
  {
    scenario: "At a social gathering, you notice someone sitting alone looking sad. Do you: ",
    image:"https://i.pinimg.com/236x/01/e1/fb/01e1fb3670a0fef20b7de4caccde647a.jpg",
    options: {
      a: "Approach them with empathy, offering a listening ear and emotional support",
      b: "Approach them directly and offer practical solutions to their problems"
    }
  },
  {
    scenario: "Faced with a career opportunity, do you: ",
    image:"https://i.pinimg.com/236x/7d/49/de/7d49de4819ddf48f20739a7f75a5bb63.jpg",
    options: {
      a: "Choose a career path that aligns with your passions and values, even if it's less lucrative ",
      b: "Pursue a career path that offers financial stability and advancement opportunities  "
    }
  },
  {
    scenario: "Your child is upset after a disagreement with a friend. Do you: ",
    image:"https://i.pinimg.com/236x/4f/71/b2/4f71b222490045065f772915aa85b950.jpg",
    options: {
      a: "Encourage them to toughen up and move on from the situation ",
      b: "Comfort them with hugs and reassurance, helping them process their emotions"
    }
  },
  {
    scenario: "You're faced with a disagreement with a friend. Do you:",
    image:"https://imgs.search.brave.com/I4MZ0FKMywBKR8p2EykSsI6biTGI4NvMV8mz53I_a9w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90cmli/dW5lb25saW5lbmcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA5L2ZyaWVu/ZHMuanBn",
    options: {
      a: "Stand your ground and assert your viewpoint, even if it leads to conflict  ",
      b: "Comfort them with hugs and reassurance, helping them process their emotions Seek to find common ground and compromise, prioritizing harmony in the relationship"
    }
  },
  {
    scenario: "You're setting fitness goals for yourself. Do you:",
    image:"https://imgs.search.brave.com/GFA1z50WpmzNyhJZWDdFTB6LBaEh44edC-TzDRgbrZ8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aGVsbG9teXlvZ2Eu/Y29tL2Jsb2cvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTEv/WW9nYS12cy1HeW0t/V29ya291dC02OTZ4/MzYyLndlYnA",
    options: {
      a: " Focus on holistic well-being, incorporating practices like yoga and meditation for mind-body balance",
      b: " Focus on strength and endurance training, pushing yourself to achieve physical milestones"
    }
  },
  {
    scenario: "You encounter a situation where someone is being unfairly treated. Do you: ",
    image:"https://imgs.search.brave.com/UdNDg8JVQKFV5_FazBgTTN9PuqTqqNxWQPbyNwMmLZg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGF0b2Ntcy1hc3Nl/dHMuY29tLzIzNDI4/LzE3MDkzMTMzODQt/dW5mYWlyLXRyZWF0/bWVudC1hdC13b3Jr/LmpwZw",
    options: {
      a: "Advocate for the victim's rights and support them emotionally through the process",
      b: " Take immediate action to confront the perpetrator and rectify the situation"
    }
  },

];

// Function to display scenario and options
function displayScenario(index) {
  const scenarioDiv = document.getElementById('scenario');
  const optionsDiv = document.getElementById('options');
  const scenario = scenarios[index];
  scenarioDiv.innerHTML = `<img src="${scenario.image}" alt="Scenario Image" style="width: 100%; max-width: 500px;">`;
    
  scenarioDiv.innerHTML += `<p>${scenario.scenario}</p>`;
  
  optionsDiv.innerHTML = '';
  for (const option in scenario.options) {
      optionsDiv.innerHTML += `<button onclick="selectOption('${option}')">${scenario.options[option]}</button>`;
  }
}

// Function to select an option
function selectOption(option) {
  const currentIndex = Object.keys(choices).length;
  choices[currentIndex] = option;
  if (currentIndex < scenarios.length - 1) {
    displayScenario(currentIndex + 1);
  } else {
    displayResult();
  }
}

// Function to display final result
function displayResult() {
    const gamePage = document.getElementById('game-page');
  const resultPage = document.getElementById('result-page');
  const resultDiv = document.getElementById('result');
  const resultText = document.getElementById('result-text');
  const resultImage = document.getElementById('result-image');
  let masculineEnergy = 0;
  let feminineEnergy = 0;
  for (const choice in choices) {
    if (choices[choice] === 'a') {
      masculineEnergy++;
    } else if (choices[choice] === 'b') {
      feminineEnergy++;
    }
  }
  if (masculineEnergy > feminineEnergy) {
    resultDiv.textContent = "You are in your masculine energy!";
    var img = document.createElement('img');
    resultDiv.appendChild(document.createElement('br'));
    img.src = 'https://modernmenscorner.com/wp-content/uploads/2023/03/masculine-traits.jpg'; 
    img.width = 500;
    img.height = 400;
    resultDiv.appendChild(img);
    
    } else if (feminineEnergy > masculineEnergy) {
    resultDiv.textContent= "You are in your feminine energy!";
    var img = document.createElement('img');
    resultDiv.appendChild(document.createElement('br'));
    img.src = 'https://i.etsystatic.com/35707224/r/il/3fd5db/5330604949/il_1140xN.5330604949_ztma.jpg'; 
    img.width = 400;
    img.height = 500;
    resultDiv.appendChild(img);

    
  } else {
    resultDiv.textContent = "You are balanced between masculine and feminine energy!";
    var img = document.createElement('img');
    resultDiv.appendChild(document.createElement('br'));
    img.src = 'https://i.pinimg.com/originals/7c/9f/77/7c9f77ba8a7572ee370293b8529eabee.jpg'; 
    img.width = 400;
    img.height = 500;
    resultDiv.appendChild(img);

  }
  gamePage.style.display = 'none';
  resultPage.style.display = 'block';
  
}

// Display first scenario when page loads
displayScenario(0);
