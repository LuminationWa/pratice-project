const dropdownMenu = (() => {
  const addFunctionability = () => {
    // Mostly getting elements, makes the HTMLcolleciton into an array and then runs the checkStatus function on each element while also counting up so the dropdownmenu's id is correct
    const dropdownBtn = document.getElementsByClassName("menu-button");
    let btnArray = [...dropdownBtn];
    let count = 0;
    btnArray.forEach((button) => {
      // DropdownMenu's id is the same as the button's first class + a number
      let dropdownMenu = document.getElementById(
        button.className.split(" ")[0] + (count + 1)
      );
      button.addEventListener("click", function () {
        checkStatus(dropdownMenu);
      });
      count++;
    });
  };

  const checkStatus = (dropdownMenu) => {
    // Checks if element already has the visible class and hides/unhides
    if (dropdownMenu.className.split(" ")[1] === "visible") {
      dropdownMenu.classList.remove("visible");
    } else dropdownMenu.classList.add("visible");
  };

  return {
    addFunctionability,
    checkStatus,
  };
})();

export default dropdownMenu;
