function download(callback){
    console.log("File downloading")
    setTimeout(()=>{
        console.log("hellow world 3 second delay")
        callback();
    },3000);
}
 function  successfull(){
    console.log("File  has downloaded sucessfull")
 }

download(()=>{successfull()});