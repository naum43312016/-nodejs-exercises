const fs = require('fs');

const append = (file1,file2) => {
    const data = fs.readFileSync(file1, 
            {encoding:'utf8', flag:'r'});
    const data2 = fs.readFileSync(file2, 
        {encoding:'utf8', flag:'r'});
    const list = [];
    if(data){
        let arr = data.split(" ");
        arr.forEach((word) => {
            list.push(word);
        })
    }
    if(data2){
        let arr = data2.split(" ");
        arr.forEach((word) => {
            list.push(word);
        })
    }

    return list;
}

const list = append("t.txt","t2.txt");
console.log(list);
