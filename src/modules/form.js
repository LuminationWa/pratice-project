const formValidation = (() => {
  const addFunctionability = () => {
    addGeneralFunctionability();
    addPatternFunctionability("email", "[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    addPatternFunctionability("zip-code", "/^([0-9]{5})(?:[-s]*([0-9]{4}))?$/");
    addPasswordCheck("password", "confirm-password");
  };

  const addGeneralFunctionability = () => {
    // Sets default behavior like the required attribute, the box shadow depending on validity and the check after leaving the field
    let inputs = document.getElementsByTagName("input");
    let inputArray = [...inputs];
    inputArray.forEach((input) => {
      input.required = true;
      input.onblur = function () {
        input.checkValidity() === false
          ? (input.style.boxShadow = "0 0 5px 1px red")
          : (input.style.boxShadow = "0 0 5px 1px green");
        input.reportValidity();
      };
    });
  };

  const addPatternFunctionability = (id, pattern) => {
    // Simply sets the pattern for an element
    let inputElement = document.getElementById(`${id}`);
    inputElement.pattern = pattern;
  };

  const addPasswordCheck = (input1, input2) => {
    // Gets both password input fields and on input compares them and returns the corresponding message
    let password1 = document.getElementById(`${input1}`);
    let password2 = document.getElementById(`${input2}`);
    password2.oninput = function () {
      if (password1.value != password2.value) {
        password2.setCustomValidity("The passwords must match");
      } else {
        // input is valid -- reset the error message
        password2.setCustomValidity("");
      }
    };
  };

  return {
    addFunctionability,
    addPatternFunctionability,
    addPatternFunctionability,
    addPasswordCheck,
  };
})();

export default formValidation;
