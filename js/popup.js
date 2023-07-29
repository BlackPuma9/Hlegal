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

document.getElementById("submit-btn").addEventListener("click", () => {
  alert(
    "Your form has been submitted succesfully. We will come back to you shortly!"
  );
  document.getElementById("popup").style.display = "none";
});
