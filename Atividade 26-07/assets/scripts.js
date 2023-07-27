const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const tasksDiv = document.getElementById('tasks');

taskForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    return;
  }

  const taskItem = createTaskElement(taskText);
  tasksDiv.appendChild(taskItem);
  taskInput.value = '';
});

function createTaskElement(text) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task');
  taskItem.innerHTML = `
    <span class="task-text">${text}</span>
    <button class="mark-as-completed">Concluída</button>
    <button class="remove">Remover</button>
  `;

  const markAsCompletedBtn = taskItem.querySelector('.mark-as-completed');
  markAsCompletedBtn.addEventListener('click', function () {
    taskItem.classList.toggle('completed');
  });

  const removeBtn = taskItem.querySelector('.remove');
  removeBtn.addEventListener('click', function () {
    tasksDiv.removeChild(taskItem);
  });

  return taskItem;
}