const NotesModel = require('./src/models/notesModel')
const NotesView = require('./src/views/notesView')

const notesModel = new NotesModel
notesModel.addNote('This is an example note')

const notesView = new NotesView(notesModel)

notesView.displayNotes()
