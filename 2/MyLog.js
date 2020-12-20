const fs = require('fs');
const currentTime = () => {
    let dt = new Date();
    return (
        `${
        (dt.getMonth()+1).toString().padStart(2, '0')}/${
        dt.getDate().toString().padStart(2, '0')}/${
        dt.getFullYear().toString().padStart(4, '0')} ${
        dt.getHours().toString().padStart(2, '0')}:${
        dt.getMinutes().toString().padStart(2, '0')}:${
        dt.getSeconds().toString().padStart(2, '0')}`
    )
}
const myLog = (msg, relativePath) => {
    fs.mkdir(relativePath,{ recursive: true },err => {
        if(err){
            console.log(err)
        }else{
            fs.appendFile(relativePath + '/log.txt',currentTime() + " " +  msg + '\n', function (err) {
                if (err) throw err;
            });
        }
    })
}

myLog("test msg","hello/test")
