console.log("Starting app");

setTimeout(()=> {
    console.log("inside callback")
},2000)

setTimeout(()=> {
    console.log("ZERO")
},0)
console.log("Stopping app")