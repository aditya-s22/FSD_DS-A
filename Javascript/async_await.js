function f1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Hi");
        },4000)
    })
}

function f2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("ABES College");
            resolve();
        },2000)
    })
}

// without try-catch
async function test(){
    await f1();
    await f2();
}
test();


// with try-catch
async function test(){
    try{
        await f1();
        await f2();
    }

    catch(err){
        console.log("Error", err);
    }
}
test();