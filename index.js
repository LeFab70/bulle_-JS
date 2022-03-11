const bullejouer = () => {
  const span = document.createElement("span");
  const size = `${Math.random() * 200 + 100}px`;
  /* console.log(size); */
  span.classList.add("bulles");
  span.style.height = size;
  span.style.width = size;
  span.style.top = `${Math.random() * 100 + 50}%`;
  span.style.left = `${Math.random() * 100}%`;
  const posleft = Math.random() > 0.5 ? 1 : -1;
  span.style.setProperty("--left", `${Math.random() * 100 * posleft}%`);
  document.body.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 8000);
};

setInterval(() => {
  bullejouer();
}, 100);
