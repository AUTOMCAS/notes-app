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
    this.inputEl.value = ""
    
    const allNotes = document.querySelectorAll('div.note')
    allNotes.forEach(el => el.remove())

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
