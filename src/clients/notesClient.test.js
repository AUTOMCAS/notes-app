/**
 * @jest-environment jsdom
 */

const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('Client class', () => {
  it('calls fetch and loads data', (done) => {
    const notesClient = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ['This note is coming from the server'],
      })
    );


    notesClient.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes).toEqual([
        'This note is coming from the server',
      ]); 
      done();
    });
  });
});
