// 1. Our Data (The Content)
const novenaSteps = [
  {
    type: "hymn",
    title: "Opening Hymn: Immaculate Mother",
    content: `
      Immaculate Mother, to you do we plead,<br>
      To ask God, our Father, for help in our need.<br><br>
      <strong>Ave, Ave, Ave Maria!<br>
      Ave, Ave, Ave Maria!</strong><br><br>
      We pray for our country, the land of our birth,<br>
      We pray for all nations, that peace be on earth.<br><br>
      <strong>Ave, Ave, Ave Maria!<br>
      Ave, Ave, Ave Maria!</strong>
    `,
  },
  {
    type: "prayer",
    title: "The Preparatory Prayer",
    content: `
      O Most Holy Virgin Mary, who to inspire us with boundless confidence, 
      has been pleased to take the sweet name of Mother of Perpetual Help, 
      I implore you to come to my aid always and everywhere; 
      in my temptations, after my falls, in my difficulties, 
      in all the miseries of life, and above all, at the hour of my death.<br><br>
      Give me, loving Mother, the desire, nay more, the habit always to have 
      recourse to you, for I feel assured that if I am faithful in invoking 
      you, you will be faithful in coming to my assistance.<br><br>
      Obtain for me, then, this grace of graces, the grace to pray to you 
      without ceasing, and with childlike confidence, that I may ensure 
      your perpetual help and final perseverance.<br><br>
      <em>(Pause for silent prayer and personal intentions)</em>
    `,
  },
  {
    type: "hymn",
    title: "Hymn: Mary Immaculate, Star of the Morning",
    content: `
      Mary Immaculate, star of the morning,<br>
      Chosen before the creation began,<br>
      Destined to bring, through the light of your dawning,<br>
      Conquest of Satan and rescue to man.<br><br>
      <strong>Bend from your throne at the voice of our crying,<br>
      Look to this earth where your footsteps have trod;<br>
      Stretch out your arms to us, living and dying,<br>
      Mary Immaculate, Mother of God.</strong><br><br>
      We sinners honour your sinless perfection,<br>
      Fallen and weak, for your pity we plead;<br>
      Grant us the shield of your sovereign protection,<br>
      Measure your aid by the depth of our need.
    `,
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

  // Reset scroll to top so the user starts at the beginning of the new prayer
  window.scrollTo(0, 0);
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
