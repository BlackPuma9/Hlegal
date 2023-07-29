const showForm = () => {
  document.getElementById("popup").style.display = "block";
};

const hideForm = () => {
  document.getElementById("popup").style.display = "none";
};

setTimeout(showForm, 5000);

document.addEventListener("click", function handleClickOutsideBox(event) {
  const box = document.getElementById("form1");

  if (!box.contains(event.target)) {
    document.getElementById("popup").style.display = "none";
  }
});
