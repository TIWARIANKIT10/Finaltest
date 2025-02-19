function walk(callback){
    console.log("walk");
    callback();
}
function run(callback){
    console.log("run");
    callback();
}
function stop(){
    console.log("stop")
}

walk(()=>{run(()=>{stop()})})
