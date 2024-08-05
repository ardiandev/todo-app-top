const projectKey = "projects";
const defaultProjects = ["work", "school", "house"];

function saveProject(name) {
  const data = getData();
  data.push(name);
  data.sort();
  localStorage.setItem(projectKey, JSON.stringify(data));
}

const getData = () => {
  try {
    const data = localStorage.getItem(projectKey);

    if (!data) {
      localStorage.setItem(projectKey, JSON.stringify(defaultProjects));
      return JSON.parse(data);
    }
    return JSON.parse(data);
  } catch (error) {
    console.error(error.message);
  }
};

function renderProjects() {
  const data = getData();
  let output = "";
  data.forEach(item => {
    output += `
    <li>${item}</li>
    `;
  });

  document.querySelector(".project-list-container").innerHTML = output;
}

function addProject(name) {
  saveProject(name);
  renderProjects();
}

const addProjectBtn = document.querySelector("#add-project");
addProjectBtn.addEventListener("click", () => {
  if (addProjectBtn.textContent === "Add project") {
    addProjectBtn.textContent = "Submit";
    const input = document.createElement("input");
    input.classList.add("input-project");
    addProjectBtn.before(input);
  } else {
    const inputEl = document.querySelector(".input-project");
    addProject(inputEl.value);
    renderProjects();

    inputEl.remove();
    addProjectBtn.textContent = "Add project";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  getData();
  renderProjects();
});
