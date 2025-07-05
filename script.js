 const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

    const signInForm = document.querySelector(".sign-in-form");
    const signUpForm = document.querySelector(".sign-up-form");
    const signInMessage = document.querySelector("#signin-message");
    const signUpMessage = document.querySelector("#signup-message");

    signInForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = signInForm.querySelector('input[type="text"]').value;
      const password = signInForm.querySelector('input[type="password"]').value;

      if (username && password) {
        signInMessage.textContent = "Sign in successful!";
        signInMessage.style.color = "green";
      } else {
        signInMessage.textContent = "Please fill in all fields.";
        signInMessage.style.color = "red";
      }
    });

    signUpForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = signUpForm.querySelector('input[type="text"]').value;
      const email = signUpForm.querySelector('input[type="email"]').value;
      const password = signUpForm.querySelector('input[type="password"]').value;

      if (username && email && password) {
        signUpMessage.textContent = "Sign up successful!";
        signUpMessage.style.color = "green";
      } else {
        signUpMessage.textContent = "Please fill in all fields.";
        signUpMessage.style.color = "red";
      }
    });