class NotesView {
  constructor (notesModel) {
    this.notesModel = notesModel

    this.buttonEl = document.querySelector('#add-note-button')

    this.buttonEl.addEventListener('click', () => {
      this.displayNotes()
    })

    this.inputEl = document.querySelector('#input')
  }

  displayNotes () {
    const inputEl = this.inputEl
    this.notesModel.addNote(inputEl.value)

    const notes = this.notesModel.getNotes()

    notes.forEach((note => {
      const newDivEl = document.createElement('div')

      newDivEl.textContent = note
      newDivEl.className = 'note'
      document.body.append(newDivEl)
    }))
  }
}

module.exports = NotesView
