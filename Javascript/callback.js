function sum(x, y){
    return x+y;
}

function sumWithMsg(clbk, msg){
    const result = clbk(20, 30);
    const final_result = "Hi "+ msg+" Your score is: "+ result;
    console.log(final_result);
}

sumWithMsg(sum, "Aditya");