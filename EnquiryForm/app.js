const submit = `<div class="btn btn__submit btn--0">Submit</div>`;

document.querySelector(".btn__start").addEventListener("click", (e) => {
  document.querySelector(".container__form").classList.add("active");
  document.querySelector(".btn__start").classList.add("inactive");
});

const formElement = () => {
  const arrows = document.querySelectorAll(".btn__next");

  arrows.forEach((el) => {
    el.addEventListener("click", () => {
      const input = el.previousElementSibling;
      const parent = el.parentElement;
      const nextForm = parent.nextElementSibling;
      console.log(input);

      if (
        (input.type === "text" && validateName(input)) ||
        input.classList.contains("icon__container") ||
        input.classList.contains("question")
      ) {
        nextFormElement(parent, nextForm);
      } else if (input.type === "texcheckbox") {
        nextFormElement(parent, nextForm);
      }

      if (nextForm.classList.contains("container__form--familyMembers")) {
        const checkbox = document.querySelectorAll(".checkbox");
        console.log(checkbox);
        checkbox.forEach((check) => {
          console.log(check);
          check.addEventListener("click", () => {
            const checkboxTicked = check.checked;
            console.log(checkboxTicked);
            if (checkboxTicked) {
              const checkInput =
                check.parentElement.parentElement.parentElement
                  .nextElementSibling;
              checkInput.classList.remove("inactive");
            }
          });
        });
      }
    });
  });
};

formElement();

const nextFormElement = (parent, nextForm) => {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
};

const checkBoxIsChecked = (checkbox) => {
  checkbox.forEach((el) => {
    if (el.checked) {
      console.log("pass");
    } else {
      console.log("failed");
    }
  });
};

const validateName = (name) => {
  // console.log(name);
  var regex = /^[a-zA-Z ]+$/;
  if (regex.test(name.value)) {
    //  console.log("true");
    return true;
  } else {
    document.querySelector(".container__form--name").style.border =
      "5px solid #f21a37";
    return false;
  }
};

document.querySelector(".btn--1").addEventListener("click", () => {
  console.log("clicked");
  const checkbox = document.querySelectorAll(".checkbox");
  var done = false;
  for (var i = 0, l = checkbox.length; i < l; i++) {
    if (checkbox[i].checked) {
      done = true;
      break;
    }
  }
  console.log(done);
  if (done) {
    document
      .querySelector(".container__form--familyMembers")
      .classList.remove("active");

    document.querySelector(".header").insertAdjacentHTML("beforeend", submit);
    document.querySelector(".btn__start").remove();

    document.querySelector(".btn__submit").addEventListener("click", () => {
      document.querySelector(".header__title").innerHTML = "Thank You!";

      setTimeout(() => {
        document.querySelector(".container__form").submit();
      }, 2000);
      document.querySelector(".btn__submit").remove();
    });
  } else {
    document.querySelector(".container__form--familyMembers").style.border =
      "5px solid #f21a37";
  }
});
