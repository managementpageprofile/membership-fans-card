const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const serviceSelect = document.getElementById("serviceSelect");
const requestType = document.getElementById("requestType");
const form = document.getElementById("requestForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

function selectRequest(value) {
  const options = [...serviceSelect.options];
  const option = options.find(o => o.value === value);
  if (option) serviceSelect.value = value;
  else serviceSelect.value = "Fan Card";
  requestType.value = serviceSelect.value;
  document.getElementById("request").scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll(".choose-ticket").forEach(button => {
  button.addEventListener("click", () => selectRequest(button.dataset.request));
});

document.getElementById("fanCardButton").addEventListener("click", () => {
  selectRequest("Fan Card");
});

serviceSelect.addEventListener("change", () => {
  requestType.value = serviceSelect.value;
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  successMessage.hidden = true;
  errorMessage.hidden = true;

  if (form.action.includes("YOUR_FORM_ID")) {
    errorMessage.textContent =
      "The form email destination is not configured yet. Replace YOUR_FORM_ID in index.html with your Formspree form ID.";
    errorMessage.hidden = false;
    return;
  }

  const submitButton = form.querySelector(".submit-button");
  submitButton.disabled = true;
  submitButton.textContent = "SUBMITTING...";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });

    if (!response.ok) throw new Error("Submission failed");

    form.reset();
    serviceSelect.value = "Fan Card";
    requestType.value = "Fan Card";
    successMessage.hidden = false;
  } catch (error) {
    errorMessage.hidden = false;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "SUBMIT REQUEST";
  }
});
