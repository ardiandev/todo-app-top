const defaultTasks = [
  {
    id: 1,
    title: "Doing Math homework",
    dueDate: "May 23, 2023",
    priority: true,
    project: "school"
  },
  {
    id: 2,
    title: "Cleaning bedroom",
    dueDate: "May 23, 2023",
    priority: false,
    project: "house"
  },
  {
    id: 3,
    title: "Making report to the bos",
    dueDate: "May 23, 2023",
    priority: false,
    project: "work"
  }
];

const taskKey = "todo";

function getData() {
  const data = localStorage.getItem(taskKey);

  try {
    if (!data) {
      localStorage.setItem(taskKey, JSON.stringify(defaultTasks));
    }

    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
  }
}

function saveData(task) {
  const data = getData();
  data.push(task);
  localStorage.setItem(taskKey, JSON.stringify(task));
}

const addTaskBtn = document.querySelector("#add-todo");
addTaskBtn.addEventListener("click", () => {
  showHideForm();
  console.log("add todo");
});

function createForm() {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  formContainer.innerHTML = `
  <form method="POST">
    <ul>
      <li>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" required>
      </li>
      <li>
      <label for="description">Description</label>
      <textarea id="desciption" name="description" required ></textarea>
    </li>
    </ul>
    <button>Submit</button.
  </form>  
  `;

  return formContainer;
}

function showHideForm() {
  if (addTaskBtn.textContent === "Add Task") {
    addTaskBtn.before(createForm());
    addTaskBtn.textContent = "Submit";
    addTaskBtn.style.display = "none";
  } else {
    const form = document.querySelector(".form-container form");
    const title = form.name.title;

    console.log(title);
    form.remove();
    addTaskBtn.textContent = "Add Task";
  }
}
