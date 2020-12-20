const num = process.argv[2];
if(!num || num < 1 || num > 10){
    console.log("You should provide number from 1 to 10");
    return;
}

let i = 0;
while(i<num){
    let str = '';
    let j=0;
    while(j<num){
        str+='#';
        j++;
    }
    console.log(str)
    i++;
}
