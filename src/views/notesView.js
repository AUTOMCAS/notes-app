class NotesView {
  constructor (notesModel, client) {
    this.notesModel = notesModel
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button')

    this.buttonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
      document.querySelector('#add-note-input').value = '';
      //this.displayNotes()
    })
  }

  displayNotes () {
    document.querySelectorAll('div.note').forEach(el => el.remove())
      
    const notes = this.notesModel.getNotes()
    notes.forEach((note => {
      const newDivEl = document.createElement('div')
      newDivEl.textContent = note
      newDivEl.className = 'note'
      document.body.append(newDivEl)
    }))
  }

  addNewNote(newNote) {
    this.notesModel.addNote(newNote);
    this.displayNotes();
  }
}

module.exports = NotesView
