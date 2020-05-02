const input = document.querySelector("input");

/** Toggle between theme. */
let whitemode = localStorage.getItem("whitemode");
let flag = JSON.parse(whitemode);

const toggleWhitemode = () => {
  localStorage.setItem("whitemode", (flag = flag ? false : true));
  document.body.classList.toggle("whiteTheme");
  checkTheme();
};

/** Check which theme is turned on. */
const checkTheme = () => {
  let whitemode = localStorage.getItem("whitemode");
  // Type from localstorage is a string not boolean
  if (whitemode == "true") {
    document.body.classList.add("whiteTheme");
  } else if (whitemode == "false") {
    document.body.classList.remove("whiteTheme");
  }
};

checkTheme();

input.addEventListener("click", toggleWhitemode);
