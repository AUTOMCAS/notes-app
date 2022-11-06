/**
 * @jest-environment jsdom
 */


const NotesModel = require('../models/notesModel')
const NotesView = require('./notesView')
const fs  = require('fs');

describe('notesView', () => {
  describe('displayNotes()', () => {
    it('Adds input note on button click', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      
      const notesModel = new NotesModel()
      const notesView = new NotesView(notesModel)
      
      const buttonEl = document.querySelector('#add-note-button')
      const inputEl = document.querySelector('#add-note-input')
      inputEl.value = "EAT"
      buttonEl.click()     

      const notes = document.querySelectorAll('div.note')
      expect(document.querySelectorAll('div.note')[0].textContent).toBe("EAT");
      expect(document.querySelectorAll('div.note').length).toBe(1)
    })

    it('Adds second input note on button click', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      
      const notesModel = new NotesModel()
      const notesView = new NotesView(notesModel)
      
      const buttonEl = document.querySelector('#add-note-button')
      const inputEl = document.querySelector('#add-note-input')
      inputEl.value = "THIS"
      buttonEl.click()
      inputEl.value = "AGAIN"
      buttonEl.click()

      expect(document.querySelectorAll('div.note')[0].textContent).toBe("THIS");
      expect(document.querySelectorAll('div.note')[1].textContent).toBe("AGAIN");
      expect(document.querySelectorAll('div.note').length).toEqual(2)
    })
  })

  describe('displayNotesFromApi', () => {
     xit('fetches the data from the client and displays a note', (done) => {
 
      const notesModel = new NotesModel();
      const notesView = new NotesView(notesModel, notesClient);

      notesView.displayNotesFromApi();

        expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
          'This note is coming from the server'
       );
    });
  });
})