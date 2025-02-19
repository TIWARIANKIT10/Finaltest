 function getapidata(){
    return new Promise((resolve,reject)=>{
     resolve("weather data");
    })
 }

 async function call (){
    await getapidata().then((mess)=>{
        console.log("pokhara",mess)
    })
 
 }
 call()