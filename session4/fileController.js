const fs = require('fs');

let readFile = (path, onReadFileDone) => {
  fs.readFile(path, 'utf-8', (err, data)=>{
    if (err) {
      console.log(err);
    }
    onReadFileDone(data)
  });
}

let writeFile = (path, writedata, onWriteDataDone) => {
  fs.writeFile(path, writedata, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Success');
  });
}

module.exports = {
  readFile,
  writeFile
}
