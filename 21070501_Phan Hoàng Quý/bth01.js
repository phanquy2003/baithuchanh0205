
const userForm = document.getElementById('user-form');
const questionForm = document.getElementById('question-form');
const submitBtn = document.getElementById('submit-btn');
const askBtn = document.getElementById('ask-btn');


submitBtn.addEventListener('click', handleSubmit);
askBtn.addEventListener('click', handleAsk);


function handleSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name-input');
  const genderSelect = document.getElementById('gender-select');
  const hasPartnerRadio = document.getElementsByName('has-partner');
  const educationRadio = document.getElementsByName('education');

  const userData = {
    name: nameInput.value,
    gender: genderSelect.value,
    hasPartner: hasPartnerRadio[0].checked? 'No' : 'Yes',
    education: educationRadio[0].checked? 'Student' : 'Graduate'
  };

  console.log(userData);
  
}


function handleAsk(event) {
  event.preventDefault();
  const questionInput = document.getElementById('question-input');

  const question = questionInput.value;
  console.log(question);
  
}