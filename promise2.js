const votecheck= (age)=>{
    return new Promise((resolve, reject) => {
        age = age;
        if(age>18){
            resolve("you are ready to vote")
        }
        else{
            reject("you are not ready to vote")
        }
    })
}

const voteplace = ()=>{
    return new Promise((resolve,reject) => {
        resolve("place is no where");
         reject("request rejected")
        
    })
}

votecheck(198).then((result)=>{
    console.log(result)
    return voteplace()
    
}).catch((result)=>{
    console.log(result)
})