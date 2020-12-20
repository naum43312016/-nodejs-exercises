const fs = require('fs');


const replace = (filePath) => {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if(err) return console.log("Error: " +err);
        let dataArr = data.split(" ");
        let newData = dataArr.join("\n");
        fs.writeFile(filePath,newData,(err) => {
            if(err) return console.log("Error: " +err);
        })
    });
}

replace("test.txt");