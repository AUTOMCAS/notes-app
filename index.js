const NotesModel = require('./src/models/notesModel')
const NotesView = require('./src/views/notesView')

const notesClient = new NotesClient();
const notesModel = new NotesModel()
const notesView = new NotesView(notesModel, notesClient)

notesView.displayNotes()

