// The list of ghosts.
const ghostNames = [
    "Aswang",
    "Banshee",
    "Dayan",
    "Deildegast",
    "Deogen",
    "Demon",
    "Gallu",
    "Goryo",
    "Hantu",
    "Jinn",
    "Kormos",
    "Mare",
    "Mimic",
    "Moroi",
    "Myling",
    "Obake",
    "Obambo",
    "Oni",
    "Onryo",
    "Phantom",
    "Poltergeist",
    "Raiju",
    "Revenant",
    "Shade",
    "Spirit",
    "Thaye",
    "The Twins",
    "Wraith",
    "Yokai",
    "Yurei",
];

// Counts for each ghost
// "counts" is an object like: { "Banshee": 0, "Dayan": 2,...}

let counts = {};

// The key used to save/load data in the browser's storage.
// (Only matters if ever stored more than one thing.)
const STORAGE_KEY = "phasmophobiaGhostCounts";

// Load any saved counts from localStorage.
// localStorage lets a website remember small bits of data on your own computer, so counts are still there next time when opened
//(until you clear your browser data or click Reset All).
function loadCounts() {
  const saved = localStorage.getItem(STORAGE_KEY); // returns text, or null if nothing saved yet

  if (saved) {
    // If found saved data, convert it from text back into a real object
    counts = JSON.parse(saved);
  }

  // Make sure every ghost in list has a number
  ghostNames.forEach(function (name) {
    if (!(name in counts)) {
      counts[name] = 0;
    }
  });
}

// Saves the current "counts" object back into localStorage as text
function saveCounts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
}

// Build the ghost rows on the page. (below)
// This runs once when the page loads. For each ghost name, it creates the HTML for one row and inserts it into the page.

function renderGhostList() {
  const listContainer = document.getElementById("ghost-list");
  // document.getElementById finds the element whose id="ghost-list"
  // (that's the empty <main> tag left in index.html)

  listContainer.innerHTML = ""; // clear it out before rebuilding, lol

  ghostNames.forEach(function (name) {
    // Create the outer row element
    const row = document.createElement("div");
    row.className = "ghost-row";

    // Build the row's inner content using a template string.
    // Anything inside ${ } gets replaced with the real value.
    // data-name="${name}" stores which ghost this row belongs to
    // so click handlers below know which count to change.
    row.innerHTML = `
      <span class="ghost-name">${name}</span>
      <div class="counter-controls">
        <button class="counter-btn minus-btn" data-name="${name}">-</button>
        <span class="count-value" data-name="${name}">${counts[name]}</span>
        <button class="counter-btn plus-btn" data-name="${name}">+</button>
      </div>`;

    listContainer.appendChild(row); // add this finished row onto the page
  });
}

// Update the numbers shown on screen (without rebuilding everything from scratch just refresh the digits and total).
function updateDisplay() {
  ghostNames.forEach(function (name) {
    // querySelector finds 1 element matching a css style rule.
    // Here: "the .count-value span whose data-name matches this ghost"
    const valueEl = document.querySelector(`.count-value[data-name="${name}"]`);
    valueEl.textContent = counts[name];
  });

  // count to get the overall total mmm maths
  let total = 0;
  ghostNames.forEach(function (name) {
    total += counts[name];
  });
  document.getElementById("total-count").textContent =
    "Total encounters: " + total;
}

// Handle clicks:
// Instead of adding a separate click handler to all 54 buttons
// (27 ghosts x + and -), one listener for the whole list
// and check which button was actually clicked. apparently google called it event deligation good to know.
// ============================================================
function setupClickHandling() {
  const listContainer = document.getElementById("ghost-list");

  listContainer.addEventListener("click", function (event) {
    const clickedButton = event.target; // the exact element that was clicked
    const name = clickedButton.getAttribute("data-name");

    if (!name) return; // clicked somewhere that isn't a +/- button ignore

    if (clickedButton.classList.contains("plus-btn")) {
      counts[name] = counts[name] + 1;
    } else if (clickedButton.classList.contains("minus-btn")) {
      // Don't let counts go below 0
      counts[name] = Math.max(0, counts[name] - 1);
    } else {
      return; // not a counter button ignore
    }

    saveCounts(); // remember the new numbers
    updateDisplay(); // show the new numbers on screen
  });

  // The "Reset All" button at the top
  document.getElementById("reset-btn").addEventListener("click", function () {
    const confirmed = confirm("Reset every ghost count back to 0?");
    // confirm() shows a small browser pop-up with OK/Cancel.
    // If the player clicks cancel, "confirmed" is false and it doesn't go through.
    if (!confirmed) return;

    ghostNames.forEach(function (name) {
      counts[name] = 0;
    });
    saveCounts();
    updateDisplay();
  });
}

// Run everything once the page has loaded wooo.
loadCounts();
renderGhostList();
updateDisplay();
setupClickHandling();
