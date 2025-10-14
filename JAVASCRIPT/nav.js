const body = document.querySelector('body');
const sideOpen = document.querySelector('.side-bar-open');
const sideClose = document.querySelector('.side-bar-close');
const nav = document.querySelector('nav');

sideOpen.addEventListener('click', () => {
  nav.classList.add('side-open-active');
});
body.addEventListener('click', (sideBar) => {
  let clickBody = sideBar.target;
  if(!clickBody.classList.contains('side-bar-open')){
    nav.classList.remove('side-open-active');
  }
});

//AOS 
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 2000, // animation speed (1 second)
    once: false     // false = repeat on scroll, true = animate only once
  });
});


//confirm password check
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const message = document.getElementById("message");

  confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value === "") {
      message.textContent = "";
      return;
    }
    if (confirmPassword.value === password.value) {
      message.textContent = "✅ Passwords match";
      message.style.color = "limegreen";
    } else {
      message.textContent = "❌ Passwords do not match";
      message.style.color = "crimson";
    }
  });


  //login
  function validateLogin() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
      }

      // Example: validation placeholder (you can connect this later to backend)
      alert("Login successful!");
      return true;
    }