class NotesClient {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}

module.exports = NotesClient;


// const notes = [{notes: 'a note'}];
// const resp = {data: notes};
// resp.data[0].notes