//while문
var cnt = 0;
while (true) {
    console.log(cnt);
    cnt++;
    if (cnt == 10) break;
}

//do while문
var cnt = 0;
do{
    console.log(cnt);
    cnt++;
}while(cnt<3)

//break문
outer: for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        if(i+j ===3) {
            break outer;
        }
        console.log(`inner [${i},${j}]`);
    }
}
console.log('Done');

//continue문
outer : for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        if(j ===1) {
            continue outer;
        }
        console.log(`inner [${i},${j}]`);
    }
}
console.log('Done');

