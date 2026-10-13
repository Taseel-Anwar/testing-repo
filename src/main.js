import './style.css'; // 🎨 Tailwind CSS styles ko load karne ke liye

// 1. Fetch API Call
const loadBtn = document.querySelector('#load-btn');

loadBtn.addEventListener('click', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res.json();
  
  document.querySelector('#user-name').innerText = `Name: ${data.name}`;
  document.querySelector('#user-email').innerText = `Email: ${data.email}`;
});

// 2. Live Input Validation
const usernameInput = document.querySelector('#username');
const errorMsg = document.querySelector('#error-msg');

usernameInput.addEventListener('input', (event) => {
  if (event.target.value.length < 3) {
    errorMsg.innerText = 'Name must be at least 3 characters long!';
  } else {
    errorMsg.innerText = '';
  }
});