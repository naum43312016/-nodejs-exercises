var ncp = require('ncp').ncp;


const copyDir = (sourceDir, destDir) => {
    ncp(sourceDir, destDir, function (err) {
        if (err) {
          console.log(err)
        }else{
          console.log('done!');
        }
       });
}

copyDir("hello","helloCopy")