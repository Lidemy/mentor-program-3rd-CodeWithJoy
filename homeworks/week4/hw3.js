const request = require('request');
const process = require('process');

const idNum = parseInt(process.argv[3], 10);

if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, status, body) => {
    const data = JSON.parse(body);
    data.map((e) => { console.log(e.id, e.name); });
  });
}

if (process.argv[2] === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${idNum}`, (error, status, body) => {
    const data = JSON.parse(body);
    if (status.statusCode === 200) {
      console.log(data.id, data.name);
    } else if (status.statusCode === 404) {
      console.log('此id不存在，請輸入其他id編號');
    } else {
      console.log('error', error);
    }
  });
}

if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${idNum}`, (error, status, body) => {
    if (status.statusCode === 200) {
      console.log('Delete successfully');
    } else {
      console.log('Delete Failed.');
      console.log('error', error);
    }
  });
}

if (process.argv[2] === 'create') {
  request.post({ url: 'https://lidemy-book-store.herokuapp.com/books/', form: { name: process.argv[3] } }, (error, status, body) => {
    if (status.statusCode === 201) {
      console.log('Create successfully');
    } else {
      console.log('Create Failed.');
      console.log('error:', error);
    }
  });
}

if (process.argv[2] === 'update') {
  request.patch({ url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, form: { name: process.argv[4] } }, (error, status, body) => {
    if (status.statusCode === 200) {
      console.log('Update successfully!');
    } else {
      console.log('Update Failed.');
      console.log('error', error);
    }
  });
}
