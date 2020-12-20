const fs = require('fs');

const printFolder = async (filePath) => {
    fs.readdir(filePath, { withFileTypes: true }, (err,files) => 
        {
            if(err) throw "No such directory";
            const folders = [];
            files.forEach((file) => {
                if(file.isDirectory()){
                    folders.push(filePath + "/" + file.name);
                    console.log(file.name);
                }
            })
            folders.forEach((folderDir) => {
                printFolder(folderDir);
            })
        }
    );
}

printFolder("test");