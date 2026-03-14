const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const chartButtons = document.querySelectorAll(".chart-btn");
const bars = document.querySelectorAll(".bar");

menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

chartButtons.forEach(button => {
  button.addEventListener("click", function () {
    chartButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const mode = button.textContent.trim();

    if (mode === "Weekly") {
      setBars([55, 72, 48, 85, 67, 92, 74]);
    } else if (mode === "Monthly") {
      setBars([68, 82, 58, 77, 86, 91, 80]);
    } else {
      setBars([72, 88, 79, 94, 84, 97, 89]);
    }
  });
});

function setBars(values) {
  bars.forEach((bar, index) => {
    bar.style.height = `${values[index]}%`;
  });
}

document.addEventListener("click", function (e) {
  if (
    window.innerWidth <= 860 &&
    !sidebar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    sidebar.classList.remove("show");
  }
});