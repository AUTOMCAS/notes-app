const NotesModel = require('./src/models/notesModel')
const NotesView = require('./src/views/notesView')

const notesModel = new NotesModel
const notesView = new NotesView(notesModel)

notesView.displayNotes()
