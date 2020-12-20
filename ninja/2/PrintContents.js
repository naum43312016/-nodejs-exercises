/*
Create a function printContents that receives a directory path as string, 
and prints into a text file named contents.txt  the names of all the files and directories within the path
a) create the file if doesn't exist
b) the file should be located in the parent folder of the path given
c) Catch relevant errors 
*/ 
const fs = require('fs');

const printContents = (dir) => {   
    fs.readdir(dir, (err, files) => {
      if(err) return console.log("Err: " + err)
      let allFilesAndFolders = '';
      files.forEach(file => {
        allFilesAndFolders+=file+'\n';
      });
      fs.writeFile(dir+'/contents.txt', allFilesAndFolders, function (err) {
        if (err) return console.log(err);
        console.log('success');
      });
    });}

printContents("test");