"use strict"
const notesEl = document.querySelector('.main');
const addBtn = document.querySelector('.note-add')

function createNote(title, text) {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  noteEl.classList.add('col-4');
  noteEl.innerHTML = `
    <div class="card">
      <h5 class="card-title" id="note-title">${title}</h5>
      <textarea id="note-title-input" class="hidden">${title}</textarea>
      <p class="card-text" id="note-text">${text}</p>
      <textarea id="note-textarea" class="hidden">${text}</textarea>
      <div class="btn-group">
        <button class="note-edit btn btn-secondary"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="note-delete btn btn-danger"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `

  const editBtn = noteEl.querySelector('.note-edit');
  const deleteBtn = noteEl.querySelector('.note-delete');
  const titleEl = noteEl.querySelector('#note-title');
  const textEl = noteEl.querySelector('#note-text');
  const titleInputEl = noteEl.querySelector('#note-title-input');
  const textInputEl = noteEl.querySelector('#note-textarea');

  editBtn.addEventListener('click', (e) => {
    titleEl.classList.toggle('hidden');
    textEl.classList.toggle('hidden');

    titleInputEl.classList.toggle('hidden');
    textInputEl.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', (e) => {
    noteEl.remove();
  });

  titleInputEl.addEventListener('input', (e) => {
    titleEl.innerText = e.target.value;
  });

  textInputEl.addEventListener('input', (e) => {
    textEl.innerText = e.target.value;
  });

  return noteEl;
}

addBtn.addEventListener('click', (e) => {
  const el = createNote("Заголовок", "Ваш текст");
  notesEl.appendChild(el);
});