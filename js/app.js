const menu = document.getElementById("humburger-btn");
menu.addEventListener("click", () => {
  document.getElementById("humburger-items").classList.toggle("show-menu");
});

const getWrapper = document.getElementById("language-wrapper");
const getLick = getWrapper.getElementsByClassName("language");

for (let i = 0; i < getLick.length; i++) {
  getLick[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
  });
}

const getWrapperMob = document.getElementById("language-wrapper-mobile");
const getLickMob = getWrapperMob.getElementsByClassName("language");

for (let i = 0; i < getLickMob.length; i++) {
  getLickMob[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
  });
}
