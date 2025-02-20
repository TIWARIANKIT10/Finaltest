const apitest = ()=>{
 
    return  new Promise((resolve,reject)=>{
        let check = true;
        if(check){
            resolve("sucess");
        }
        else{
            reject("insuccess");
        }
    });
};

let callapi = apitest();
callapi.then(()=>{
    console.log("all is okay my lord");
})



function getdata1(){
    return new Promise((resolve,reject)=>{
      
     setTimeout(()=>{
        console.log("data 1");
           resolve("success");

     },3000)
    })
}
function getdata2(){
    return new Promise((resolve,reject)=>{
        console.log("data 2");
        resolve("sucess")
    })
}
getdata1().then(()=>{
    return getdata2();

  
}).then();

console.log("this is the exmaple of merge ");
