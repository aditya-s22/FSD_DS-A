const id = "Deepak";
const pass = 1234;

function check(id, pass){
    if (id=="Deepak" && pass==1234){
        return true;
    }
    else{
        return false;
    }
}

function user(clbk, msg){
    const res = clbk("Deepak", 1234);
    const final_result = "User "+ msg;
    console.log(final_result);
}


user(check , "Verified!");