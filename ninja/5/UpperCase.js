const fs = require('fs');

const convertToUpperCase = (filePath) => {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if(err) return console.log("Error: " +err);
        let dataArr = data.split(" ");
        dataArr = dataArr.map((str,i) => {
            if((i+1)%4===0){
                return str.toUpperCase();
            }else{
                return str;
            }
        })
        let newData = dataArr.join(" ");
        fs.writeFile(filePath,newData,(err) => {
            if(err) return console.log("Error: " +err);
        })
    });
}

convertToUpperCase("text.txt");