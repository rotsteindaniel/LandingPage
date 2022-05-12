const sobreMim = document.querySelector("#sobre-mim");
const sobreMimModal = document.querySelector("#sobre-mim-modal");

const openmodal = () => {
  sobreMimModal.classList.remove("hide");
};

const closemodal = () => {
    sobreMimModal.classList.add("hide");
};

const e = (e) => {
  if (e.keyCode === 27) {
    return closemodal();
  }
};

sobreMim.addEventListener("click", openmodal);

window.addEventListener("keydown", e);