const cursor = document.querySelector(".cursor");
const trails = [];
const maxTrails = 15; // Increased trail count

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.innerHTML = ['❅', '❆', '❉', '❋', '❊'][Math.floor(Math.random() * 5)];
  snowflake.style.left = Math.random() * 100 + '%';
  snowflake.style.opacity = Math.random() * 0.5 + 0.5;
  snowflake.style.fontSize = (Math.random() * 15 + 10) + 'px';
  snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(snowflake);

  snowflake.addEventListener('animationend', () => {
    snowflake.remove();
  });
}

setInterval(createSnowflake, 100);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
  
  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);
  trails.push(trail);

  if (trails.length > maxTrails) {
    const oldTrail = trails.shift();
    oldTrail.remove();
  }

  setTimeout(() => {
    trail.style.opacity = "0";
    setTimeout(() => trail.remove(), 500);
  }, 200);
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});