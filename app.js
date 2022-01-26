function computerPlay(){
    let pick = ['rock','scissors','paper'];
    let random = Math.round(Math.random() * 2);
    return pick[random];
}

let res = computerPlay();
console.log(res)