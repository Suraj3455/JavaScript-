const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTask');
const list = document.getElementById('taskList');

// Add new task
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.classList.add('delete');

  // Add delete functionality
  delBtn.addEventListener('click', () => {
    li.remove();
  });

  // Mark completed
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Append button to list item
  li.appendChild(delBtn);
  list.appendChild(li);

  // Clear input
  input.value = '';
});
