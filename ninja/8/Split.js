const fs = require('fs');

const urlFoldersNames = (path) => {
    const folders = path.split("\\");
    folders.forEach((name,i) => {
        let j = i+1;
        console.log(name + " " + j)
    });
}

urlFoldersNames("john\\smith\\lib")