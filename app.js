// 1. Our Data (The Content)
const novenaSteps = [
  {
    type: "hymn",
    title: "Opening Hymn: Immaculate Mother",
    content:
      "Immaculate Mother, to you do we plead,<br>To ask God, our Father, for help in our need.<br><br><strong>Ave, Ave, Ave Maria!</strong>",
  },
  {
    type: "prayer",
    title: "The Preparatory Prayer",
    content:
      "O Most Holy Virgin Mary, who to inspire us with boundless confidence...",
  },
  {
    type: "hymn",
    title: "Hymn: Mary Immaculate, Star of the Morning",
    content:
      "Mary Immaculate, star of the morning,<br>Chosen before the creation began...",
  },
];

// 2. The State (Where are we right now?)
let currentIndex = 0;

// 3. The Functions (The Logic)
function renderStep() {
  const display = document.getElementById("novena-display");
  const step = novenaSteps[currentIndex];

  // Use the 'type' to decide which CSS class to apply
  const cardClass = step.type === "hymn" ? "hymn-card" : "prayer-card";
  const titleClass =
    step.type === "hymn" ? "hymn-card__title" : "prayer-card__title";

  display.innerHTML = `
        <section class="${cardClass}">
            <h2 class="${titleClass}">${step.title}</h2>
            <div class="content">${step.content}</div>
        </section>
    `;

  // Everytime we render, we check the buttons
  updateButtons();

  // 4. Update the Progress Bar (The very bottom)
  const progress = ((currentIndex + 1) / novenaSteps.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
}

function updateButtons() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  // 1. If at the start, hide 'Previous'
  if (currentIndex === 0) {
    prevBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
  }

  // 2. If at the end, hide 'Next'
  if (currentIndex === novenaSteps.length - 1) {
    nextBtn.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }
}

// 4. Event Listeners (The Interaction)
document.getElementById("next-btn").addEventListener("click", () => {
  if (currentIndex < novenaSteps.length - 1) {
    currentIndex++;
    renderStep();
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderStep();
  }
});

// Initial call to show the first step
renderStep();
