'use strict'

const searchNote = document.querySelector('#searchNote'),
  todoFilter = document.querySelector('#todoFilter'),
  notesParent = document.querySelector('.notes')

const note = [
  {
    note: 'Note'
  },
  {
    note: 'Teching'
  },
  {
    note: 'Listening'
  },
  {
    note: 'Reding'
  },
  {
    note: 'Sleeping'
  },
  {
    note: 'Gaming'
  },
]
function addNotes() {
  note.forEach((e, ind) => {
    notesParent.innerHTML += `<label class="note-item">
      <div>
        <input type="checkbox" ${ind % 3 === 0 ? "checked" : ''}>
      </div>
      <h4>${e.note} #${ind + 1}</h4>
    </label>`
  })
}

addNotes()

function searchNoteFunc() {
  let serchVal = searchNote.value,
    noteh4 = notesParent.querySelectorAll('.notes h4')

  todoFilter.value = 'all'

  noteh4.forEach(e => {
    e.parentElement.classList.add('d-none')
    e.parentElement.classList.remove('d-flex')
    if (e.textContent.toLowerCase().includes(serchVal.toLowerCase())) {
      e.parentElement.classList.add('d-flex')
    }
  })
}

function filterFunck() {
  let filterVal = todoFilter.value,
    todoInput = notesParent.querySelectorAll('.notes input');


  todoInput.forEach(e => {

    e.parentElement.parentElement.classList.add('d-none')
    e.parentElement.parentElement.classList.remove('d-flex')
    if (filterVal === 'all') {
      e.parentElement.parentElement.classList.add('d-flex')
    } else if (e.checked && filterVal === 'done') {
      e.parentElement.parentElement.classList.add('d-flex')
    } else if (!e.checked && filterVal === 'notDone') {
      e.parentElement.parentElement.classList.add('d-flex')
    }
  })
}

function inputDetect() {
  let todoInput = notesParent.querySelectorAll('.notes input');

  todoInput.forEach(e => {
    e.addEventListener('input', filterFunck)
  })
}

function security() {
  document.addEventListener('keydown', (e) => {
    console.log(e.code);

    if (e.code === 'F12') {
      e.preventDefault()
      alert('Protected')
    }
  })
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    alert('Protected')
  })

}

inputDetect()
filterFunck()

searchNote.addEventListener('input', searchNoteFunc)
todoFilter.addEventListener('input', filterFunck)

security()