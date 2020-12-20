/*
Create a function that receives a directory path as string, 
and deletes that path including all files and directories within it.
*/
const fs = require('fs');

const removePath = (dir) => {
    fs.rmdirSync(dir, { recursive: true }, (err) => {
        if(err) return console.log(err)
        console.log("Deleted")
    })
}
removePath("hh")